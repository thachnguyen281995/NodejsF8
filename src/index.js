const express = require('express')
const port = 3000 || process.env.PORT
const morgan = require('morgan')
const { engine } = require ('express-handlebars')
const app = express();
const path = require('path')
const route = require('./routes')
app.use(morgan('combined'))
const db = require('./config/db') 

app.use(express.urlencoded({
  extended:true,
}));
route(app);
app.use(express.json())                                                                                                                          
app.use(express.static(path.join(__dirname, 'public'))); 
// Template Engine
app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'views'));
db.connect();

// console.log(__dirname/layouts);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})