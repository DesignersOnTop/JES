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
        Swal.fire({
            html: '<span class="white">"Por favor, asegúrate de completar todos los campos necesarios para acceder al sistema!"</span',
            backdrop: true,
            customClass: {
                popup: 'emergente-class',
                confirmButton: 'confirm-eme',
                container: 'container-eme'
            },
            buttonsStyling: false,
            showCloseButton: false,
            // closeButtonAriaLabel: "cerrar",
            allowOutsideClick: false,
            confirmButtonText: "Aceptar",
            imageUrl: './imagenes/recursos/logo-jes.png',
            imageWidth: '140px',
            imageHeight: '120px'
        });
    }
    else {
        Swal.fire({
            html: '<span class="white">"Lo sentimos, parece que el ID o la contraseña ingresados son incorrectos. Por favor, inténtalo de nuevo."</span',
            backdrop: true,
            customClass: {
                popup: 'emergente-class',
                confirmButton: 'confirm-eme',
                container: 'container-eme',
            },
            buttonsStyling: false,
            showCloseButton: false,
            // closeButtonAriaLabel: "cerrar",
            allowOutsideClick: false,
            confirmButtonText: "Aceptar",
            imageUrl: './imagenes/recursos/logo-jes.png',
            imageWidth: '140px',
            imageHeight: '120px'
        });
    }
}   
