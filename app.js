const express = require('express')
const exhbs = require('express-handlebars')
const talkTrash = require('./talkTrash')
const person = require('./person.json')
const app = express()
const port = 3000

app.engine('hbs',exhbs({defaultLayout : 'main' , extname : '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended : true}))

app.get('/' ,(req , res) => {
    res.render('index' , {target: person.target})
})

app.post('/' ,(req ,res) => {
    const talk = req.body
    const language = talkTrash(talk)
    res.render('index', {language , talk , target: person.target})
})

app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})