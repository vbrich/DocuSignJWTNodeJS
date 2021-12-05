### Secret Keys to Setup on Use

Create the following secrets based on your DocuSign account

* integrationkey = When you create an API application, you get this 
* userid = At the account level. This is who our JWT is impersonating for esigning
* privatekey = Cut/paste your RSA private key here
* redirecturi = Cut/paste the redirect uri you set in your DocuSign API app

### General synopsis

* API Specifications = http://docusign.github.io/docusign-esign-node-client/ 
* index.js = main program
* docs.js = functions that return documents for quick changing/tweaking
* makeenvelope.js = function to create envelope using passed in arguments

### Authentication Details

DocuSign uses the AuthCodeGrant consent flow on top of the JWT security

1. When we first grant consent, we need 'impersonation' to grant JWT future consent
2. Outside of that first call, it is not needed. 
3. If you dont include 'impersonation' during consent, the JWT request user token method will return 'consent_required'
4. signature scope is esignature rights
5. oAuthBasePath is https://account.docusign.com in PROD
6. apiBasePath is https://docusign.net in PROD

Note: You want to pull accountId from the impersonated userID to support multiple org accounts

### Access Token and Expiry Variables

1. 3600 is 1 hour for our JWT, with no refresh token
2. AuthCodeGrant is 8 hours plus a 30 day refresh token, then a new login required
3. Ignore the code that comes back from the consent call when using JWT. That is specific to AuthCodeGrant

 

