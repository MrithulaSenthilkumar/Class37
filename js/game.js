class Game {
    constructor(){
    }

    // three functions  
    // 1>  getState = we are going to ref the data from real time database created by us.
    // 2> update = we are going update ganestate  0, 1, 2
    
    // 3>  start function means how the gamestate 0 works

    //   0 = start    1= play     2= end 

 getState(){
     var gameStateRef= database.ref("gameState");
     gameStateRef.on("value", function(data){
         gameState= data.val();
     })
 }


 update(state){
   database.ref("/").update({
     gameState: state
   })
 }


 start(){
     if(gameState===0){
        player= new Player();
        player.getCount();
        form= new Form ();
        form.display();
     }
 }

 play(){
    form.hide();  
     textSize(30);
     text("Game Start", 120,100);
     Player.getplayerInfo();
     
    

     if(allplayers!==  undefined){
      var displayposition=130;
      for(var i in allplayers){
        if(i ==="player"+ player.index){
           fill("red");
        }
        else{
          fill("blue")
        }
        displayposition+=20;
        textSize(15);
        text (allplayers[i].name + ": "+ allplayers[i].distance,120,displayposition) 
 
      }
 
     }

     
     if(keyIsDown(UP_ARROW)&& player.index !==null){
       player.distance+=20;
        player.update();

    }
 }



}