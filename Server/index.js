var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = process.env.PORT || 3000

var whitelist = ['http://localhost:8080', 'https://jake-joel-kanban.herokuapp.com/'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//register middleware
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


let MailingRoute = require('./MailingRoute')
server.use(MailingRoute)

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})