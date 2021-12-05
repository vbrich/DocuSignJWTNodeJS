function doc1() {

  return `
  <!DOCTYPE html>

  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <meta charset="utf-8" />
      <title></title>
      <style>
          p.titleText {
              font-weight: 800;
              font-size: 11.5pt;
              font-family: Calibri, Helvetica;
              text-align: center;
          }
  
          div#textblock {
              padding-left: 2%;
              padding-right: 2%;
              font-family: Calibri, Helvetica;
              font-size: 11.5pt;
              max-width: 800px;
              width: 800px;
              height: 1035px;
              min-height: 1035px;
              max-height: 1035px;
              overflow-wrap: break-word;
          }
  
              div#textblock indent {
                  margin-left: 2%;
              }
  
          ul.empty {
              list-style-type: none;
              margin-top: 0px;
          }
  
          .container {
              width: 100%;
              height: 200px;
              display: flex;
          }
  
          .col1 {
              display: inline-block;
              width: 45%;
              height: 100%;
          }
  
          .col2 {
              position: relative;
              top: 0px;
              display: inline-block;
              width: 45%;
              margin-left: 7%;
              margin-top: 0%;
              height: 100%;
          }
  
              .col2 p {
              }
  
          .dividerText {
              font-weight: bold;
              font-style: italic;
          }
  
          .footer {
              display: flex;
              width: 100%;
              margin-top: 5%;
          }
  
          .logoText {
              display: inline-block;
              text-align: left;
              width: 33%;
          }
  
          .catalogText {
              display: inline-block;
              text-align: center;
              width: 33%;
              font-size: 6pt;
          }
  
          .copyText {
              display: inline-block;
              text-align: right;
              width: 33%;
              font-size: 6pt;
          }
      </style>
      
  </head>
  <body>
      <div id="textblock">
          <p class="titleText">AUTHORIZATION TO RELEASE PAYOFF INFORMATION</p>
          <p>
              Customer(s) Name:______________________________________________________ Date:_______________________<br /><br />
              Lienholder Name:___________________________________________________________________________________<br /><br />
              Trade-In Vehicle Year:______ Make:___________ Model:____________ VIN:___________________________________
          </p>
          <p>
              I acknowledge and agree that I have given the Dealership identified above permission to contact you in order
              to obtain payoff information regarding the above-described trade-in vehicle. I understand that information
              about my account is private and that you may be asked to reveal nonpublic personal information about me to the
              Dealership. I hereby authorize you to release my payoff information to the Dealership and to answer any questions
              that it has with respect to my account. I understand that this information will be used only for the purposes for
              which it has been provided and in accordance with the applicable Privacy Laws. Should the Dealership tender payment
              to payoff the remaining balance owed, I further authorize you to release the title to the trade-in vehicle to the
              Dealership within 10 days of the date of this notice pursuant to RCW 46.12.675. Mail certificate of ownership to the
              payor at the above address.
          </p>
          <div>
              If the title is recorded electronically please order as requested below:
              <ul class="empty">
                  <li>□ Physical Title</li>
                  <li>□ Affidavit in Lieu of Title (may not be good outside WA state)</li>
              </ul>
          </div>
          <p>
              I acknowledge and agree that $___________________ is an estimate of the balance owed on the trade-in vehicle.
              If the actual balance owed on my trade-in vehicle is greater than the estimated figure, I agree to pay the
              difference to the Dealership. If the balance owed is less than the estimated figure, the difference will be
              paid or credited to me.
          </p>
          <div class="container">
              <div class="col1">
                  <p>
                      _______________________________________________<br />
                      Customer
                  </p>
                  <p>
                      _______________________________________________<br />
                      Customer
                  </p>
              </div>
              <div class="col2">
                  <p>
                      _______________________________________________<br />
                      Authorized Dealership Representative
                  </p>
              </div>
  
  
  
          </div>
          <div>
              <span class="dividerText">For Dealership Use Only:</span><br /><br />
              <p>
                  Lienholder Telephone:__________________ Fax:__________________ Contact Person:_______________________________<br /><br />
                  Lienholder Address:______________________________________________________________________________________<br /><br />
                  Payoff Amount $_______________ Quoted To:_______________________ Good Until (20 days recommended):___________<br /><br />
                  Per Diem:______________________ Additional Notes: _________________________________________________________
              </p>
          </div>
          <div class="footer">
              <div class="logoText">-logo-</div> <div class="catalogText">CATALOG #8963932</div> <div class="copyText">©2020 CDK Global, LLC Washington (09/20)</div>
          </div>
      </div>
              <br><br>
<p>{{"tabLabel": "signatureTab"}}</p>
<p>Borrower Signature</p>
  </body>
  </html>
  `;
}

