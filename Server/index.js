var express = require('express')
var bp = require('body-parser')
var server = express()
var port = process.env.PORT || 3000


//register middleware
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


let MailingRoute = require('./Sever-Assets/NodeMailer/MailingRoute')
server.use('/api/mail', MailingRoute)

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})