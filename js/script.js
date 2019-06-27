var map = document.querySelector('.small-map');

var popUpMap = document.querySelector('.modal-map');


var cross = document.querySelectorAll('.write-us-close');


var buyButton = document.querySelectorAll('.buy-button');

var popUpIcon = document.querySelector('.confirmation-message-block');

var writeUsButton = document.querySelector('.write-us-red-button');

var writeUsPopUp = document.querySelector('.window-write-us');


if(writeUsButton != null){
  writeUsButton.addEventListener("click", function (event) {
    event.preventDefault();
    writeUsPopUp.classList.add('modal-show');
  });
}


if (map != null) {
  map.addEventListener("click", function (event) {
    event.preventDefault();
    popUpMap.classList.add("modal-show");
  });
}

if (cross != null) {
  for(var i = 0; i < cross.length; i++) {
    cross[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (popUpMap != null) {
        popUpMap.classList.remove("modal-show");
      }
      if (popUpIcon != null) {
        popUpIcon.classList.remove("modal-show");
      }
      if (writeUsPopUp != null) {
        writeUsPopUp.classList.remove("modal-show");
      }
    });

  }
}

if (buyButton != null) {

  for (var i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function (event) {
      event.preventDefault();
      popUpIcon.classList.add("modal-show");
    });
  }
}

