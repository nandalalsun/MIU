//
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", showWindow);

function showWindow(){
    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let qty = document.getElementById("qty").value;
    let supplier = document.getElementById("supplier").value;
    let price = document.getElementById("price").value;
    let date = document.getElementById("date").value;

    let string = "Name: " + name + "\nProduct: " + product + "\nPrice: " + price + "\nQuantity: " + qty + "\nSupplier: " + supplier + "\nDate: " + date;

    window.alert(string);
}

