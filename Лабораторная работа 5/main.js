let YesIcon = "./Photo/Checkmark.png";
let NoIcon = "./Photo/cross.png";

let inputs = document.querySelectorAll("input[required]");
let blockCrash = document.querySelectorAll("label div");

for(let inp of inputs){
    for(let crash of blockCrash){
        inp.addEventListener("keyup" , function(){
            if(inp.id == "logName"){
                if(crash.className == "LoginCrash"){
                    if(inp.value.length <= 150){
                        crash.children[1].classList.add("yes")
                        crash.children[1].firstChild.src = YesIcon;
                    }else{
                        crash.children[1].classList.remove("yes")
                        crash.children[1].firstChild.src = NoIcon;
                    }
                    if(inp.value.match(/[a-zA-Z@+-_]+/)){
                        console.log(crash.children[0]);
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                    }else{
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                    }
                }
            }
    
            if(inp.id == "FirstPassword"){
                if(crash.className == "PasswordCrash"){
                    if(inp.value.length >= 8){
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                    }else{
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                    }
                    if(inp.value.match(/^([a-zA-Zа-яёА-ЯЁ])+$/)){
                        console.log(crash.children[0]);
                        crash.children[1].classList.add("yes")
                        crash.children[1].firstChild.src = YesIcon;
                    }else{
                        crash.children[1].classList.remove("yes")
                        crash.children[1].firstChild.src = NoIcon;
                    }
                    if(inp.value != inputs[0].value){
                        crash.children[2].classList.add("yes")
                        crash.children[2].firstChild.src = YesIcon;
                    }else{
                        crash.children[2].classList.remove("yes")
                        crash.children[2].firstChild.src = NoIcon;
                    }
                }
            }      
            if(inp.id == "LastPassword"){
                if(crash.className == "PasswordTooCrash"){
                    if(inp.value == inputs[1].value){
                        inp.classList.add("yes");
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                    }else{
                        inp.classList.remove("yes");
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                    }
                }
            }
        });
    }
};

let checkbox = document.querySelector("input[type=checkbox]");
let submitButton = document.querySelector("button[type=submit]");

if(checkbox.checked === true){
    submitButton.disabled = false;
}else{
    submitButton.disabled = true;
}

checkbox.addEventListener("click", function(){
    if(checkbox.checked === true){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }
});

