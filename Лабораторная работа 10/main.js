let YesIcon = "./Photo/Checkmark.png";
let NoIcon = "./Photo/cross.png";
let input = document.querySelectorAll("input");
let inputs = document.querySelectorAll("input[required]");
let blockCrash = document.querySelectorAll("label div");
let firstbool = firstbool1 = dop1=dop2 = second = last = false;
for(let inp of inputs){
    for(let crash of blockCrash){
        inp.addEventListener("keyup" , function(){
            if(inp.id == "logName"){
                if(crash.className == "LoginCrash"){                                       
                    if(inp.value.length <= 150){
                        crash.children[1].classList.add("yes")
                        crash.children[1].firstChild.src = YesIcon;
                        firstbool = true;
                    }else{
                        crash.children[1].classList.remove("yes")
                        crash.children[1].firstChild.src = NoIcon;
                        firstbool = false;
                    }
                    if(inp.value.match(/[a-zA-Z@+-_]+/)){
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                        firstbool1 = true;
                    }else{
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                        firstbool1 = false;
                    }

                    if(firstbool == firstbool1 == true){
                        firstbool = true;
                    }else{
                        firstbool = false;
                    }
                }
            }
    
            if(inp.id == "FirstPassword"){
                if(crash.className == "PasswordCrash"){
                    if(inp.value.length >= 8){
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                        second=true;
                    }else{
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                        second=false;
                    }
                    if(inp.value.match(/^([a-zA-Zа-яёА-ЯЁ])+$/)){
                        crash.children[1].classList.add("yes")
                        crash.children[1].firstChild.src = YesIcon;
                        dop1 = true;
                    }else{
                        crash.children[1].classList.remove("yes")
                        crash.children[1].firstChild.src = NoIcon;
                        dop1 = false;
                    }
                    if(inp.value != inputs[0].value){
                        crash.children[2].classList.add("yes")
                        crash.children[2].firstChild.src = YesIcon;
                        dop2=true;
                    }else{
                        crash.children[2].classList.remove("yes")
                        crash.children[2].firstChild.src = NoIcon;
                        dop2=false;
                    }

                    if(second == dop1 == dop2 == true){
                        second = true;
                    }else{
                        second = false;
                    }
                }
            }    
            if(inp.id == "LastPassword"){
                if(crash.className == "PasswordTooCrash"){
                    if(inp.value == inputs[1].value){
                        inp.classList.add("yes");
                        crash.children[0].classList.add("yes")
                        crash.children[0].firstChild.src = YesIcon;
                        last=true;
                    }else{
                        inp.classList.remove("yes");
                        crash.children[0].classList.remove("yes")
                        crash.children[0].firstChild.src = NoIcon;
                        last = false;
                    }
                }
            }
        });
    }
};

let checkbox = document.querySelector("input[type=checkbox]");
let submitButton = document.querySelector("button[type=submit]");
let valid =false;
if(checkbox.checked === true){
    submitButton.disabled = false;
}else{
    submitButton.disabled = true;
}



checkbox.addEventListener("click", function(){
    if(checkbox.checked === true ){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }
});




submitButton.addEventListener("click",function(e){
    if(firstbool==second==last==true){
        valid = true;
    }else{
        valid = false;
    }

    console.log(valid);
    e.preventDefault();
    if(valid==true){
        let preregistation = {
            Name: input[0].value,
            Surname: input[1].value,
            LogName: input[2].value,
            Mail: input[3].value,
            FirstPassword: input[4].value
        };
        localStorage.setItem("preregistation", JSON.stringify(preregistation));
    }
    
});

window.addEventListener("load", function(){
    let preregistation = JSON.parse(localStorage.getItem("preregistation"));
    if (preregistation) {
        input[0].value = preregistation.Name;
        input[1].value = preregistation.Surname;
        input[2].value = preregistation.LogName;
        input[3].value = preregistation.Mail;
        input[4].value = preregistation.FirstPassword;
    }
});