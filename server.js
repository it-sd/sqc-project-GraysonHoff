require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'view'))
  .set('view engine', 'ejs')

// step 4
  .get('/health', function (req, res) {
    // res.render('pages/health')
    res.status(200).send('Healthy')
  })

// step 5
  .get('/', function (req, res) {
    res.render('pages/index')
  })

// step 6
  .get('/about', function (req, res) {
    res.render('pages/about')
  })

  .get('/SUS', function (req, res) {
    res.render('pages/SUS')
  })

  .get('/dangerSus', function (req, res) {
    res.render('pages/dangerSus')
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`))
