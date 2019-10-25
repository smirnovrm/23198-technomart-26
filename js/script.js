var mapModal = document.querySelector("#map-modal")
var contactModal = document.querySelector("#contact-modal")

var closeMapBtn = document.querySelector("#map-modal .popup-close")
var closeContactBtn = document.querySelector("#contact-modal .popup-close")

var openMap = document.querySelector("#map")
var openContact = document.querySelector("#open-contact")

openMap.addEventListener("click", function(event){

  mapModal.classList.add("show")

})
closeMapBtn.addEventListener("click", function(event){

  mapModal.classList.remove("show")

})

openContact.addEventListener("click", function(event){

  event.preventDefault
  contactModal.classList.add("show")

})

closeContactBtn.addEventListener("click", function(event){

  contactModal.classList.remove("show")

})


// console.log(openContactBtn)
// console.log(mapModal);
// console.log(closeBtn);
