const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const btnSubmit = document.getElementById("submitBtn");

btnSubmit.addEventListener("click", popMessage);
// timeShow();


function popMessage(){
    let fname = document.getElementById("fullname").value;
    let citizenID = document.getElementById("citizenID").value;
    let ssn = document.getElementById("ssn").value;
    let state = document.getElementById("state").value;
    
    let senior = document.getElementsByName("isSenior");
    var isSenior;

    for(let i=0; i<senior.length; i++){
        if(senior[i].checked){
            isSenior = senior[i].value;
        }
    }
    let message = "Full Name: "+fname+"\nCitizen ID: " + citizenID + "\nSSN: "+ssn+ "\nState: "+state+ "\nIs Senior: "+ isSenior;

    if(fname != "" && citizenID != "" && ssn != ""){
        window.alert(message);
    }
}

function timeShow(){
    let date = new Date();
    let year = date.getFullYear();
    let month = monthNames[date.getMonth()];
    let dayWeek = dayNames[date.getDate()];
    let day = date.getDay();
    let hour = lessThan(date.getHours());
    let min = lessThan(date.getMinutes());
    let second = lessThan(date.getSeconds());

    let amPm = hour > 12 ? "AM" : "PM";
    
    let fullDate = "" + dayWeek +", "+day+" "+month+" "+year+" - " + hour+":"+min+ ":"+second + " " + amPm;
    
    document.getElementById("guest").innerHTML = fullDate;
    setTimeout(timeShow, 500);
}

function lessThan(time){
    return time < 10 ? "0"+time : ""+time;
}

