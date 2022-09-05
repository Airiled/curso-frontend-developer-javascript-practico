//En el primer ejercicio se nos pidio que al tocar el mail que aparece en la pagina se nos abriria el menu del usuario
//el codigo comentado debajo es como lo realice sin saber que existia la linea que se realizo despues de 'desktopMenu.classList.toggle('inactive');'

const desktopMenu = document.querySelector('.desktop-menu');
const userEmail = document.querySelector('.navbar-email');

const burguerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart')
const carritoMenu = document.querySelector('.product-detail')

//let aux = true;

console.log('entramos al programa');

userEmail.addEventListener('click', toggleDesktopMenu);
burguerButton.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu(){
    const isAsideOpen = carritoMenu.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive');
    if(!isAsideOpen) carritoMenu.classList.add('inactive');

}

function toggleMobileMenu(){
    const isAsideOpen = carritoMenu.classList.contains('inactive'); //variable para identificar el estado del aside

    mobileMenu.classList.toggle('inactive');
    if(!isAsideOpen) carritoMenu.classList.add('inactive');//funcion para que no se sobrepongan los menus
}

function toggleAsideMenu(){
    const isMobileClosed = mobileMenu.classList.contains('inactive'); //variable para identificar el estado del menu
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    carritoMenu.classList.toggle('inactive');
    if(!isMobileClosed) mobileMenu.classList.add('inactive');
    if(!isdesktopMenuClosed) desktopMenu.classList.add('inactive');

}

