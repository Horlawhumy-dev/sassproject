
const menuLink = document.querySelector('.menu-link');
const navMenu = document.querySelector('.menu');

menuLink.addEventListener('click', toggleMenu);


let showMenu = false;

function toggleMenu(){
    console.log("Clicked")
    menuLink.classList.add('open')
    // if(!showMenu){
    //     navMenu.classList.add('open');
    //     showMenu = true;
    // }else{
    //     navMenu.classList.remove('open');
    //     showMenu = false;
    // }
}