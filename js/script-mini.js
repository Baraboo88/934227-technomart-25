var map=document.querySelector(".small-map"),popUpMap=document.querySelector(".modal-map"),cross=document.querySelectorAll(".write-us-close"),buyButton=document.querySelectorAll(".buy-button"),popUpIcon=document.querySelector(".confirmation-message-block"),writeUsButton=document.querySelector(".write-us-red-button"),writeUsPopUp=document.querySelector(".window-write-us");if(null!=writeUsButton&&writeUsButton.addEventListener("click",function(e){e.preventDefault(),writeUsPopUp.classList.add("modal-show")}),null!=map&&map.addEventListener("click",function(e){e.preventDefault(),popUpMap.classList.add("modal-show")}),null!=cross)for(var i=0;i<cross.length;i++)cross[i].addEventListener("click",function(e){e.preventDefault(),null!=popUpMap&&popUpMap.classList.remove("modal-show"),null!=popUpIcon&&popUpIcon.classList.remove("modal-show"),null!=writeUsPopUp&&writeUsPopUp.classList.remove("modal-show")});if(null!=buyButton)for(i=0;i<buyButton.length;i++)buyButton[i].addEventListener("click",function(e){e.preventDefault(),popUpIcon.classList.add("modal-show")});
