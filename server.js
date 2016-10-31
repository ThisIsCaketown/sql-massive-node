var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var massiveServer = massive.connectSync({
  connectionString: "postgres://postgres:Ishikawa3@localhost/Massive-Backend-Project"
})

var app = module.exports = express();
app.use(bodyParser.json());
app.set('db', massiveServer);
// var db = app.get('db');
var productsCtrl = require('./controllers/productsCtrl');

var port = 3000;

app.get('/products', productsCtrl.GetAll)
app.get('/products/:id', productsCtrl.GetOne)

app.post('/products/create', productsCtrl.Create);

app.put('/products/update', productsCtrl.Update);

app.delete('/products/delete', productsCtrl.Delete);



app.listen(port, function(){
  console.log("Listening on port: " + port)
});
