let img_promo2 = document.querySelector('.img_promo2');
let text_promo2 = document.querySelector('.text_promo2');
let img_promo3 = document.querySelector('.img_promo3');
let text_promo3 = document.querySelector('.text_promo3');

function mostrarPromos(){
    let scrollTop = document.documentElement.scrollTop;
        if(scrollTop >= 200 && scrollTop < 500){
            img_promo2.style.opacity = 1;
            img_promo2.classList.add('mostrarIzquierda');
            text_promo2.style.opacity = 1;
            text_promo2.classList.add('mostrarDerecha');
        }else if (scrollTop >= 500){
            img_promo3.style.opacity = 1;
            img_promo3.classList.add('mostrarIzquierda');
            text_promo3.style.opacity = 1;
            text_promo3.classList.add('mostrarDerecha');
        };
};

window.addEventListener('scroll', mostrarPromos);
