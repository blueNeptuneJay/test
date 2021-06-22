var register_flag = 0, login_flag = 0;
function loginJudge() {
    var username = document.getElementById("username").value;
    var key = document.getElementById("password").value;
    var notice = document.getElementsByTagName("p");
    var i;

    if (username == null || username == "") {
        alert("账号不能为空");
        // notice[0].innerHTML = "账号不能为空";
        // console.log("账号为空");
        return false;
    }
    else  if(username.length!=11){//账号必须为11为手机号码{
        alert("账号必须为11位电话号码");
        // notice[0].innerHTML="账号格式错误-长度不足";
        // console.log("长度不对");
        return false;
    }
    else if(isNaN(username)){
        alert("账号只能位纯数字");
        // notice[0].innerHTML="电话号码只能是纯数字";
	    // console.log("输入的电话号码不是纯数字");
    } 
    if (key == null || key == "") {
        alert("密码不能为空");
        // notice[1].innerHTML = "密码输入有误";
        // console.log("密码不对");
        return false;
    }
    else{
        login_flag = 1;
    }
    alert("登陆成功");
    return true;
}
function registerJudge() {
    var phone = document.getElementById("phonenum").value;
    var mail = document.getElementById("Email").value;
    var passkey = document.getElementById("password").value;
    var IDcard = document.getElementById("idcard").value;
    var notice = document.getElementsByTagName("p");
    var pos1, pos2;
    n = 0;
    if (phone == null || mail == null || passkey == null || IDcard == null
        || phone == "" || mail == "" || passkey == "" || IDcard == "") {
            alert("请填写完整的信息");
        // notice[0].innerHTML = "请填写完整信息";
        // console.log("信息不完整");
        return false;
    }
    if (phone.length != 11 || phone[0] != "1") {
        alert("请输入正确的电话号码");
        // notice[1].innerHTML = "请输入正确的电话号码";
        // console.log("电话号码不正确");
        return false;
    }
    pos1 = mail.indexOf("@"), pos2 = mail.lastIndexOf(".");
    if (pos1 < 1 || pos2 < pos1 + 2 || pos2 + 2 >= mail.length) {
        alert("请输入正确的邮箱地址");
        // notice[2].innerHTML = "请输入正确的邮箱地址";
        // console.log("邮箱地址不正确");
        return false;
    }
    if (IDcard.length != 18) {
        alert("请输入正确的身份证号码");
        // notice[3].innerHTML = "请输入正确的身份证号码";
        // console.log("身份证号码不正确");
        return false;
    }
    if (passkey.length < 8) {
        alert("请设置不低于8位的密码");
        // notice[4].innerHTML = "请设置不低于8位的密码";
        // console.log("密码位数不足");
        return false
    }
    register_flag = 1;
    alert("注册成功");
}
