const app = {
    baseUrl: "https://picsum.photos/v2",
    getPictures: async function (){
        const resp = await fetch(`${this.baseUrl}/list`);
        const data = await resp.json();
        if(resp.status != 200)
        throw Error(`Message: ${data.message}`);
        this.renderPictures(data);
    },
    renderPictures: function(data) {
        for (let item of data) {
            console.log(item);        
        }    
    }
};
(async function (){
    try{
        await app.getPictures();
        }catch(e){
            console.log(e);
        }
})()