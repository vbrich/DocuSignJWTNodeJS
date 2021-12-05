const docusign = require("docusign-esign");
const docs = require("./docs");

function makeEnvelope(args) {

  let env = new docusign.EnvelopeDefinition();
  env.emailSubject = "DocuSign REPLIT Example";

  // Document 1 is HTML sent to be signed as HTML
  // AuthorizationToReleasePayoff.html
  let doc1 = new docusign.Document();
  let htmlDef = new docusign.DocumentHtmlDefinition();
  htmlDef.source = Buffer.from(docs.htmldoc1()).toString("utf8");
  doc1.htmlDefinition = htmlDef; 
  doc1.name = "Document 1"; 
  doc1.documentId = "1"; 
  
  // Document 2 is HTML sent to be signed as HTML
  // LawCAAuthorize.html
  let doc2 = new docusign.Document();
  let htmlDef2 = new docusign.DocumentHtmlDefinition();
  htmlDef2.source = Buffer.from(docs.htmldoc2()).toString("utf8");
  doc2.htmlDefinition = htmlDef2;
  doc2.name = "Document 2";
  doc2.documentId = "2";

  // Document 3 is HTML sent to be PDF at signing
  // LemonLaw.html
  let doc3 = new docusign.Document();
  let doc3b64 = Buffer.from(docs.htmldoc3()).toString("base64");
  doc3.documentBase64 = doc3b64; 
  doc3.fileExtension = "html";  
  doc3.name = "Document 3";
  doc3.documentId = "3";

  // Document 4 is direct PDF
  // AgreementToProvideInsurance.pdf
  let doc4 = new docusign.Document();
  doc4.documentBase64 = docs.pdfdoc1();
  doc4.fileExtension = "pdf",
  doc4.name = "Document 4", 
  doc4.documentId = "4"; 

  // Shallow copy Doc2 (HTML) a bunch of times
  let doc5 = new docusign.Document();
  let doc6 = new docusign.Document();
  let doc7 = new docusign.Document();
  let doc8 = new docusign.Document();
  let doc9 = new docusign.Document();
  let doc10 = new docusign.Document();
  Object.assign(doc5, doc2);
  Object.assign(doc6, doc2);
  Object.assign(doc7, doc2);
  Object.assign(doc8, doc2);
  Object.assign(doc9, doc2);
  Object.assign(doc10, doc2);
  doc5.documentId = "5";
  doc6.documentId = "6";
  doc7.documentId = "7";
  doc8.documentId = "8";
  doc9.documentId = "9";
  doc10.documentId = "10";

  // Shallow copy Doc3 (HTML as PDF) a bunch of times
  let doc11 = new docusign.Document();
  let doc12 = new docusign.Document();
  let doc13 = new docusign.Document();
  let doc14 = new docusign.Document();
  let doc15 = new docusign.Document();
  Object.assign(doc11, doc3); 
  Object.assign(doc12, doc3); 
  Object.assign(doc13, doc3); 
  Object.assign(doc14, doc3); 
  Object.assign(doc15, doc3); 
  doc11.documentId = "11";
  doc12.documentId = "12";
  doc13.documentId = "13";
  doc14.documentId = "14";
  doc15.documentId = "15";

  env.documents = [doc3, doc2, doc1, doc4]; // order of array dictates order in envelope

  // env.documents = [doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13, doc14, doc15]; 

  let signer1 = docusign.Signer.constructFromObject({
    email: args.signerEmail,
    name: args.signerName,
    recipientId: args.recipientId,
    clientUserId: args.clientUserId,
    routingOrder: "1",
  });

  // JSON tags for HTML signature injection
  let signHere1 = docusign.SignHere.constructFromObject({
    stampType: "signature",
    name: "SignHere",
    tabLabel: "signatureTab",
    scaleValue: "1",
    optional: "false",
    documentId: "1",
    recipientId: "1"
  });

  // Anchor tags for PDF
  let signHere2 = docusign.SignHere.constructFromObject({
    anchorString: "By signing this Agreement to Provide Insurance",
    anchorYOffset: "20",
    anchorUnits: "pixels",
    anchorXOffset: "0"
  });

  let signer1Tabs = docusign.Tabs.constructFromObject({
    signHereTabs: [signHere1, signHere2],
  });
  signer1.tabs = signer1Tabs;

  let recipients = docusign.Recipients.constructFromObject({
    signers: [signer1]
  });

  env.recipients = recipients;
  env.status = args.status;
  return env;
}

module.exports = { makeEnvelope };