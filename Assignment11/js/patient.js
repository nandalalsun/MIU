/**
 * patient.js
 * @author Sunil Timilsina
 * @since 2022
 */

// "use strict"

(function(){
    
    var data = [];
    
    function data_extraction(){
        var isOutPatient;
        var isIn = document.getElementsByName("radioIsOutPatient");
        isIn.forEach((d) =>  {if(d.checked) {isOutPatient = d.value;}});
        form_data = {
            p_id: document.getElementById("patientIdNumber").value,
            f_name: document.getElementById("firstName").value,
            m_name: document.getElementById("middleInitials").value,
            l_name: document.getElementById("lastName").value,
            dob: document.getElementById("dateOfBirth").value,
            department: document.getElementById("ddlDepartment").value,
            isOut: isOutPatient,
        }
        data.push(form_data);
        
    }

    var isOutCheck = document.getElementById("chkShowOutPatients");
    var isOlder = document.getElementById("chkElderlyPatients");
    
    isOutCheck.addEventListener("change", filter_data);
    isOlder.addEventListener("change", filter_data);


    function check_age_if_older(age){
        const date_diff = Number(age.substring(0, 4));
        const date_now = Number(new Date().getFullYear());
        return date_now - date_diff;
    }

    function filter_data(event){
        event.preventDefault();

        var table, tr, td, i;
        table = document.getElementById("p_table");
        tr = table.getElementsByTagName("tr");

        if(isOutCheck.checked){

            for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[6];
                if(td.innerHTML === "Yes"){
                    tr[i].style.display = "none";
                }
               
            }
        }
        if(!isOutCheck.checked){
            for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[6];
                if(td.innerHTML === "Yes"){

                    tr[i].style.display = "";
                }
            }
        }
        if(isOlder.checked){
            for (i = 1; i < tr.length; i++) {
                let dob = tr[i].getElementsByTagName("td")[4].innerHTML;
                let age = check_age_if_older(dob);
                    if(age > 65){
                        tr[i].style.display = "none"; 
                    }
            }
        }
        if(!isOlder.checked){
            for (i = 1; i < tr.length; i++) {
                let dob = tr[i].getElementsByTagName("td")[4].innerHTML;
                let age = check_age_if_older(dob);
                    if(age > 65){
                        tr[i].style.display = ""; 
                    }
                }
        }
        

    }

    function fill_table_with_data(pos){
        
                let table = document.getElementById("p_table");
                let row = table.insertRow(-1);
                let p_id_no = row.insertCell(0);
                let f_name = row.insertCell(1);
                let m_name = row.insertCell(2);
                let l_name = row.insertCell(3);
                let dob = row.insertCell(4);
                let department = row.insertCell(5);
                let out = row.insertCell(6);

                p_id_no.innerHTML = data[pos].p_id;
                f_name.innerHTML = data[pos].f_name;
                m_name.innerHTML = data[pos].m_name;
                l_name.innerHTML = data[pos].l_name;
                dob.innerHTML = data[pos].dob;
                department.innerHTML = data[pos].department;
                out.innerHTML = data[pos].isOut;
      
    }
    
    document.getElementById("btnRegisterPatient").onclick = function (event) {
        event.preventDefault();
        data_extraction();
        fill_table_with_data(data.length - 1);
        // return false;
    }

    

})();