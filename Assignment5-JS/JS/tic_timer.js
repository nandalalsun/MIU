const btn = document.getElementById("btn");
const reset_btn = document.getElementById("reset");

let time = null;
let canReset = false;

reset_btn.onclick = () => {
    if(canReset == true){
        reset();
        canReset = false;
        reset_btn.style.display = "none";
    }
}

btn.onclick = () => {
    if(time != null){ 
        stopTimer(); 
    }
    else{
        timer();
    }
};

function reset(){
    stopTimer();
    document.getElementById("second").innerHTML = "0000-00-00:00:00";
}

function timer(){
    time = window.setTimeout(timer, 1000);
    document.getElementById("second").innerHTML = showTime();
    btn.innerHTML = "Stop";
    btn.className = "btn-stop";
}

function stopTimer(){
    window.clearTimeout(time); 
    time = null;
    canReset = true;
    reset_btn.style.display = "inline";
    btn.className = "btn";
    btn.innerHTML = "Start";
}

function showTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = isLessThan(date.getMonth());
    let day = isLessThan(date.getDay());
    let hour = date.getHours();
    let min = isLessThan(date.getMinutes());
    let second = isLessThan(date.getSeconds());
    
    return year + "-" + month + "-" + day + "-" + hour + ":" + min + ":" + second;  
}

function isLessThan(x){
    if(x < 10){
        return "0"+x;
    }
    return x + "";
}