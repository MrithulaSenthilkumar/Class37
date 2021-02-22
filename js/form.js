class Form{
    constructor(){
      this.title= createElement("h2");
      this.input= createInput("Enter Your Name");
      this.button= createButton("play");
      this.greeting= createElement("h3");
    }


    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

display(){
  
   this.title.html ("Car Racing Game");
   this.title.position(480,50);

   this.input.position(450,160);
   this.button.position(490,200);

   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    player.name= this.input.value();
    player.index=playerCount;
 
    playerCount+=1;
    player.updateName(player.name);
    player.updateCount(playerCount);
   
    this.greeting.html("Hello welcome " + player.name);
    this.greeting.position(130,160);
})
    }
}