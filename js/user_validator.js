function usuario() {
    let user = document.getElementById("id").value;
    let password = document.getElementById("password").value;

if(user === "admin" && password =="admin"){
    window.location="a-home.html";

} else if(user === "estudiante" && password === "estudiante"){
        window.location="e-home.html";
    }else if(user === "profesor" && password === "profesor"){
        window.location = "p-home.html"
    }else if(user === "" && password === "") {
        alert("'Por favor, asegúrate de completar todos los campos necesarios para acceder al sistema!'")
    }
    else {
        alert("'Lo sentimos, parece que el ID o la contraseña ingresados son incorrectos. Por favor, inténtalo de nuevo.'")
    }
}   
