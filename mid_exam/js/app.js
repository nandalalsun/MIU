const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", popMessage);


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

    if(fname != "" && lname != "" && dob != "" && patientID != ""){
        window.alert(message);
    }
    // window.alert(message);
    
}