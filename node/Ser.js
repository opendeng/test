var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var dd=[];
var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
var server = ws.createServer(function(conn){//服务器：
    conn.on("text", function (str) {//text文本事件，on，持续时收到信息，回调函数(内容)。
        
        console.log("收到的信息为:"+str)
        if(str==="game1"){
            game1 = conn;
            game1Ready = true;
            conn.sendText("success");
        }
        if(str==="game2"){
            game2 = conn;
            game2Ready = true;
        }

        if(game1Ready&&game2Ready){
            game2.sendText(str);
        }

        conn.sendText(str)//服务器发送数据
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕")