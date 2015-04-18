var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'));

var mongoose= require('mongoose');
                       
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);
                       
var DevSchema = new mongoose.Schema({
    first: String,
    last: String,
    skill: String,
    city: String,
}, { collection: "developer" });
                       
var DevModel = mongoose.model('DevModel', DevSchema);
                       
var dev1 = new DevModel({ first: "Pankaj", last: "Tripathi", skill: "JAVA", city: "LA" });
var dev2 = new DevModel({ first: "Vikas", last: "Shriyan", skill: "JAVA", City: "Boston" });
var dev3 = new DevModel({ first: "Abhishek", last: "Kumar", skill: "ORACLE", city: "Pheonix" });
var dev4 = new DevModel({ first: "Shakti", last: "Patro", skill: "NODEJS", city: "Sunyvale" });
var dev5 = new DevModel({ first: "Kartik", last: "Mahaley", skill: "SAS", city: "New York" });
                       
dev1.save();
dev2.save();
dev3.save();
dev4.save();
dev5.save();
                       
app.get('/developer', function (req, res) {
DevModel.find(function (err, data) {
res.json(data);
});
});

app.get('/developer/:id', function (req, res) {
DevModel.findById(req.params.id, function (err, data) {
res.json(data);
console.log(data);
});
});

app.get('/developer/first/:name', function (req, res) {
DevModel.find({ first: { "$in" : [req.params.name] }} ,function (err, data) {
res.json(data);
});
});

app.get('/developer/skill/:name', function (req, res) {
DevModel.find({ skill: { "$in": [req.params.name] } }, function (err, data) {
res.json(data);
});
});

app.get('/developer/city/:name', function (req, res) {
DevModel.find({ city: { "$in": [req.params.name] } }, function (err, data) {
res.json(data);
});
});

app.get('/countDev', function (req, res) {
DevModel.count(function (err, data) {
res.json(data);
});
});

app.get('/findOneDev', function (req, res) {
var query = DevModel.where({ skill: 'SAS' });
DevModel.findOne(query,function (err, data) {
res.json(data);
});
});

app.post("/developer", function (req, res) {
var dev1 = new DevModel(req.body);
dev1.save(function (err, doc) {
DevModel.find(function (err, data) {
res.json(data);
});
});
});

app.delete("/developer/:id", function (req, res) {
DevModel.findById(req.params.id, function (err, doc) {
doc.remove();
DevModel.find(function (err, data) {
res.json(data);
});
});
});

app.get('/devUpdate/:name', function (req, res) {
var query= {first:{ "$in" : [req.params.name] }};
DevModel.findOneAndUpdate(query, { city: 'Boston' }, function (err, data) {
res.json(data);
});
});

app.get('/hello', function(req, res){
        res.send('Hello World from Server');
        });

app.get('/goodbye', function(req, res){
        res.send('Good Bye from Server');
        });

app.get('/sendParameter/:param', function(req,res){
        var param = req.params.param;
        res.send(param);
        });

var employee =[
               {name:"Pankaj", skill:[{name: "JAVA"},{name:"WEB DEV"},{name:"DB"}]},
               {name:"Kartik", skill:[{name: "JAVA"},{name:"SAS"},{name:"DB"}]},
               {name:"Vikas", skill:[{name: "JAVA"},{name:"WEB DEV"},{name:"DB"}]},
               {name:"Abhishek", skill:[{name:"WEB DEV"},{name:"DB"}]},
               {name:"Shakti", skill:[{name: "JAVA"},{name:"WEB DEV"},{name:"DB"},{name:"AI"}]}
];

app.get('/api/employee', function(req,res){
        res.json(employee);
        });

app.get('/api/employee/:index', function(req,res){
        res.json(employee[req.params.index]);
        });

app.get('/api/employee/:index/skill', function(req,res){
        res.json(employee[req.params.index].skill);
        });

app.get('/api/employee/:index/skill/:idx', function(req,res){
        var skillId = req.params.idx;
        res.json(employee[req.params.index].skill[skillId]);
        });

app.delete('/api/employee/:index', function(req,res){
           employee.splice(req.params.index,1);
           res.json(employee);
        });

app.post('/api/employee/', function(req,res){
         employee.push(req.body);
           res.json(employee);
        });

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port= process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);

