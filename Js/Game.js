class Game{
    constructor(){

    } 

    getState(){
        database.ref("Gamestate").on("value",function(data){
            Gamestate = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            Gamestate : state
        }) 
    }

    start(){
        if(Gamestate === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(32);
        text("Start the game", 120,100);
        Player.getPlayerInfo();//all player info is now stored in allPlayers variable
        if(allPlayers !== undefined){
            var ypos = 130;
            for(var plr in allPlayers){ //for - in loop
                if(plr==="player"+player.index)
                    fill("red");
                
                else
                    fill("black");
                
                ypos +=20;
            //Rebecca :  0
            textSize(15);
            text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,ypos);
                
            }
           
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

    }
}

