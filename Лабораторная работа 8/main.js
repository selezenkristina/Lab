new Vue({
    el: "#application",
    data: {
        infoData: [],
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.infoData = respose.data)
    } 
});