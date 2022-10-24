const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
require('./config/mongoose')

app.get('/', (req, res) => {
  res.render('index')
})
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})