class Player{
    constructor(){
        this.index = null
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        database.ref('PlayerCount').on("value",function(data){
            PlayerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount : count
        });
    } 

    update(){//updating name and dist of each player in the DB
        var playerIndex = "players/Player"+ this.index;
        database.ref(playerIndex).set({
            Name : this.name, 
            Distance : this.distance
        });
    }
    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers = data.val(); //allPlayers = [player1,player2,player3,player4]
            //player1 = {Name: Rebecca,distance:0}
            //allPlayers[0].Name
        
        });
    }
}