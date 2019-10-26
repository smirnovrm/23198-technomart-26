var mapModal = document.querySelector("#map-modal")
var contactModal = document.querySelector("#contact-modal")
// var basketModal = document.querySelector("#basket-modal")

var openMap = document.querySelector("#map")
var openContact = document.querySelector("#open-contact")
// var openBasket = document.querySelectorAll(".buy");

// var buyBtn = document.querySelector("#buy-btn")
// var cntBtn = document.querySelector("#continue-btn")
// console.log(openBasket);

var closeMapBtn = document.querySelector("#map-modal .popup-close")
var closeContactBtn = document.querySelector("#contact-modal .popup-close")
// var closeBasketBtn = document.querySelector("#basket-modal .modal-wrap .popup-close")

try {
  openMap.addEventListener("click", function(event){

    mapModal.classList.add("show")

  })
  closeMapBtn.addEventListener("click", function(event){

    mapModal.classList.remove("show")

  })
} catch (err) {
  console.log("Не найдено модальное окно с картой")
}


try {
  openContact.addEventListener("click", function(event){

    event.preventDefault
    contactModal.classList.add("show")

  })
  closeContactBtn.addEventListener("click", function(event){

    contactModal.classList.remove("show")

  })
} catch (err) {
  console.log("На странице отсутствует модальное окно с контактной формой")
}
