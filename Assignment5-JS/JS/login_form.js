//

var login_btn = document.getElementById("btn_login");
login_btn.onclick = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
}