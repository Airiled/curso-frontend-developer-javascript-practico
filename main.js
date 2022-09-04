//En el primer ejercicio se nos pidio que al tocar el mail que aparece en la pagina se nos abriria el menu del usuario
//el codigo comentado debajo es como lo realice sin saber que existia la linea que se realizo despues de 'desktopMenu.classList.toggle('inactive');'
const desktopMenu = document.querySelector('.desktop-menu');
const userEmail = document.querySelector('.navbar-email');
//let aux = true;

console.log('entramos al programa');

userEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('entramos a la funcion');
    // if(aux == true){
    //     console.log('aux == true');
    //     desktopMenu.setAttribute('class', 'desktop-menu');
    //     aux = false;

    // }else{
    //     console.log('aux == false');
    //     desktopMenu.setAttribute('class', 'desktop-menu inactive');
    //     aux = true;
    // }

    desktopMenu.classList.toggle('inactive');

}

