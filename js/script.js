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
// var contactModal = document.querySelector("#contact-modal")
var basketModal = document.querySelector("#basket-modal")

var openMap = document.querySelector("#map")
// var openContact = document.querySelector("#open-contact")

var closeMapBtn = document.querySelector("#map-modal .popup-close")
// var closeContactBtn = document.querySelector("#contact-modal .popup-close")
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

    var link = document.querySelector("#open-contact")

    var popup = document.querySelector("#contact-modal")
    var close = popup.querySelector("#contact-modal .popup-close")

    var form = popup.querySelector("form")

    var personName = popup.querySelector("#name-person")
    var email = popup.querySelector("#email-person")
    var msg = popup.querySelector("#mail-text")

  } catch (error) {
    console.log("");
  }


  var isStorageSupport = true;
  var storage = "";

  try {
    storagePerson = localStorage.getItem("personName");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageText = localStorage.getItem("msg");
  } catch (err) {
    isStorageSupport = false;
  }

  try {

    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add("show");

      if (storagePerson && storageEmail) {
        personName.value = storagePerson;
        email.value = storageEmail;
        msg.focus();
      }
      else if (storagePerson) {
        personName.value = storagePerson;
        email.focus();
      } else {
        personName.focus();
      }
    });

    close.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.remove("show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (event) {
      if (!personName.value || !email.value || !msg.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("personName", personName.value);
          localStorage.setItem("email", email.value);
          localStorage.setItem("msg", msg.value);
        }
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        event.preventDefault();
        if (popup.classList.contains("show")) {
          popup.classList.remove("show");
          popup.classList.remove("modal-error");
        }
      }

      try {
        if(mapModal.classList.contains("show")){
          mapModal.classList.remove("show")
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
    })

  } catch (error) {
    console.log("")
  }

