function main(){
  componenteHeader(document.querySelector(".head"));
  componenteContact(document.querySelector(".section-contact"))
  componenteFooter(document.querySelector(".section-footer"))
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