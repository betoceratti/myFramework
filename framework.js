//Codigo js plnatilla framework

AOS.init();

// <!-- CODIGO JAVA SCRIPT -->


//FUNCION PARA DESPLEGAR EL NAV 
const nav = document.getElementById('btn');
menu.addEventListener('click', () => {
   document.getElementById('nav').classList.toggle('active');
});       
//FUNCION PARA DESPLEGAR EL MENU RESPONSIVE
const desplegable = document.getElementById('btn1');
desplegable.addEventListener('click', () => {
   document.getElementById('menu').classList.toggle('active');
});       

//FUNCION PARA DESPLEGAR EL FORMULARIO DE CONACVTO
const bform = document.getElementById('btnform');
bform.addEventListener('click', () => {
   
   document.querySelector('.form').classList.toggle('show');
});       

//FUNCION PARA ACTIVAR LOS ENLACES

const enlaces = document.querySelectorAll('.nav .navbar li a');
enlaces.forEach((enlace)=>{
enlace.addEventListener('click',(evento)=>{
  evento.preventDefault;
  enlaces.forEach((elemento)=> elemento.classList.remove('activo'));
  evento.target.classList.add('activo');

});
});



//Codigo para el formulario      

function login(){
  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('mensaje').value;
  let buzon = document.getElementById('buzon');

  if(email == "robertoceratti@gmail.com" && mensaje != ""){
      buzon.innerHTML = "Tu mensaje se ha enviado con exito";
      buzon.classList.add('success');
      clear();
      change();
    

  }else{
      // alert("Error en el envio");
      buzon.innerHTML = "Error en el envio";
      buzon.classList.add('error');
      clear();
      change();

      
  }        
}; 


function clear() {
  let email = document.getElementById('email');
  let mensaje = document.getElementById('mensaje');

  email.value = "";
  mensaje.value = "";

}


// setTimeout(()=>{},2000);

function change(){
  setTimeout(() => {
    let buzon = document.getElementById('buzon');
    buzon.innerHTML = "";    
  },3000);

};



//COMIEMZA EL TYPED ESCRITURA
const typed = new Typed('.typed', {
strings: [
   '<i class="web">results</i>',
   '<i class="web">desires</i>',
   '<i class="web">objects</i>',
   '<i class="web">goals</i>'
],

//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
shuffle: false, // Alterar el orden en el que escribe las palabras.
backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
loop: true, // Repetir el array de strings
loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
showCursor: true, // Mostrar cursor palpitanto
cursorChar: '|', // Caracter para el cursor
contentType: 'html', // 'html' o 'null' para texto sin formato
});








//FUNCION PARA MOSRA O NO EL NAV SEGUN EL AVANCE DE EL SCROLL

 
 let medida = document.getElementById('scroll'); 
 let position = document.getElementById('s5');
 let menux = document.querySelector('.social-menu');
 let wave = document.querySelector('.wave');
 let wave_dos = document.querySelector('.wave-dos');
 let textImg = document.querySelector('.fondo-img-med');
 let btnPortada = document.getElementById('btn-portada');
 let team = document.querySelector('.team-texto');
 let higth = document.body.scrollHeight - window.innerHeight;
 let ubicaconPricipal =window.pageYOffset;
 let h = document.body.scrollHeight;
 let w = window.innerHeight;

 


 //FORMAS DE UAR FUCNIONES CON EVENTOS EJEMPLOS
 // window.addEventListener("scroll", () =>{}
 //window.onscroll()=>{}
 //window.addEventListener("scroll", funcion que se programa aparte)



 window.addEventListener("scroll", () =>{    
  //Con este codigo podemos saber cuantos pixeles se va desplazando el scrool       
  let desplazamientoActual = window.pageYOffset;
  let alturaPage = document.documentElement.scrollTop;
  //Con este codigo sabemos la distacia de un elemento del top del body
  let alturaElemento = menux.offsetTop;
  let altoWave = wave_dos.offsetTop;
  //conocemos el ancho y alto del vh
  let altoTotal = screen.height;
  let anchoTotal = screen.width;
  //medida.innerHTML = alturaElemento;
  position.innerHTML = alturaPage ;
 

  //cn este codifo determinamos el ancho de un elemento cpnform scroleamos
  
  let anchoFondo = (window.pageYOffset / higth) * 1408 -(600);
  //AL ANCHO AL FINAL LE QUITO EL TOTAL PARA QCUANDO LLEGUE ALA ELEMENTO COMIENZE UN NUEVO ANCHO
  
  const awave = textImg.offsetTop;
  btnPortada.innerHTML = higth;
  medida.innerHTML = anchoFondo;
  wave_dos.style.width = Math.trunc(anchoFondo) + '%';

  
  //team.style.width = anchoFondo + '%';
  //anchoFondo <=100
  //awave <= alturaPage
  /*if(anchoFondo < 100){
      //alert(awave)
      wave_dos.style.width = anchoFondo + '%';

  }*/

  //Para add clases mediante un if de altura del elemento 

  if(alturaElemento < alturaPage){
      //menux.style.display = "none";
      menux.classList.add("scroll");
      wave.classList.add("scroll");
     
  }else{
      menux.classList.remove("scroll");
      wave.classList.remove("scroll");
  }
  
  /*for(i=0; i< menux.length; i++){
      menux[i].innerHTML = contar + i;

  }*/
  
  if(ubicaconPricipal > desplazamientoActual){
      document.getElementsByTagName("nav")[0].style.top ="0px"
     
     
  }else{
      document.getElementsByTagName("nav")[0].style.top ="-100px"
     // document.getElementsByTagName("nav")[0].style.background ="white"
     
  }
  ubicaconPricipal = desplazamientoActual;

 })

//FUNCION PARA AL ABRIR WINDOWS CARGUE EL LOADER
window.addEventListener("load", () =>{

document.getElementById("loader").classList.toggle("out");

})


//FUNCION PARA ANIMAR EL MOUSE
let mouse_control = document.querySelector('.cursor');
let nav_bar = document.querySelectorAll('.navbar li ');

window.addEventListener('mousemove',(e) =>{
mouse_control.style.top = e.pageY + "px";
mouse_control.style.left = e.pageX + "px";

})

nav_bar.forEach(link =>{

link.addEventListener('mouseover', () =>{
  mouse_control.classList.add('grow');
  link.classList.add("blacked");
})

link.addEventListener('mouseleave', () =>{
  mouse_control.classList.remove('grow');
  link.classList.remove("blacked");
})
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS(
  {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);





