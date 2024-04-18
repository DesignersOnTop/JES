function usuario() {
    let user = document.getElementById("id").value;
    let password = document.getElementById("password").value;

if(user === "admin" && password =="admin"){
    window.location="a-home.html";

} else if(user === "estudiante" && password === "estudiante"){
        window.location="e-home.html";
    }else if(user === "profesor" && password === "profesor"){
        window.location = "p-home.html"
    }else {
        alert("Usuario No Encontrado, verifique que los datos que este ingresando sean correcto o intente mas tarde")
    }
}   
