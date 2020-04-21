window.onload=function(){
    var box =  document.getElementById('box');
 var divList = document.getElementById('divList');
 var copyDiv = document.getElementById('copyDiv');
 var copyDivW =copyDiv.clientWidth;
 var speed = 10;    //移动速度，值越大速度越慢
 function marquee() {
     if (copyDiv.offsetLeft - box.scrollLeft <= 0){//判断复制的信息是否到达box的最左边
         box.scrollLeft -= divList.offsetWidth-copyDivW    
     }else {
             box.scrollLeft++
         }
     }
 var timer = setInterval(marquee, speed);//设置定时器        

}