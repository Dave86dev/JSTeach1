
let express = require('express');
let app = express();

//endpoint a raiz que nos mostrará un mensaje. 
app.get('/', function (req, res) {
  res.send('Hello World, we are making it at GeeksHubs!!');
});

//servidor escuchando en el puerto 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});