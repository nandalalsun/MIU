const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", popMessage);
// timeShow();


function popMessage(){
    let patientID = document.getElementById("patientID").value;
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let department = document.getElementById("department").value;
    let dob = document.getElementById("dob").value;
    
    let isOutPatient = document.getElementsByName("patient");
    var isOut;

    for(let i=0; i<isOutPatient.length; i++){
        if(isOutPatient[i].checked){
            isOut = isOutPatient[i].value;
        }
    }
    let message = "Patient ID: "+patientID+"\nFirst Name: " + fname + "\nMiddle Name: "+mname+ "\nLast Name: "+lname+ "\nDepartment: "+ department + "\nDOB: "+dob +"\nIs the patient out? "+isOut;


    let checkBox = document.getElementsByName("interest");
    var interested = [];
    let j = 0;
    for(let i = 0; i<checkBox.length; i++){ 
        if(checkBox[i].checked){
            interested[j] = checkBox[i].value;
            j++;
        }
    }
    console.log(interested);

    if(fname != "" && lname != "" && dob != "" && patientID != ""){
        window.alert(message);
    }
    // window.alert(message);

    
}

function timeShow(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = lessThan(date.getDate());
    let hour = lessThan(date.getHours());
    let min = lessThan(date.getMinutes());
    let second = lessThan(date.getSeconds());
    
    let fullDate = "" + year +"/"+month+"/"+day+" " + hour+":"+min+ ":"+second;
    
    document.getElementById("guest").innerHTML = fullDate;
    setTimeout(timeShow, 500);
}

function lessThan(time){
    return time < 10 ? "0"+time : ""+time;
}

