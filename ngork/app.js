const fs = require('fs').promises
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  let fileContents = await fs.readFile("index.html")
  res.type("html")
  res.send(fileContents)
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})
