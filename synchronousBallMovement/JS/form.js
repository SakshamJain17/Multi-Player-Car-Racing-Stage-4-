class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Your Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }
    display(){
        this.title.html("Multiplayer Car Racing Game")
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth/2-70,displayWidth/4);
        }); 
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}