// this comes with node.js
// no need to use 'https'
// – the server will run on a plattform that adds the security layer
const http = require('http')

const server = http.createServer(onRequest) // create the server
server.listen(4000) // start the server

// this is called on every request
// req - an object that represents the request (with props/methods)
// res - an object representing the response (with props/methods)

function onRequest(req, res) {
  // examples of what is in a request
  console.log(req.method, req.url)

  // Sending a response
  res.end(`You requested ${req.url} via ${req.method}`)
}
