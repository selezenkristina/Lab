new Vue({
    el: "#application",
    data: {
        PersonalData: "Пусто",
        NickName: "Пусто",
        Signer: 0,
        Tracking: 0,
        Composition: 0,
        OptSelect: "def",
        infoData: data,
        infoAvtor: AvtorsData
    } ,
    computed:{
        FilterPostBySelectAvtor: function(){
            let i = this.infoData.filter(iData=>{
                if(this.OptSelect === ''|| this.OptSelect === "def"){
                    console.log("все норм");
                    this.PersonalData = "Автор не выбран";
                    this.NickName = "пусто";
                    this.Signer=0;
                    this.Tracking=0;
                    this.Composition=this.infoData.length;
                    return true;
                }else{
                    if(this.OptSelect === iData.maker){
                        for(let avtors of this.infoAvtor){
                            if(iData.maker == avtors.Login){
                                this.PersonalData = avtors.Name;
                                this.NickName = avtors.Login;
                                this.Signer = avtors.Subscribers;
                                this.Tracking = avtors.Subscrib;
                                this.Composition = avtors.Notation;
                            }
                        }
                        return this.OptSelect === iData.maker;
                    }
            }
            });
            return i;
        }
    }
});