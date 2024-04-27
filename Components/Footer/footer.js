function componenteFooter(el){
  const componentEl=document.createElement('div');
  componentEl.innerHTML=`
  <footer class="footer">

    <div class="footer__contenedor-milogo">
      <img class="footer-milogo" src="./media/Img/a90f9a709b8c4d74b90997eb5bc54418.png" alt="">
    </div>

    <div class="footer__secciones">
      <a href="./index.html" class="sections home"> Home</a>
      <a href="./servicios.html" class="sections servicios">Servicios</a>
      <a href="./contacto.html" class="sections contact">Contacto</a>
    </div>

    <div class="footer-redes">
      <a href="https://www.linkedin.com/in/ivan-miranda-146912303/"><img src="./media/Img/Frame 24.png" alt="" class="redes"></a>
      <a href="https://github.com/"><img src="./media/Img/Frame 26.png" alt="" class="redes"></a>
      <a href="https://twitter.com/home?lang=es"><img src="./media/Img/Frame 26 (1).png" alt="" class="redes"></a>
    </div>

    <div class="footer-texto">©2024 - https://apx.school</div>

  </footer>
  `
  el.appendChild(componentEl);
}