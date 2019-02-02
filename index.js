const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')

//Init app
const app = express()

//set views path
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('index',{
        title: "post page"
    })
});

app.post('/data',function(req, res){
    let data = req.body;
    //console.log(data)
    res.send(data)
});

app.listen(3000, function(req, res){
    console.log("server is running")
});