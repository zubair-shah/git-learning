var count = 0;
var interval;
function timer(){
    count++
    console.log("count")
}
interval = setInterval(timer,1000)

setTimeout(function(){
    clearInterval(interval)
},7000)

function timeOut(){
    console.log("runing")
}
setTimeout(timeOut,4000)




var min =0;
var sec =0;
var mili =0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var miliHeading = document.getElementById("mili");

var interval;

function timer(){
    mili++
    miliHeading.innerHTML = mili;
   if (mili >= 100){
        sec++ 
        secHeading.innerHTML = sec;
        mili = 0;
    }
else if (sec>=10){
    min++
    minHeading.innerHTML = min;
    sec=0;
}

} 
function start(){

    interval = setInterval(timer, 10 )
}
function stop(){
    clearInterval(interval)
}
function reset(){
    mili = 0;
    sec = 0;
    min = 0;
    miliHeading.innerHTML = mili 
    secHeading.innerHTML = sec   
    minHeading.innerHTML = min    
stop()



}













