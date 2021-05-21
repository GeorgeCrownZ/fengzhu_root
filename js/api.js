var domain = 'https://cs.fzsir.com';
//117.51.145.75
//https://cs.fzsir.com
//192.168.110.224
//192.168.110.234

// var port = ':8001';
var port = '/api';

var prefix = domain+port;

var appid='';
var webname='';

function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return '';
}

function setCookie(cname,cvalue)
{
    var d = new Date();
    d.setTime(d.getTime()+(1*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie(){
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
        if (user!="" && user!=null) {
            setCookie("username",user,30);
        }
    }
}

//获取appid
function getappid(){
    $.ajax({
        type: 'get',
        url: prefix + '/main/getglobal',
        async: true,
        jsonp: 'jsoncallback',
        success : function(data) {
            // layer.alert(JSON.stringify(data));
            appid=data.wechatAppid;
            webname=data.webName;
            $(document).attr("title",webname);
        },
        error : function (data) {
            alert(JSON.stringify(data));
        }
    })
}
getappid();

function checkUser() {
    let user = getCookie("uid");
    $.ajax({
        type: 'get',
        url: prefix + '/main/checkUser?uid='+user,
        async: true,
        jsonp: 'jsoncallback',
        success: function (data) {
            if(data.code == -1) {
                alert(data.msg);
                setTimeout(function(){
                    window.location.href = "login.html";
                }, 1000);
            }
        }
    })
}
// checkUser();
