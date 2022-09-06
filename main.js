const desktopMenu = document.querySelector('.desktop-menu');
const userEmail = document.querySelector('.navbar-email');

const burguerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart')
const carritoMenu = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container');



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

 


const productList = [];
productList.push({
    name: 'Bike',
    price: 100,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 400,
    img: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Notebook',
    price: 500,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
});

function crearProductos(arr){
    for(product of arr){
        //Primero creamos la etiqueta correspondiente y se la asignamos a una variable
        //Luego le agregamos la/las clases que sean necesarias a la etiqueta para que queden como en el ejemplo
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const price = document.createElement('p');
        price.innerText = "$" + product.price;
        const name = document.createElement('p');
        name.innerText = product.name;
    
        const figureImg = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Comenzamos a acomodar de forma cascada las etiquetas colocandolas como corresponden

        figureImg.append(imgFigure);
    
        productInfoDiv.append(price, name);
    
        productInfo.append(productInfoDiv, figureImg);
    
        productCard.append(imgProduct, productInfo);
    
        cardsContainer.append(productCard);
    
    }
}

crearProductos(productList);

const selectProduct = document.querySelectorAll('.product-card');
const productDetails = document.querySelector('.product-detail-secundary');

for(element of selectProduct){
    element.addEventListener('click', toggleAsideDetails);
}

function toggleAsideDetails(){
    console.log('hola');
    productDetails.classList.toggle('inactive');
}

