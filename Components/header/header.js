function componenteHeader(el){
  const componentEl=document.createElement('div');
  componentEl.innerHTML=`
  <header class="header">

    <img class="header__logo" src="./media/Img/a90f9a709b8c4d74b90997eb5bc54418.png" alt="">

    <a class="header__button-open"><img class="button-open-logo" src="./media/Img/menu (2).png" alt=""></a>
    <span class="header-contenedor-links">
      <a href="./index.html" class="header__links">Inicio</a>
      <a href="./portfolio.html" class="header__links">Portfolio</a>
      <a href="./servicios.html" class="header__links">Servicios</a>
      <a href="./contacto.html" class="header__links">Contacto</a>
    </span>
    
    <div class="header__ventana">
        <a class="ventana__button-close"><img class="logo-close" src="./media/Img/close.png" alt=""></a>
      <div class="ventana-content">
          <a href="./portfolio.html" class="content-sections">Portfolio</a>
          <a href="./servicios.html" class="content-sections">Servicios</a>
          <a href="./contacto.html" class="content-sections">Contacto</a>
      </div>
    </div>
    
  </header>
  `
  el.appendChild(componentEl);
}

(function(){
  const buttonOpen=document.querySelector(".header__button-open")
  const buttonClose=document.querySelector(".ventana__button-close")
  const Ventana=document.querySelector(".header__ventana")

  buttonOpen.addEventListener("click",()=>{
    Ventana.style.display= "inherit"
  });
  buttonClose.addEventListener("click",()=>{
    Ventana.style.display= "none"
  });
})()