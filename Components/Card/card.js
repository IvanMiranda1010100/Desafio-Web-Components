function componenteCard(el){
  const componentEl=document.createElement('div');
  componentEl.innerHTML=`
  <div class="card">
    <div class="card-image-container">
      <img class="image" src="https://s3-alpha-sig.figma.com/img/0af8/e23c/d8af9f2bc81da5a4047ecdc800007d18?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k26s0-Sbe2odMy6pNWGEsfiPiwMnItDlXdQxaYXURtv6WV3Q4MfSsMDAEwzIIpSQqLd2DcliaItXAneFOwc3KdfHdIIAqpgys4X4Ngh1KL3HjVmZDwFh-ASYVKFfWf4Q9ffEfuO5fIQuXir2E-MZLcPlPVcys-iGmPmMswMSurBmXYXLgwJPmJCtcFfuRyq86Pxjn8684b98Jzh6XuS1pQaeG57QiVnuomWcVgcj~o0S4hE2P10XotkOA7hpwuhzorDf3pDHrXkH1Qk4NUH0awGMyiMIksDwwwQsi~9-5cxFfKQS6VCv3jncOdfJHUFeEjV36-gWkNiQ991nsvGh8w__" alt="">
    </div>
    <div class="card-description-container">
      <h3 class="description-title">Desarrollo de paginas web</h3>
      <p class="description-parrafe">Creacion de paginas webs, totalmente responsive y mobile first. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  `
  el.appendChild(componentEl);
}