const docusign = require("docusign-esign");
const htmldocs = require("./htmldocs");

function makeEnvelope(args) {

  // create the envelope definition
  let env = new docusign.EnvelopeDefinition();
  env.emailSubject = "Please sign this document from my REPLIT";

  // add the documents
  let doc1 = new docusign.Document();
  let doc2 = new docusign.Document();
  let doc3 = new docusign.Document();
  let doc3b64 = Buffer.from(htmldocs.doc3()).toString("base64");
  let htmlDef = new docusign.DocumentHtmlDefinition();
  let htmlDef2 = new docusign.DocumentHtmlDefinition();
  htmlDef.source = Buffer.from(htmldocs.doc1()).toString("utf8");
  htmlDef2.source = Buffer.from(htmldocs.doc2()).toString("utf8");

  doc1.htmlDefinition = htmlDef;
  doc2.htmlDefinition = htmlDef2;
  doc3.documentBase64 = doc3b64;
  doc3.fileExtension = "html";
  
  doc1.name = "Document1"; // can be different from actual file name
  doc1.documentId = "1"; // a label used to reference the doc
  doc2.name = "Document2";
  doc2.documentId = "2";
  doc3.name = "Document3";
  doc3.documentId = "3";
  env.documents = [doc1, doc2, doc3]; // order of array determines order in envelope

  // create a signer recipient to sign the document, identified by name and email
  let signer1 = docusign.Signer.constructFromObject({
    email: args.signerEmail,
    name: args.signerName,
    recipientId: args.recipientId,
    clientUserId: args.clientUserId,
    routingOrder: "1",
  });
  // routingOrder (lower means earlier) determines the order of deliveries
  // to the recipients. Parallel routing order is supported by using the
  // same integer as the order for two or more recipients.

  // create a cc recipient to receive a copy of the documents, identified by name and email
  // We're setting the parameters via setters
  let cc1 = new docusign.CarbonCopy();
  cc1.email = args.ccEmail;
  cc1.name = args.ccName;
  cc1.routingOrder = "2";
  cc1.recipientId = "2";

  /*
  if (args.asbase64) {
    // Anchor tags for our PDF
    let signHere1 = docusign.SignHere.constructFromObject({
      anchorString: "Authorized Dealership Representative",
      anchorYOffset: "-18",
      anchorUnits: "pixels",
      anchorXOffset: "10",
    }),
    signHere2 = docusign.SignHere.constructFromObject({
      anchorString: "/sn1_fake/",
      anchorYOffset: "10",
      anchorUnits: "pixels",
      anchorXOffset: "20",
    });
    // Tabs are set per recipient / signer
    let signer1Tabs = docusign.Tabs.constructFromObject({
      signHereTabs: [signHere1, signHere2],
    });
    signer1.tabs = signer1Tabs;
  } 
  */ 
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
    let signer1Tabs = docusign.Tabs.constructFromObject({
      signHereTabs: [signHere1],
    });
    signer1.tabs = signer1Tabs;
  

  /*
  let recipients = docusign.Recipients.constructFromObject({
    signers: [signer1],
    carbonCopies: [cc1],
  });
  env.recipients = recipients;
  */

  let recipients = docusign.Recipients.constructFromObject({
    signers: [signer1]
  });
  env.recipients = recipients;

  // Request that the envelope be sent by setting |status| to "sent".
  // To request that the envelope be created as a draft, set to "created"
  env.status = args.status;

  return env;
}

module.exports = { makeEnvelope };