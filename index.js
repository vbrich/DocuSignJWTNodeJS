const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
const docusign = require("docusign-esign");
const open = require("open"); 
const { exit } = require("process"); 
const envelopeCreator = require("./makeenvelope"); 
const impersonationUserGuid = process.env['userid']; 
const integrationKey = process.env['integrationkey']; 
const rsaKey = process.env['privatekey']; 
const redirectUri = process.env['redirecturi']; 
let accessToken, expiry, accountId; 
let scopes = "signature"; // 'signature' is for eSignature
let oAuthBasePath = "account-d.docusign.com"; // don't put the https://, also account.docusign.com is prod 
let apiBasePath = "https://demo.docusign.net/restapi"; // https://docusign.net is prod

// DocuSign uses the AuthCodeGrant consent flow on top of the JWT security
// 1 - When we first grant consent, we need 'impersonation' to grant JWT future consent
// 2 - Outside of that first call, it is not needed. 
// 3 - If you dont include 'impersonation' during consent, the JWT request user token method will return 'consent_required'
let consentUrl = `https://${oAuthBasePath}/oauth/auth?response_type=code&scope=impersonation+${scopes}&client_id=${integrationKey}&redirect_uri=${redirectUri}`;

const envelopeArgs = {
  signerEmail: "sbadoc.test@gmail.com",
  signerName: "Billy Kid",
  recipientId: "1",
  clientUserId: "123",
  status: "sent"
};

// Setting a global DocuSign (DS) object so we can reuse the function elseware (function expressions)
let DS = {};

// Sets the accessToken and expiry variables
// 1 - 3600 is 1 hour for our JWT, with no refresh token
// 2 - AuthCodeGrant is 8 hours plus a 30 day refresh token, then a new login required
// 3 - Ignore the code that comes back from the consent call when using JWT. That is specific to AuthCodeGrant
DS.getJWT = async function _getJWT() {
    try {
        let apiClient = new docusign.ApiClient();
        apiClient.setOAuthBasePath(oAuthBasePath);
        let privateKey = rsaKey; 
        let response = await apiClient.requestJWTUserToken(integrationKey, impersonationUserGuid, scopes, privateKey, 3600); 
        expiry = response.body.expires_in; 
        accessToken = response.body.access_token; 
        // console.log(response.body);
        return { "expiry": expiry, "accessToken": accessToken }; // accessible json from module exports
    } catch (err) {
        // Verify we have a response body to parse
        if (err.response) {
            if (err.response.body.error == "consent_required") {
                console.log("consent required");
                console.log("Consent URL: " + consentUrl);
                await open(consentUrl, {wait: true}); // open the browser and get consent done         
                exit(0); // Exit since we cannot run further API calls
            }
        } else {
            // Legitimate errors
            console.error(err);
            exit(0);
        }
    }
};

// Note: We are pulling accountId from the impersonated userID to support multiple org accounts  
DS.getUserInfo = async function _getUserInfo(accessToken){
    try {        
        let apiClient = new docusign.ApiClient();
        apiClient.setOAuthBasePath(oAuthBasePath);
        let response = await apiClient.getUserInfo(accessToken);  
        accountId = response.accounts[0].accountId; 
        // console.log(response);
        return { "accountId": accountId }; 
    } catch (err) {
        console.error(err);
    }
};

DS.getEnvelope = async function _getEnvelope(accessToken, envelopeId) {
  try {
      let dsApiClient = new docusign.ApiClient();
      dsApiClient.setBasePath(apiBasePath);
      dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
      let envelopesApi = new docusign.EnvelopesApi(dsApiClient);
      let response = await envelopesApi.getEnvelope(accountId, envelopeId, null);
      return response;
  } catch (err) {
    console.error(err);
  }
};

DS.createEnvelope = async function _createEnvelope(accessToken) {
  try {
      let dsApiClient = new docusign.ApiClient();
      dsApiClient.setBasePath(apiBasePath);
      dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
      let envelopesApi = new docusign.EnvelopesApi(dsApiClient),
        results = null;

      const args = {
        accessToken: accessToken,
        basePath: apiBasePath,
        accountId: accountId,
        envelopeArgs: envelopeArgs
      };      
      let envelope = envelopeCreator.makeEnvelope(args.envelopeArgs);
      
      // console.log("accountId = " + accountId); 
      results = await envelopesApi.createEnvelope(accountId, {envelopeDefinition: envelope});
      let envelopeId = results.envelopeId;

      console.log(`>>> Envelope was created with ID = ${envelopeId}`);
      return {envelopeId: envelopeId};
  } catch (err) {
    console.error(err);
  }
};

DS.createRecipientView = async function _createRecipientView(accessToken, envId) {
  try {
      let dsApiClient = new docusign.ApiClient();
      dsApiClient.setBasePath(apiBasePath);
      dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);

      var envelopesApi = new docusign.EnvelopesApi(dsApiClient);
      var viewRequest = new docusign.RecipientViewRequest();
      viewRequest.returnUrl = 'http://docusign.github.io/docusign-esign-node-client/';
      viewRequest.authenticationMethod = 'email';

      viewRequest.email = envelopeArgs.signerEmail;
      viewRequest.userName = envelopeArgs.signerName;
      viewRequest.recipientId = envelopeArgs.recipientId;
      viewRequest.clientUserId = envelopeArgs.clientUserId;

      let results = await envelopesApi.createRecipientView(accountId, envId, {'recipientViewRequest': viewRequest}, null);
      // console.log(results);
      return results.url;
  } catch (err) {
    console.error(err);
  }
};

// IIFE = Immediately Invoked Function Expression (runs as soon as it is described)
(async () => {    
    const timeStart = window.performance.now();

    console.log("\n" + "----- ABOUT TO GET ACCESSTOKEN AND ACCOUNTID -----" + "\n");
    await DS.getJWT();
    await DS.getUserInfo(accessToken);
    const timeTokenReceived = window.performance.now();
    console.log("\n" + `>>> Time taken to get token = ${(timeTokenReceived - timeStart)/1000} seconds`);

    console.log("\n" + "----- ABOUT TO CREATE ENVELOPE -----" + "\n");
    let env = await DS.createEnvelope(accessToken);
    let envelopeId = env.envelopeId;
    const timeEnvelopeCreated = window.performance.now();
    console.log("\n" + `>>> Time taken to create envelope = ${(timeEnvelopeCreated - timeTokenReceived)/1000} seconds`);

    console.log("\n" + "----- ABOUT TO CREATE SIGNING LINK -----" + "\n");
    let url = await DS.createRecipientView(accessToken, envelopeId);
    console.log(url);
    const timeLinkCreated = window.performance.now();
    console.log("\n" + `>>> Time taken to get link = ${(timeLinkCreated - timeEnvelopeCreated)/1000} seconds`);    
    
    console.log("\n" + "----- ABOUT TO GET ENVELOPE -----" + "\n");
    let createdEnvelope = await DS.getEnvelope(accessToken, envelopeId);
    const timeEnvelopeReceived = window.performance.now();
    // console.log(createdEnvelope);
    console.log("\n" + `>>> Time taken to get envelope = ${(timeEnvelopeReceived - timeLinkCreated)/1000} seconds`);   
})();




