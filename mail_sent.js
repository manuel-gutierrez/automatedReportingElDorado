function generateTemplate() {
  var template = HtmlService.createTemplate('<center> <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF"> <tr> <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td> </tr> <tr> <td align="center" valign="top"> <table width="600" cellpadding="0" cellspacing="0" border="0" class="container"> <tr> <td width="300" class="mobile" align="center" valign="top"> <p>Tiempo Promedio: <?= tiempo ?></p> </td> <td width="300" class="mobile" align="center" valign="top"> <p>Sessions: <?= sessions ?></p> </td> </tr> </table> </td> </tr> <tr> <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td> </tr> </table> </center>');
  template.sessions = '2000';
  template.tiempo = '10000';
  var finalHtml = template.evaluate().getContent();
  return finalHtml;
}

function sendEmail(mailBody) { 
  var opts = {
    to: "m.gutierrez@creativivo.com",
    subject: "HTML Template",
    htmlBody: mailBody
  }; 
  MailApp.sendEmail(opts);
}

function runDemo() {
 try {
  var mailBody = generateTemplate();
  sendEmail(mailBody);
 } catch(error) {
   Logger.log(error);
 }
}