function doc2() {

  return `
  <!DOCTYPE html>  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"> <head>     <meta charset="utf-8" />     <title></title> </head> <body>     <div id="textblock" style="padding-left: 2%; padding-right: 2%; font-family: Helvetica, Arial, sans-serif; font-size: 11pt; overflow-wrap: break-word;">         <p class="center-title" style="overflow-wrap: break-word;font-family: Helvetica, Arial, sans-serif;font-weight: 700;font-size: 24pt;text-align: center;">             LAWCAAUTHORIZE2<br /><br></br>             Contact Authorization<br />         </p>         <table class="table-layout-topset" style="border: 2px solid black; border-spacing: 0px; width: 100%;margin-top: 5%;">             <thead>              </thead>             <tbody>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Customer Name</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Co-Customer Name</tdstyle="border:>                 </tr>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Customer Phone No. (Home)</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Co-Customer Phone No. (Home)</td>                 </tr>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Customer Phone No. (Mobile)</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Co-Customer Phone No. (Mobile)</td>                 </tr>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Customer Email Address</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-top;">Co-Customer Email Address</td>                 </tr>             </tbody>          </table>         <p>             In this Contact Authorization Form, &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our,&rdquo; mean<br /><br />             _______________________________________________________________________________________________,<br /><br /><br />             _______________________________________________________________________________________________.<br />             &ldquo;You&rdquo; and &ldquo;your&rdquo; mean the Customer and Co-Customer.         </p>         <p style="overflow-wrap: break-word;">             As part of our effort to provide the highest possible level of service, we would like to be able to contact you in order             to ensure that you are happy with your purchase, keep you informed of new product offerings and promotions,             remind you of necessary maintenance or service your vehicle may need, and for other reasons.         </p>         <p style="overflow-wrap: break-word;">             You agree that we may monitor and record telephone calls regarding your account to assure the quality of our<br />             service or for other reasons. You agree that we may try to contact you in writing, by e-mail, or by using<br />             prerecorded/artificial voice messages, text messages and automatic telephone dialing systems, as the law allows.<br />             You also agree that we may try to contact you in these and other ways at any address or telephone number you<br />             provide us, even if the telephone number is a mobile phone number or the contact results in a charge to you.         </p>         <p style="overflow-wrap: break-word;">             <input data-ds-type="checkbox" /> By checking this box, you also authorize us to call your home phone number and your mobile phone number<br />             provided above using an automatic telephone dialing system or a prerecorded message for sales purposes. You<br />             are not required to provide this authorization as a condition of purchasing any goods or services.         </p><br />          <table class="table-layout-bottomset" style="border: 2px solid black; border-spacing: 0px; width: 100%;">             <thead>              </thead>             <tbody>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-bottom;">Customer Signs X</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-bottom;">Date</td>                 </tr>                 <tr>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-bottom;">Co-Customer Signs X</td>                     <td style="border: 1px solid black; min-height: 40px; min-width: 49%; width: 49%; height: 40px; font-size: 10pt; vertical-align: text-bottom;">Date</td>                 </tr>              </tbody>          </table>         <div class="docFooter" style="width: 100%; margin-top: 5%;">             <div class="blText" style=" display: inline-block; text-align: left; margin-bottom: 10px; width: 34%;">                 <span class="formInfoText" style="vertical-align: text-bottom; font-size: 8pt;">FORM NO. LAWCAAUTHORIZE2_e</span>                 <span class="revisionText" style="vertical-align: text-bottom; font-size: 5pt;">(REV. 1/15)</span><br />                 <span class="copyText" style="vertical-align: text-top; font-size: 5pt;">&copy;2015 The Reynolds and Reynolds Company</span>             </div>             <div class="gap" style="display: inline-block; width: 40%;"></div>             <div class="brText" style="display: inline-block; width: 24%; margin-bottom: 10px; vertical-align: text-bottom; font-size: 4.5pt; text-align: left;">                 THERE ARE NO WARRANTIES, EXPRESS OR IMPLIED, AS TO CONTENT OR                 FITNESS FOR PURPOSE OF THIS FORM. CONSULT YOUR OWN LEGAL COUNSEL.             </div>         </div>     </div></body> </html>
  `;
}

