let Inputbyphone = document.querySelectorAll("input[rel=phone]");

function MaskForPhone(){
    for(let i = 0; i<Inputbyphone.length; i++){
        Inputbyphone[i].setAttribute("maxlength","18");
        Inputbyphone[i].oninput = function(){
            let inputValue = Inputbyphone[i].value.replace(/[\D]/g, "");

            Inputbyphone[i].value = "+";    
            if(inputValue.substr(0,1) != 7 || inputValue.substr(0,1) == 8){
                Inputbyphone[i].value += "7";
            }    
            else{
                Inputbyphone[i].value += inputValue.substr(0,1);
            }
            if(inputValue.length > 1){
                Inputbyphone[i].value += " ("+inputValue.substr(1,3);
            }    
            if(inputValue.length > 4){
                Inputbyphone[i].value += ") " + inputValue.substr(4,3);
            }    
            if(inputValue.length > 7){
                Inputbyphone[i].value += "-" + inputValue.substr(7,2);
            }    
            if(inputValue.length > 9){
                Inputbyphone[i].value += "-" + inputValue.substr(9,2);
            }
        }
    }
};

MaskForPhone();