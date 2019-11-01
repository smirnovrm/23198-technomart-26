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

try {
  openMap.addEventListener("click", function(event){

    event.preventDefault()
    mapModal.classList.add("show")

  })
  closeMapBtn.addEventListener("click", function(event){

    event.preventDefault()
    mapModal.classList.remove("show")

  })
} catch (err) {
  console.log("На странице отсутствует модальное окно")
}



try {
  openContact.addEventListener("click", function(event){

    event.preventDefault()
    contactModal.classList.add("show")
    personName.focus()

  })
  closeContactBtn.addEventListener("click", function(event){

    event.preventDefault()
    contactModal.classList.remove("show")

  })
} catch (err) {
  console.log("На странице отсутствует модальное окно")
}

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

try {

  var form = contactModal.querySelector("form")

  var personName = contactModal.querySelector("#name-person")
  var email = contactModal.querySelector("#email-person")
  var msg = contactModal.querySelector("#mail-text")

  if(localStorage.getItem("personName") && localStorage.getItem("personName") !== "" ){
    personName.value = localStorage.getItem("personName")
  }

  if(localStorage.getItem("email") && localStorage.getItem("email") !== "" ){
    email.value = localStorage.getItem("email")
  }

  if(localStorage.getItem("msg") && (localStorage.getItem("msg") !== "" || localStorage.getItem("msg") === "В свободной форме")){
    msg.value = localStorage.getItem("msg")
  }

  form.addEventListener("submit", function(event){

    if (!personName.value) {
      event.preventDefault()
      personName.classList.add("error")
      personName.placeholder = "Введите ваше имя"
    }else {
      personName.classList.remove("error")
      try {
        localStorage.setItem("personName", personName.value)
      } catch (err) {
        console.log("Ошибка записи в локальное хранилище")
      }
    }

    if (!email.value) {
      event.preventDefault()
      email.classList.add("error")
      email.placeholder = "Введите вашу почту"
    }else {
      email.classList.remove("error")
      try {
        localStorage.setItem("email", email.value)
      } catch (err) {
        console.log("Ошибка записи в локальное хранилище")
      }
    }

    if (!msg.value || msg.value === "В свободной форме") {
      event.preventDefault()
      msg.value = ""
      msg.classList.add("error")
    }else {
      msg.classList.remove("error")
      try {
        localStorage.setItem("msg", msg.value)
      } catch (err) {
        console.log("Ошибка записи в локальное хранилище")
      }
    }

  })
} catch (error) {
  console.log("На странице отсутствует форма")
}


window.addEventListener("keydown", function(event){
  if(event.keyCode === 27){
    try {
      if(mapModal.classList.contains("show")){
        mapModal.classList.remove("show")
      }
    } catch (error) {
      console.log("Нет модального окна")
    }
    try {
      if(contactModal.classList.contains("show")){
        contactModal.classList.remove("show")
      }
    } catch (error) {
      console.log("Нет модального окна")
    }
    try {
      if(basketModal.classList.contains("show")){
        basketModal.classList.remove("show")
      }
    } catch (error) {
      console.log("Нет модального окна")
    }
  }
})
