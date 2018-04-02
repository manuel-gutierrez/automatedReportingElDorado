function sendEmail() {
    MailApp.sendEmail({
      to: "m.gutierrez@creativivo.com",
      subject: "Prueba",
      htmlBody: "Hola Mundo"
    });
}