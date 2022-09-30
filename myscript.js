// Agregar cantidad de productos.
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
  userInputNumber--;
  if(userInputNumber <= 0){
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

// Agregar el total de productos al carrito.
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
  lastValue = lastValue + userInputNumber;

  cartNotification.innerText = lastValue;
  cartNotification.style.display= 'block';
  drawProductInModal();
  
});

// Mostrar el modal del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
  cartModal.classList.toggle('show');

  if(lastValue === 0){
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  }else{
    drawProductInModal();
  }

});

// Borrar el contenido del carrito
function deleteProduct(){
  const deleteProductBtn = document.querySelector('.cart-modal__delete');
  
  deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
};

//Cambiar imagenes de la galería al presionar botones
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1; 

nextGalleryBtn.addEventListener('click', ()=>{
  changeNextImage(imageContainer);
});
previusGalleryBtn.addEventListener('click', ()=>{
  changePreviusImage(imageContainer);
});

//Mostrar el menu en mobile
const navbarBackground = document.querySelector('.modal-navbar__background');
const navbarOpen = document.querySelector('.header__menu');
const navbarClose = document.querySelector('.modal-navbar__close-icon');

navbarOpen.addEventListener('click', ()=>{
  navbarBackground.style.display = 'grid';
});

navbarClose.addEventListener('click', ()=>{
  navbarBackground.style.display = 'none';
});

//Mostrar el modal de imagenes cuando den click
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');
const imageDesktopContainer = document.querySelector('.gallery__image-container--desktop');

imageDesktopContainer.addEventListener('click', ()=>{
  imagesModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
  imagesModal.style.display = 'none';
});

//Mostrar el modal de imagenes cuando den click
let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail =>{
  thumbnail.addEventListener('click', ()=>{
    console.log(event.target.id)
    imageContainer.style.backgroundImage = `url(./assets/image-product-${event.target.id}.jpg)`;
  });
});

//Cambiar imagenes en el modal de cuando den click
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalthumbnail => {
  modalthumbnail.addEventListener('click', event=>{
    console.log(event.target.id.slice(-1))
    modalImageContainer.style.backgroundImage = `url(./assets/image-product-${event.target.id.slice(-1)}.jpg)`;
  });
});

//Cambiar imagenes en el modal por medio de flechas
const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
  changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
  changePreviusImage(modalImageContainer);
});


// Funciones
function drawProductInModal(){
  productContainer.innerHTML = `
  <div class="cart-modal__datails-container">
    <img class="cart-modal__image" src="./assets/image-product-1-thumbnail.jpg" alt="thumbnail">
    <div>
      <p class="cart-modal__product">Autumn Limited Edition...</p>
      <p class="cart-modal__price">$125.00 x3 <span>$375.00</span> </p>
    </div>
    <img class="cart-modal__delete" src="./assets/icon-delete.svg" alt="delete">
  </div>
  <button class="cart-modal__checkout">Checkout</button>`
  deleteProduct();
  let priceModal = document.querySelector('.cart-modal__price');
  priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
};

function changeNextImage(imageContainer){
  if(imgIndex == 4){
    imgIndex = 1;
  }else{
    imgIndex++;
  }
  imageContainer.style.backgroundImage = `url(./assets/image-product-${imgIndex}.jpg)`;
};

function changePreviusImage(imageContainer){
  if(imgIndex == 1){
    imgIndex = 4;
  }else{
    imgIndex--;
  }
  imageContainer.style.backgroundImage = `url(./assets/image-product-${imgIndex}.jpg)`;
};


