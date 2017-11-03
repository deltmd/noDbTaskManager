var app = require('../index')

module.exports={
  test: function (req, res, next) {
    let resp = "Server test sucess"
    res.status(200).send(resp);
  }
}