class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    witch1 = createSprite(100,200);
    witch1.addImage("witch1",witch1Image);
    witch1.scale=0.4;
    witch2 = createSprite(300,200);
    witch2.addImage("witch2",witch2Image);
    witch2.scale=0.4;
    witch3 = createSprite(500,200);
    witch3.addImage("witch3",witch3Image);
    witch3.scale=0.4;
    witch4 = createSprite(700,200);
    witch4.addImage("witch4",witch4Image);
    witch4.scale=0.4;
    witches = [witch1, witch2, witch3, witch4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
      background(ground);
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

      var index = 0;
   
      var x = 175;
      var y;

      for(var plr in allPlayers){
        
        index = index + 1 ;

      
        x = x + 200;
        
        y = displayHeight - allPlayers[plr].distance;
        witches[index-1].x = x;
        witches[index-1].y = y;

        if (index === player.index){
         witches[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = witches[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>3800){

 gameState=2;
    }

    drawSprites();
  }
  end(){
    console.log("gameEnded");
  }
}
