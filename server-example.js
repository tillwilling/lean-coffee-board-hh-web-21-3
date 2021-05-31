const express = require('express')
const app = express()

app.use('/api/users', (req, res, next) => {
  console.log('I was called', req.method, req.url)
  if (req.method === 'GET') {
    res.send('I send the users')
  } else if (req.method === 'POST') {
    res.send('You posted something')
  } else {
    next()
  }
})

app.use((req, res) => {
  console.log('I was called as well')
})

app.listen(5000, () => {
  console.log(`Server started at http://localhost:5000`)
})
