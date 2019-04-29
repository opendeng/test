var express = require('express');
var app = express();
var bodyParser = require('body-parser');//编码解析
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";//数据库地址

app.use('/public', express.static('public'));//express静态资源层

//post请求
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/process_post', urlencodedParser, function (req, res) {
 
  // 输出 JSON 格式
  var response = {
      "first_name":req.body.first_name,
      "last_name":req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})


app.get('/', function (req, res) {
   res.send("you are a good man")
 })

 app.get('/AA', function (req, res) {
  res.sendFile( __dirname + "/" + "AA.html" );
})

//读取html文件
// 全局变量：
// __filename 表示当前正在执行的脚本的文件名。

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
  
var dataIn;
//路由
//请求的那两个参数
app.get('/process_get', function (req, res) {
  
    // 输出 JSON 格式
    var response = {
        "postfirst_name":req.query.first_name,
        "postlast_name":req.query.last_name
    };
    //数据插入MongoDB数据库
    var url = "mongodb://localhost:27017";//数据库地址
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
        var dbo = db.db("runoob");
        
        dbo.collection("site").insertOne(response, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
    });
    console.log(response);
    res.end(JSON.stringify(response));//字符串输出页面。（会乱码）
 })
console.log(dataIn+"dsdadada2131")






var server = app.listen(8085, function () {

   var host = server.address().address
   var port = server.address().port
  
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
 })