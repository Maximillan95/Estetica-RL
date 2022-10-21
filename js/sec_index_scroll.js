let infoServIndex = document.querySelector('.animado');

function mostrarInfomacionServicio(){
    let scrollTop = document.documentElement.scrollTop; //scrollTop calcula a qué altura de la pag está
        if(scrollTop >= 500){
            infoServIndex.style.opacity = 1;
            infoServIndex.classList.add('mostrarArriba');
        }
};
window.addEventListener('scroll', mostrarInfomacionServicio);