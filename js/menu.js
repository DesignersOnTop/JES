const menu = document.querySelector('.menu');

menu.addEventListener('click',() =>{
    if(menu.classList.toggle("active")) {
        document.querySelector(".menu-navegador").style.padding = "0 0 50px 0";
        document.querySelector(".menu-navegador").style.position = "relative"
        
    }else{
        document.querySelector(".menu-navegador").style.padding = "0";
    }
})