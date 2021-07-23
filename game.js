class Game{
    constructor(){

    }
    getState(){
        var a=database.ref('gamestate')
        a.on("value",function(t){gameState=t.val()})
    }
    update(k){database.ref('/').update({gamestate:k})}
    Start(){
        if(gameState===0){
            form=new Form()
            form.display()
        }
    }
}