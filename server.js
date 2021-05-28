const express = require('express')

// express likes to call the server "app"
const app = express()

// start server
app.listen(4000, () => console.log('Server started on http://localhost:4000'))

// @see http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.send(`Please visit /users to get user data.`)
})

app.get('/users', (req, res) => {
  const users = [
    { name: 'Jane Doe', age: 32, email: 'jane@doe.com' },
    { name: 'John Doe', age: 31, email: 'john@doe.com' },
  ]
  res.json(users)
})
