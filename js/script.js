var map = document.querySelector('.small-map');

var popUpMap = document.querySelector('.modal-map');

map.addEventListener("click", function (event) {
  event.preventDefault();
  popUpMap.classList.add("modal-show");
});

var cross = document.querySelector('.modal-map .write-us-close');

cross.addEventListener("click", function (event) {
  event.preventDefault();
  popUpMap.classList.remove("modal-show");
})
