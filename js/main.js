
let nav=document.querySelector('#nav1')
let menu=document.querySelector('.enlaces')
let contenedorNav=document.querySelector('.contenedorNav')
let hamburguer=document.querySelector('.hamburguer')

//Para que el menu se active de transparente a color solido cuando hacemos scroll

function menus(){
    let desplazamiento= window.scrollY;

    if(desplazamiento>300){
        nav.classList.add('nav1')
        
        nav.style.transition='1s'
    }else{
        nav.classList.add('nav')
        nav.classList.remove('nav1')
        menu.classList.remove('nav1')
    }
}

window.addEventListener('scroll', menus)

//Para que funcione el loader

window.addEventListener('load',function(){
    let loading=document.querySelector('#loader')
    let body=document.querySelector('#body')
    loading.style.display='none'
    body.style.display='flex,column'
    menus();

})

//para que funcione el menu hamburguesa 

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle('mostrar');
})

window.addEventListener('click',e=>{

    if(menu.classList.contains('mostrar') && e.target!=menu && e.target != hamburguer){
        menu.classList.toggle('mostrar');
    }

})

//Filtrado

let filtrar=document.querySelector('.filter')
let boton=document.querySelectorAll('.boton')
let contWork=document.querySelectorAll('.cont-work')
let diseño=document.getElementsByClassName('diseño');
let programacion=document.getElementsByClassName('programacion');
let marketing=document.getElementsByClassName('marketing');
let contGaleria=document.querySelector('.contenedorGaleria')
let galeria=document.getElementsByClassName('galeriaWork');


let servicios=[

    {img:"./img/blake-connally-IKUYGCFmfw4-unsplash.webp",id:'programacion',titulo:'PROGRAMACIÓN FULLSTACK' ,class:'todos'},
    {img:"./img/altumcode-XMFZqrGyV-Q-unsplash.webp",id:'programacion',titulo:'PROGRAMACIÓN FRONTEND' ,class:'todos'},
    {img:"./img/pakata-goh-EJMTKCZ00I0-unsplash.webp",id:'programacion',titulo:'PROGRAMACIÓN BACKEND' ,class:'todos'},

    {img:"./img/daniel-korpai-pKRNxEguRgM-unsplash.webp",id:'diseño',titulo:'DISEÑO UX/UI' ,class:'todos'},
    {img:"./img/ux-indonesia-qC2n6RQU4Vw-unsplash.webp" ,id:'diseño',titulo:'DISEÑO WRITING' ,class:'todos'},
    {img:"./img/kelly-sikkema-v9FQR4tbIq8-unsplash.webp",id:'diseño',titulo:'DISEÑO RESEARCH' ,class:'todos'},

    {img:"./img/firmbee-com-jrh5lAq-mIs-unsplash.webp",id:'marketing',titulo:'MARKETING DIGITAL' ,class:'todos'},
    {img:"./img/adem-ay-lqyqm2ICIcY-unsplash.webp",id:'marketing',titulo:'MARKETING EN REDES' ,class:'todos'},
    {img:"./img/lukas-blazek-mcSDtbWXUZU-unsplash.webp",id:'marketing',titulo:'PRODUCT MARKETING' ,class:'todos'}


]

function cargarFotos(fotosSeleccionadas){

    contGaleria.innerHTML='';
    fotosSeleccionadas.forEach(servicios=>{

        const div=document.createElement('div');
        div.classList.add('galeriaWork')
        div.innerHTML=`
                        <div class="cont-work" id='${servicios.id}'>
                            <div class="imgWork">
                                <img src=${servicios.img} alt=${servicios.titulo}>
                            </div>

                            <div class="textos-work">
                                <h4>${servicios.titulo}</h4>
                            </div>
                        </div>

        `

        contGaleria.append(div);
    })
}

cargarFotos(servicios)


boton.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        boton.forEach(btn=>btn.classList.remove('active'))
        e.currentTarget.classList.add('active')

        const fotosMostrar=servicios.filter(sr=>sr.id===e.currentTarget.id)
        console.log(fotosMostrar)

        e.currentTarget.id=='todos' ? cargarFotos(servicios): cargarFotos(fotosMostrar);

    })

})







