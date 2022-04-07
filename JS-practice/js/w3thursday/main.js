"use strict"
console.log("Hello Minibank");
(function(){
    console.log("Wrapper minibank module");
    const fromNewAccount = document.getElementById("fromNewAccount");
    fromNewAccount.addEventListener("submit", createAccount);
    function createAccount(){
        console.log("Account created");
    }

})();

//Method 2:
window.onload = function(){
    console.log("Minibank module");
    const fromNewAccount = document.getElementById("fromNewAccount");
    fromNewAccount.addEventListener("submit", createAccount);
    function createAccount(){
        console.log("Account created");
    }
}

//Method 3: Jquery
$(document).ready(function(){
    console.log("Minibank via jquery");
    $("#formNewAccount").submit(function(event){
        const accountNO = $("#accoutnId").val();
        const customerName = $("#customerNameId").val();
        const accountType = $("#accountTypeId").val();
        const accountData = `Account No: ${accountNO} \nCustomer Nmae: ${customerName} \nAccount Type: ${accountType}`;
        alert(accountData);
    });
    function createAccount(){
        console.log("Account created");
    }
});