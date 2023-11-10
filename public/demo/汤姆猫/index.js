//封装函数，处理动作是否带0
function getIndex(index){
    if(index<10){
        return "0"+index;
    }else{
        return index;
    }
}
var timer;
var music=document.querySelector("audio");
//封装函数，开始动作
function start(name,count){
    //每次开始前清除上一个动作
    clearInterval(timer);
    var index=0;
    var cat=document.getElementById("cat");//获取猫的动作
    timer=setInterval(function(){
        if(++index<count){
            cat.src=getImgSrc(name,index);

        }else{
            clearInterval(timer);

        }
    }, 80);

}
//封装函数，替换动作
function getImgSrc(name,index){
    return "./img/Animations/"+name+"/"+name+"_"+getIndex(index)+".jpg";
}
//点击事件实现每个动作效果
var cymbal=document.getElementById("cymbal");
cymbal.onclick=function(){
    start("cymbal",13);
    musicPlay("mp3/pia.mp3")
}
var drink=document.getElementById("drink");
drink.onclick=function(){
    start("drink",81);
}
var eat=document.getElementById("eat");
eat.onclick=function(){
    start("eat",40);
}
var fart=document.getElementById("fart");
fart.onclick=function(){
    start("fart",28);
    musicPlay("mp3/pi.mp3");
}
var pie=document.getElementById("pie");
pie.onclick=function(){
    start("pie",24);
}
var scratch=document.getElementById("scratch");
scratch.onclick=function(){
    start("scratch",56);
}
var footLeft=document.getElementById("footLeft");
footLeft.onclick=function(){
    start("footLeft",30);
    musicPlay("mp3/teng.mp3")
}
var footRight=document.getElementById("footRight");
footRight.onclick=function(){
    start("footRight",30);
    musicPlay("mp3/teng.mp3")
}
//声音的方法定义
function musicPlay(src){
    music.src=src
    music.play()
}