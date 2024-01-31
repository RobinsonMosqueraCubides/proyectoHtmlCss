// AOS.init({
//     offset:1
// });

//Se le indica al programa que cuando la pantalla sea de un celular y se le de click al boton del menu cambie al estado activo
let menu = document.querySelector(".menu")

document.querySelector(".buscar").addEventListener("click", function(){
    menu.classList.toggle("active")
})

document.querySelector(".menu").addEventListener("click", function(){
    menu.classList.remove("active")
})