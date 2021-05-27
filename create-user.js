const [name, age, email] = process.argv.slice(2)

const mongodb = require('mongodb')
mongodb
  .connect('mongodb://localhost', { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('lean-coffee-board')
    db.collection('users')
      .insertOne({ name, age, email })
      .then(res => {
        console.log(
          `SUCCESS: Inserted ${name}, ${age}, ${email} with ObjectId "${res.insertedId}"`
        )
      })
      .catch(console.error)
      .finally(() => client.close())
  })
  .catch(console.error)
