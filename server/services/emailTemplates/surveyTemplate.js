const keys = require('../../config/keys');

module.exports = survey => {
    return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2>Wiadomosc wysłana ze strony CompanyDateBase!</h2>
          <h3>${survey.body}</h3>
        </div>
      </body>
    </html>
    `;
};