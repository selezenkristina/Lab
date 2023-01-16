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