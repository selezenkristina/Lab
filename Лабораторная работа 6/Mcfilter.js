let category = document.querySelectorAll(".categortys");
let post = document.querySelectorAll(".iteam_main");

for(let item of category){
    item.addEventListener("click", function(){
        for(let arr of post){
            let arrCat = arr.lastElementChild.children;
           
                let result = Array.from(arrCat).find(cat =>{
                   return cat.innerHTML == item.innerHTML;
                });

                if(result == undefined){
                    arr.style.display = "none";
                }else{
                    arr.style.display = "block";
                } 
                for(let qqw of arrCat){
                console.log(qqw.innerHTML+" + "+ item.innerHTML + " " + result);
            }
        }
    });
}

let LinkModal = document.querySelector(`a[href="#Enter"]`);
let CloseIcon = document.querySelector(`img[src="./Photo/Close.png"]`);
let Background = document.querySelector(".BackgroundModalView");
let modalWind = document.querySelector(".modalWindeowsView");
let head = document.querySelector(".headMoadlView span");

LinkModal.addEventListener("click", function(event){
    event.preventDefault();
    Background.style.display = "block";
    modalWind.style.display = "block";
});

CloseIcon.addEventListener("click", function(){
    Background.style.display = "none";
    modalWind.style.display = "none";
    modalWind.style.top = 200 + "px";
    modalWind.style.left = 30 + "vw";
});

head.onmousedown = function(e) {
  var X = e.pageX - getCoords(modalWind).left;
  var Y = e.pageY - getCoords(modalWind).top;
  document.body.appendChild(modalWind);
  moveAt(e);

  function moveAt(e) {
    modalWind.style.left = e.pageX - X + 'px';
    modalWind.style.top = e.pageY - Y + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  head.onmouseup = function() {
    document.onmousemove = null;
    head.onmouseup = null;
  };
}

head.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}