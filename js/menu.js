const menu = document.querySelector('.menu');

menu.addEventListener('click',() =>{
    if(menu.classList.toggle("active")) {
    Swal.fire({
        html: '<ul class="menu-navegador-eme"><li class="li-eme"><a class="a-eme">Home</a></li><li class="li-eme"><a class="a-eme">Home</a></li><li class="li-eme"><a class="a-eme">Home</a></li><li class="li-eme"><a class="a-eme">Home</a></li></ul>',
        backdrop: true,
        customClass: {
            popup: 'emergente-class classes-eme',
            confirmButton: 'confirm-eme',
            container: 'container-eme conta-eme'
        },
        buttonsStyling: false,
        showCloseButton: false,
        // closeButtonAriaLabel: "cerrar",
        allowOutsideClick: true,
        confirmButtonText: "Aceptar",
        showConfirmButton: false,
        position: 'top-right',
        grow: 'column'
        });
    }
});