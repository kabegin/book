// This is a JavaScript file
var game=null;
var char1=null;


enchant();
window.onload=function(){
var game=new Game(window.innerWidth/2,window.innerHeight/2);
game.preload('img/chara1.png');
game.fps=10;
game.onload=function(){
    var label=new Label('Hello!');
    label.color='blue';
    label.font='italic 48pt Times';
    label.width=500;
    label.moveTo(10,50);
    game.rootScene.addChild(label);
    
    var char1=new Sprite(32,32);
    char1.image=game.assets['img/chara1.png'];
    char1.frame=[0,1,0,2];
    char1.x=50;
    char1.y=50;
    
    game.rootScene.backgroundColor='#eeeeff';
    game.rootScene.addChild(char1);
 
    game.rootScene.addEventListener(Event.TOUCH_START,function(event){
     
      char1.tl.clear();
    　char1.tl.moveTo(event.x,event.y, 20);
    
    });
};  

game.start();
};