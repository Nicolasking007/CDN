/*
<!--
* author:Nicolas-kings
* date:2020/07/19
* 详尽信息请看：https://nkupp.com
* Copyright by Nicolas-kings 版权所有
*
* 请尊重原创，未经允许请勿转载。
* 在保留版权的前提下可应用于个人或商业用途

-->
*/


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