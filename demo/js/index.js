// banner中鼠标进入，显示、隐藏向左或者向右的图标
function mouseEnter(){
    var bt=document.getElementsByTagName("button");
    bt[0].style.visibility="visible";
    bt[1].style.visibility="visible";
}
function mouseOut(){
    var bt=document.getElementsByTagName("button");
    bt[0].style.visibility="hidden";
    bt[1].style.visibility="hidden";
}

var index=0;
//改变图片
function ChangeImg() {
    index++;
    var a=document.getElementsByClassName("img-slide");
    if(index>=a.length) index=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    a[index].style.display='block';
}

//设置定时器，每隔两秒切换一张图片
setInterval(ChangeImg,3000);

function leftClick(){
    ChangeImg();
}
function rightClick(){
    ChangeImg();
}