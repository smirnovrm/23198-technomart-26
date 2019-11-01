var loginBlock = document.querySelector(".login-block ul")
var profileBlock = document.querySelector(".profile-bar")
var addLinkBlock = document.querySelector(".additional")

var bookmarkBtn = document.querySelector(".extra a[title='Закладки']")
var basketBtn = document.querySelector(".extra a[title='Корзина']")

var bookmarBtnCnt = document.querySelector("a[title='Закладки'] span")
var basketBtnCnt = document.querySelector("a[title='Корзина'] span")

var loginBtn = document.querySelector(".login-btn")
var logoutBtn = document.querySelector(".logout-btn")

var mapModal = document.querySelector("#map-modal")
var contactModal = document.querySelector("#contact-modal")
var basketModal = document.querySelector("#basket-modal")

var openMap = document.querySelector("#map")
var openContact = document.querySelector("#open-contact")

var closeMapBtn = document.querySelector("#map-modal .popup-close")
var closeContactBtn = document.querySelector("#contact-modal .popup-close")
var closeBasketBtn = document.querySelector("#basket-modal .modal-wrap .popup-close")
var continueShopingBtn = document.querySelector("#continue-btn")

var favoriteCnt = 0;
var basketCnt = 0;

function openModal(modal, openBtn, closeBtn){
  try {
    openBtn.addEventListener("click", function(event){

      event.preventDefault()
      modal.classList.add("show")

    })
    closeBtn.addEventListener("click", function(event){

      modal.classList.remove("show")

    })
  } catch (err) {
    console.log("На странице отсутствует модальное окно")
  }
}

openModal(mapModal, openMap, closeMapBtn)

openModal(contactModal, openContact, closeContactBtn)

loginBtn.addEventListener("click", function(event){

  event.preventDefault()
  loginBlock.classList.add("visually-hidden")
  profileBlock.classList.remove("visually-hidden")
  addLinkBlock.classList.remove("visually-hidden")

})

logoutBtn.addEventListener("click", function(event){

  event.preventDefault()
  loginBlock.classList.remove("visually-hidden")
  profileBlock.classList.add("visually-hidden")
  addLinkBlock.classList.add("visually-hidden")

})


document.querySelector(".catalog-items").addEventListener("click", function(event){
  if (event.target.className === "bookmark"){
    favoriteCnt++
    bookmarBtnCnt.innerHTML = favoriteCnt
    bookmarkBtn.classList.add("added-item")
  }else if(event.target.className === "buy"){
    basketModal.classList.add("show")
    basketCnt++
    basketBtnCnt.innerHTML !== 0 ? basketBtnCnt.innerHTML++ : basketCnt
    basketBtn.classList.add("added-item")
  }
})

try {

  closeBasketBtn.addEventListener("click", function(event){

    basketModal.classList.remove("show")

  })

  continueShopingBtn.addEventListener("click", function(event){

    basketModal.classList.remove("show")

  })

} catch (err) {
  console.log("Не могу закрыть окно")
}
