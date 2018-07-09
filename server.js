const express = require('express')
const next = require('next')
const fs = require('fs')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())


// Dynamic Pages
  server.get('/dreams/:id', (req, res) => {
    const actualPage = '/dreams'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/logs/:id', (req, res) => {
    const actualPage = '/logs'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

// API - Get
  server.get('/api/get/:name', (req, res) => {
      const options = {root: `${__dirname}/data/`}
      const fileName = `${req.params.name}.json`

      res.sendFile(fileName, options, function (err) {
          if (err) {
            next(err);
          } else {
            console.log('Sent:', fileName);
          }
      })
  });

// API - Add
  server.post('/api/add/:name', (req, res) => {
      const fileName = `${req.params.name}.json`
      const rawData = fs.readFileSync(`${__dirname}/data/${fileName}`)
      let data = JSON.parse(rawData)

      data.data.push(req.body)
      data = JSON.stringify(data)

      fs.writeFileSync(`${__dirname}/data/${fileName}`, data)

      res.json(data)
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})