/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-7-24
 * Time: 上午9:26
 * To change this template use File | Settings | File Templates.
 */
exports.add=function(req,resp){

}
exports.login=function(req,resp){
        var name =req.body.username
        var pwd= req.body.pwd;

        if(name=="123"&&pwd=="123"){
            req.session.user=name;
            resp.redirect("main.html");

        }
}