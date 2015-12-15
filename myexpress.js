/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-7-24
 * Time: 上午9:10
 * To change this template use File | Settings | File Templates.
 */
var express =require("./server/node_modules/express");
var app = express();
app.set("port",8888);//设置app端口

app.configure(function(){
    app.use(express.logger("dev"))
    app.use(express.bodyParser()); //post请求数据
    app.use(express.methodOverride());   //非get post请求转换
    app.use(app.router);   //路由分发
    //__dirname项目根目录
    app.use(express.static(__dirname + '/client'));//资源路径

//    app.use(express.favicon(__dirname+"/client/image/content.png"));
    app.use(express.errorHandler());

})
app.listen(app.get('port'),function(){//服务器监听端口号
    console.log(app.get('port'))
})
app.get("/test.do",function(req,resp){
    console.log(resp)
//    resp.writeHead(200,{"content-type":"text/plain"})
//    resp.write("ok")
//    resp.end();
    resp.send("ok")
})
app.get("/index_1.do",function(req,resp){
    console.log(1);

    resp.sendfile("client/index_1.html")

})

//app.get("add.do",userDao.add);
//app.get("update.do",userDao.update);
//app.get("query.do",userDao.query);
//app.get("delete.do",userDao.delete);