const palindromicFunc = require("./palindromicFunction.js")

exports.index = (req, res) => {
  res.send('indexPage');
}

exports.showPalin = (req, res, next) => {
  try {
      if (typeof req.body.palinstring === 'undefined' || req.body.palinstring === null) {
        return false;
      } else {
        const { palinstring } = req.body;
        const message = {};
        if (palinstring == "") {
          message.statusMessage = "Please enter palindromic string.";
          message.statusCode = 404;
          res.status(404).send(message);
        }

        const output = palindromicFunc.getStringPalindrome(palinstring);
        message.statusMessage = "Success";
        message.statusCode = 200;
        message.output = output;
        res.status(200).send(message);
      }
  } catch (error) {
    res.status(error.statusCode).json({
      error: {
        message: error.message
      }
    });  
  }
}