function doc3() {

  return `
  <!DOCTYPE html>  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"> <head>     <meta charset="utf-8" />     <title></title> </head> <body>     <div id="textblock" style="text-align: center; font-family: Calibri, Helvetica; font-size: 11.5pt; overflow-wrap: break-word; padding-left: 30%; padding-right: 30%;">         <table id="titleTable" style="font-weight: bold;">             <tbody>                 <tr>                     <td></td>                 </tr>                 <tr>                     <td>ATTORNEY GENERAL’S OFFICE</td>                 </tr>             </tbody>         </table>         <section>             <span class="intense" style="font-weight: bold; font-size: 18pt;">Notice of<br />Consumer Rights</span> <br />             For New Motor Vehicles<br />             Under Washington State’s<br />             <span class="intense" style="font-weight: bold; font-size: 18pt;">LEMON LAW</span><br />             For More Information<br />             About the Lemon Law:<br />Call: TOLL FREE<br />             <span class="phNumber" style="font-family: Calibri; font-size: 20pt; font-weight: bold; display: block;">1-800-541-8898</span><br />             Ley del “Limón”<br />Para Vehiculos Motorizados Nuevo<br />             Automotores, Camiones,<br />             Motocicletas y Casa Rodantes (RV)<br />             Problemas de Garantía?<br />             <span>Llame: (800) 541-8898</span>             See Lemon Law on the Attorney General’s Office website at:<br />             <span class="bold" style="font-weight: bold;">                 http://www.atg.wa.gov<br />                 e-mail: lemon@atg.wa.gov             </span><br /><br />             <span class="minorIntense" style="font-size: 16pt; font-weight: bold;">Office of the Attorney General<br />Lemon Law Administration</span><br />             800 5th Avenue, Suite 2000<br />             Seattle, WA 98104-3188         </section>         <table class="sigtable" style="border: 4px solid #000; ">             <tbody>                 <tr>                     <td class="tallcell" style="vertical-align: text-top; height: 100px; font-weight: bold; padding-left: 5%; padding-right: 5%;">                         Buyer’s Acknowledgment of<br />                         Receipt of This Notice of Rights                     </td>                 </tr>                 <tr class="sigrow" style="padding-left: 2%; padding-right: 2%; margin-left: 2%; margin-right: 2%;">                     <td colspan="1">                         <table id="SigSetTable" style=" border-collapse: collapse; width: 100%;">                             <tbody>                                 <tr>                                     <td class="cellLeftAlign" style="border-top: 1px solid #000; text-align: left;">                                         Signature                                      </td>                                     <td class="cellRightAlign" style="border-top: 1px solid #000; text-align:right;">                                         Date                                     </td>                                 </tr>                             </tbody>                         </table>                     </td>                  </tr>             </tbody>         </table>         <table class="labelTable" style="">             <tbody>                 <tr>                     <td class="cellLeftAlign" style="text-align: center; width: 50%; text-align: left;">White - Consumer</td>                     <td class="cellRightAlign" style="text-align: center; width: 50%; text-align: right;">Yellow - Dealership</td>                 </tr>             </tbody>         </table>         <p class="smallPrint" style="font-family: Arial; font-size: 7pt;">LL-219 Revisions December 2020</p>         <div style="page-break-before:always">&nbsp;</div>         <section class="PMB3" style="margin-bottom: 3%;">             <span class="sectionBlock intense arial" style="font-family: Arial;  margin-bottom: 2%; font-weight: bold; font-size: 18pt; color =grey;">Lemon Law - RCW 19.118</span>         </section>         <section class="sectionBlock" style=" font-family: Calibri; font-size: 10.5pt; margin-bottom: 2%; color: grey;">             <div class="sectionTitle" style="text-align: center; font-family: Calibri; font-size: 13pt; font-weight: bold; text-decoration: underline; margin-bottom: 3%;">                 The Motor Vehicles Warranties Act             </div>             <div class="sectionBody" style="text-align: justify; font-family: Arial; font-size: 10pt;">                 A $3 fee funding the New Motor Vehicle Lemon Law program has been included with the licensing fees for your new motor vehicle.Most new or demonstrator vehicles (cars, vans, trucks, motor homes and large motorcycles), originally purchased or leased in Washington or owned by active military are covered by the Lemon Law.If a vehicle has life threatening defects or is substantially impaired by defects, it may be eligible for the Lemon Law arbitration program administered by the Attorney General’s Office. Arbitration of Lemon Law claims is available to consumers at no cost. If your vehicle qualifies as a ‘Lemon’, the manufacturer can be required to repurchase or replace it.An arbitration request form must be received by the Attorney General’s Office during the first 30 months following the original retail delivery to be eligible for arbitration.To receive a comprehensive explanation of your rights under the Lemon Law and arbitration procedures or to obtain a Request for Arbitration form see www.atg.wa.gov/lemonlaw.aspx or contact the Lemon Law Administration.             </div>         </section>         <section class="sectionBlock" style=" font-family: Calibri; font-size: 10.5pt; margin-bottom: 2%; color: grey; ">             <div class="sectionTitle" style="text-align: center; font-family: Calibri; font-size: 13pt; font-weight: bold; text-decoration: underline; margin-bottom: 3%;">                 MOTOR HOME NOTICE OF FINAL REPAIR             </div>             <div class="sectionBody" style="text-align: justify; font-family: Arial; font-size: 10pt;">                 Before a consumer starts a Lemon Law claim, each manufacturer contributing to the building of a motor home (see your written warranties) must be allowed a final repair. A consumer must send a written notice to the manufacturers of the need to repair problems and allow the motor home manufacturers a final repair attempt.             </div>         </section>         <section class="sectionBlock" style=" font-family: Calibri; font-size: 10.5pt; margin-bottom: 2%; color: grey;">             <div class="sectionTitle" style="text-align: center; font-family: Calibri; font-size: 13pt; font-weight: bold; text-decoration: underline; margin-bottom: 3%;">                 WARRANTY REPAIR ORDERS             </div>             <div class="sectionBody" style="text-align: justify; font-family: Arial; font-size: 10pt; ">                 Whenever a vehicle is returned to a consumer from diagnosis or repair under a manufacturer warranty, the dealer must provide a repair order or other written statement. It is very important to keep copies of all repair orders.             </div>         </section>          <p class="smallPrint f-grey" style="font-family: Arial; font-size: 7pt; color: grey; ">             LL-219 Revisions December 2020         </p>          <div style="page-break-before:always">&nbsp;</div>          <p class="large-copy" style=" font-weight: bolder; font-size: 25pt;">             Dealership Copy         </p>          <section class="spaced" style=" font-family: Calibri; font-size: 10.5pt; margin-top: 20%; margin-bottom: 20%;">             <span class="minorIntense" style="font-size: 16pt; font-weight: bold;">Notice of<br />Consumer Rights</span><br />             For New Motor Vehicles<br />             Under Washington State’s<br />             <span class="intense" style="font-weight: bold; font-size: 18pt;">LEMON LAW</span>         </section>         <table class="sigtable" style=" border: 4px solid #000; ">             <tbody>                 <tr>                     <td class="tallcell" style="vertical-align: text-top; height: 100px; font-weight: bold; padding-left: 5%; padding-right: 5%;">                         Buyer’s Acknowledgment of<br />                         Receipt of This Notice of Rights                     </td>                 </tr>                 <tr class="sigrow" style="padding-left: 2%; padding-right: 2%; margin-left: 2%; margin-right: 2%;">                     <td colspan="1">                         <table id="SigSetTable" style="border-collapse: collapse; width: 100%;">                             <tbody>                                 <tr>                                     <td class="cellLeftAlign" style="border-top: 1px solid #000;padding-left: 5%; text-align: left; padding-right: 0px; margin-right: 0px;">                                         Signature                                      </td>                                     <td class="cellRightAlign" style="border-top: 1px solid #000;padding-left: 0px; margin-left: 0px; padding-right: 5%; text-align: right;">                                         Date                                     </td>                                 </tr>                             </tbody>                         </table>                     </td>                  </tr>             </tbody>         </table>         <table class="labelTable">             <tbody>                 <tr>                     <td class="cellLeftAlign" style="text-align: left;">White - Consumer</td>                     <td class="cellRightAlign" style="text-align: right;">Yellow - Dealership</td>                 </tr>             </tbody>         </table>         <p class="smallPrint" style=" font-family: Arial; font-size: 7pt;">LL-219 Revisions December 2020</p>     </div> </body> </html>
  `;
}
module.exports = { doc1, doc2, doc3 };