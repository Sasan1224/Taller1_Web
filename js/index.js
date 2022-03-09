let imagenes = ["crate3.png","crate4.png"]
let indiceImagen = -1

document.querySelector("#carrusel__button__right").addEventListener("click",function(){
    reiniciarCarrusel();
    if(indiceImagen==imagenes.length-1){
        indiceImagen= -1;
    }
    else{
        indiceImagen++;
    }
    renderizarItemCarrusel();
})

document.querySelector("#carrusel__button__left").addEventListener("click",function(){
    reiniciarCarrusel();
    if(indiceImagen==-1){
        indiceImagen= imagenes.length-1;
    }
    else{
        indiceImagen--;
    }
    renderizarItemCarrusel();
})

function reiniciarCarrusel(){
    document.querySelector(".carrusel__item").innerHTML="";
}

function renderizarItemCarrusel(){
if(indiceImagen!== -1){
    document.querySelector(".carrusel__item").innerHTML=`<figure class="crate__picture"><img src="img/${imagenes[indiceImagen]}" class="crate__img" alt="crate"></figure>`;
}
else{
    document.querySelector(".carrusel__item").innerHTML=`<figure class="crate__picture"><img src="img/crate1.png" class="crate__img" alt="crate"></figure><figure class="crate__picture crate__picture--right"><img src="img/crate2.png" class="crate__img" alt="crate"></figure>`;
}
}