var mapModal = document.querySelector("#map-modal")
var closeMapBtn = document.querySelector(".popup-close")

var openMapBtn = document.querySelector("#map")

openMapBtn.addEventListener("click", function(event){

  mapModal.classList.add("show");

})


closeMapBtn.addEventListener("click", function(event){

  mapModal.classList.remove("show");

})

// console.log(mapModal);
// console.log(closeBtn);
