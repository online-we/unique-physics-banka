const header = document.querySelector("header");

console.log("Hi I am attached.");


window.addEventListener ("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY >0);

});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};


