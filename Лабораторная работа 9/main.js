let XML = new XMLHttpRequest();

let receiveInput = document.querySelector("input[type=file]");
let ImageWindwo = document.querySelector(".ImageWindwo");
let ButtonAreaBorder = document.querySelector(".ButtonAreaBorder");


receiveInput.addEventListener("change", function(){
    let File = new FileReader();
   
    XML.open('POST', 'https://isidea.ru/rgups_file.php', true);
    XML.upload.onprogress = function(ev){
        ButtonAreaBorder.lastElementChild.style.width = ((ev.loaded/receiveInput.files[0].size)*100) + "%";

        if(ButtonAreaBorder.lastElementChild.style.width === "100%"){
            ButtonAreaBorder.lastElementChild.style.width = "0%";
        }
    };
    XML.upload.onload = function(){
        File.readAsDataURL(receiveInput.files[0]);
        File.onload = function(ev){
            ButtonAreaBorder.classList.add("ok");
            ButtonAreaBorder.firstElementChild.firstElementChild.src = "./Photo/label green.svg";
            ButtonAreaBorder.firstElementChild.lastElementChild.innerText = receiveInput.files[0].name + " [" + ((receiveInput.files[0].size/1024/1024).toFixed(2)) + "Мб]";
            ImageWindwo.style.backgroundImage = `url("${ev.target.result}")`;
        }       
    }    
 XML.send(receiveInput.files[0]);
});
