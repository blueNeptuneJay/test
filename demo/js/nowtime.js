function nowTime(){
    var now=new Date;
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var day=now.getDate();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
    var nowstring=year+"-"+month+"-"+day+"       "+h+":"+m+":"+s;
    return nowstring
}