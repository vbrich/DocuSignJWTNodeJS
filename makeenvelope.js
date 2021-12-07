const docusign = require("docusign-esign");
const docs = require("./docs");

function makeEnvelope(args) {

  let env = new docusign.EnvelopeDefinition();
  env.emailSubject = "DocuSign REPLIT Example";

  // Responsive Option 1 = HTML sent via htmlDefinition
  let docAsHtml = new docusign.Document();
  let htmlDef = new docusign.DocumentHtmlDefinition();
  htmlDef.source = Buffer.from(docs.htmldoc1()).toString("utf8");
  docAsHtml.htmlDefinition = htmlDef; 
  docAsHtml.name = "AuthorizationToReleasePayoff.html"; 
  docAsHtml.documentId = "1"; 

  // Responsive Option 2 = PDF sent via htmlDefinition
  let docAsPDFToHtml = new docusign.Document();
  let htmlDef2 = new docusign.DocumentHtmlDefinition();
  htmlDef2.source = "document";
  htmlDef2.showMobileOptimizedToggle = "true",
  docAsPDFToHtml.htmlDefinition = htmlDef2; 
  docAsPDFToHtml.documentBase64 = docs.pdfdoc1();
  docAsPDFToHtml.name = "AgreementToProvideInsurance.pdf"; 
  docAsPDFToHtml.documentId = "2"; 

  // Non-Responsive HTML = Send HTML as base64 to be converted to PDF for signing
  let docAsHtmlBase64 = new docusign.Document();
  let docb64 = Buffer.from(docs.htmldoc2()).toString("base64");
  docAsHtmlBase64.documentBase64 = docb64; 
  docAsHtmlBase64.fileExtension = "html";  
  docAsHtmlBase64.name = "LemonLaw.base64";
  docAsHtmlBase64.documentId = "3";

  // Non-Responsive PDF = Send PDF as PDF
  let docAsPdf = new docusign.Document();
  docAsPdf.documentBase64 = docs.pdfdoc1();
  docAsPdf.fileExtension = "pdf";
  docAsPdf.name = "AgreementToProvideInsurance.pdf"; 
  docAsPdf.documentId = "4"; 

/*
  // TODO: Temparily, wanted a quick way to test multiple files...
  // Shallow copy a specific Documents a bunch of times
  let docType = docAsHtml;
  let doc2 = new docusign.Document();
  let doc3 = new docusign.Document();
  let doc4 = new docusign.Document();
  let doc5 = new docusign.Document();
  let doc6 = new docusign.Document();
  let doc7 = new docusign.Document();
  let doc8 = new docusign.Document();
  let doc9 = new docusign.Document();
  let doc10 = new docusign.Document();
  let doc11 = new docusign.Document();
  let doc12 = new docusign.Document();
  let doc13 = new docusign.Document();
  let doc14 = new docusign.Document();
  let doc15 = new docusign.Document();
  let doc16 = new docusign.Document();
  let doc17 = new docusign.Document();
  let doc18 = new docusign.Document();
  let doc19 = new docusign.Document();
  let doc20 = new docusign.Document();
  Object.assign(doc2, docType);
  Object.assign(doc3, docType);
  Object.assign(doc4, docType);
  Object.assign(doc5, docType);
  Object.assign(doc6, docType);
  Object.assign(doc7, docType);
  Object.assign(doc8, docType);
  Object.assign(doc9, docType);
  Object.assign(doc10, docType);
  Object.assign(doc11, docType); 
  Object.assign(doc12, docType); 
  Object.assign(doc13, docType); 
  Object.assign(doc14, docType); 
  Object.assign(doc15, docType);
  Object.assign(doc16, docType); 
  Object.assign(doc17, docType);
  Object.assign(doc18, docType); 
  Object.assign(doc19, docType);
  Object.assign(doc20, docType);  
  doc2.documentId = "2";
  doc3.documentId = "3";
  doc4.documentId = "4";
  doc5.documentId = "5";
  doc6.documentId = "6";
  doc7.documentId = "7";
  doc8.documentId = "8";
  doc9.documentId = "9";
  doc10.documentId = "10";
  doc11.documentId = "11";
  doc12.documentId = "12";
  doc13.documentId = "13";
  doc14.documentId = "14";
  doc15.documentId = "15";
  doc16.documentId = "16";
  doc17.documentId = "17";
  doc18.documentId = "18";
  doc19.documentId = "19";
  doc20.documentId = "20";

  env.documents = [docAsHtml, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13, doc14, doc15, doc16, doc17, doc18, doc19, doc20];

  // Various Timing
  // 1 HTML = 3.5s
  // 20 HTML = 55s
  // 20 HTML + 1 PDF = 57s
  // 1 HTML + 20 htmlbase64 (PDF) = 18s
  // 1 HTML + 20 PDF = 12 seconds
  // 20 PDF = 9 seconds
  // 20 PDF as HTML = 9 seconds
*/

  // NOTE: The order of array dictates order in envelope
  // NOTE: If you don't send docAsHtml, remove the signHere1 from the tabs below!
  env.documents = [docAsHtml, docAsPdf];

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
    optional: "true",
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