var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/dbname";
// 创建一个app.js文件，并添加以下代码来连接服务器地址为192.168.0.243，mongodb端口为27017上名称为myNewDatabase的数据库
//数据库连接：
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.ddd.
//   db.close();
// });
var url = "mongodb://localhost:27017";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("文档插入成功");
    db.close();
});
});



