const express = require('express')
const router = express.Router()

const users = [
  {
    name: 'Jane Doe',
    age: 32,
    email: 'jane@doe.com',
    id: '0',
  },
  {
    name: 'John Doe',
    age: 32,
    email: 'john@doe.com',
    id: '1',
  },
]

router.get('/', async (req, res, next) => {
  res.json(users)
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const foundUser = users.find(user => user.id === id)
  foundUser
    ? res.json(foundUser)
    : next(new Error(`No user with id ${id} found`))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(users.filter(user => user.id !== id))
})

router.post('/', async (req, res, next) => {
  const newUser = { ...req.body, id: users.length.toString() }
  users.push(newUser)
  res.json(newUser)
})

module.exports = router
