const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path")

// Motor de plantilla
const hbs = require('hbs');
app.use(express.static("public"));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname + "/public/views"));



// Aquí detallar rutas
app.get('/', (req, res) => {
  res.render('index', {
      "nombre":"Diego López",
      "email":"dilopezz@sena.edu.co"
  })//Redireccionar hacia el archivo de hbs
})

app.get('/productos', (req, res) => {
  res.render('productos')//Redireccionar hacia el archivo de hbs
})

app.get('/contacto', (req, res) => {
  res.render('contacto')//Redireccionar hacia el archivo de hbs
})

app.get('*', (req, res) => {
  //res.sendFile(__dirname+'/public/views/404.hbs')
  res.render('404')//Redireccionar hacia el archivo de blade
})

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});