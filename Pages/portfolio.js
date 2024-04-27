function getWelcome() {
  fetch(
    "https://cdn.contentful.com/spaces/lcb2vlvui9fz/environments/master/entries?access_token=SbLwG804kUgHzfVp_NegJu9mgQGQtTwPVmyJ8_vA_sE&content_type=portfolio&include=1"
  )
    .then((res) => res.json())
    .then((data) => {
      const card = document.querySelector('.section-presentacion');
      const bioImgEl = card.querySelector('.presentacion-logo');
      bioImgEl.src = data.includes.Asset[0].fields.file.url;
    });
};

function getCards() {
  fetch(
    "https://cdn.contentful.com/spaces/lcb2vlvui9fz/environments/master/entries?access_token=SbLwG804kUgHzfVp_NegJu9mgQGQtTwPVmyJ8_vA_sE&content_type=desafioWebComponentsHome&include=1"
  )
    .then((res) => res.json())
    .then((data) => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        const titleEl = card.querySelector('.description-title');
        const bioEl = card.querySelector('.description-parrafe');
        // const bioImgEl = card.querySelector('.image');

        titleEl.textContent = data.items[index].fields.cardTitle;
        bioEl.textContent = data.items[index].fields.descripcionCard;
        // bioImgEl.src = data.includes.Asset[index].fields.file.url;
      });
    });
}


function main(){
  componenteHeader(document.querySelector(".head"));
  // componenteCard(document.querySelector(".card-servicioone"))
  // componenteCard(document.querySelector(".card-serviciotwo"))
  // componenteCard(document.querySelector(".card-serviciothree"))
  componenteFooter(document.querySelector(".section-footer"))
  getWelcome();
  getCards();
}

main();

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