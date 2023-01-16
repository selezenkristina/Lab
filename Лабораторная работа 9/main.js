// let button = document.querySelector("input[type=file]");
// let windowImg = document.querySelector(".showIMG>img");
// let FileName = document.querySelector(".nameFile");
// let PB = document.querySelector('.inProgress');
// let Border = document.querySelector("#border_btn_img");

//         function ProgresBar(value, max){
//             let oneProcent = (value/max)*100;
//             PB.style.width = oneProcent + "%";
//             if(PB.style.width === "100%"){
//                 PB.style.width = "0%";
//             }
//         }
//         function renameSize(file){
//             return (file.size / 1024 / 1024).toFixed(2);
//         }
//         function showResult(event, text, border, img, file){
//             text.style.color = "#005F17";
//             border.style.borderColor = "#005F17";
//             text.innerText = file.name + " [" + renameSize(file) + "Мб]"
//             img.src = event.target.result;
//         }

        
//         let xhr = new XMLHttpRequest();

//         button.addEventListener("change", function(){
//             var FileRead = new FileReader();


//             xhr.open('POST', 'https://isidea.ru/rgups_file.php', true);
        
//             xhr.upload.onprogress = function(e) {
//                 ProgresBar(e.loaded, button.files[0].size);
//             }

//             xhr.upload.onload = function() {
//                 FileRead.onload = function(event){
//                     showResult(event, FileName, Border, windowImg, button.files[0]);
//                 };
//                 FileRead.readAsDataURL(button.files[0]);
//             }
//             xhr.send(button.files[0]);
//         });

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