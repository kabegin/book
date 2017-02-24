var game_flg=true;
var game=null;
var player=null;
var effect=null;
var score=null;
var score_point=0;
var bg_image=null;
var splite_size=200;
var horizon=200;
var play_time=70000;
var move_point=0;
var move_dx=10;
var interval_time=10000;
var enemy_data=[];
var item_data=[];

var walk={
    'stop':[0,0,1,1],
    'right':[2,2,3,3],
    'left':[4,4,5,5]
};
var enemy_img=[
    'img/enemyA.png',
    'img/enemyB.png',
    'img/enemyC.png'
];
var touch_flg=false;
var touch_dx=0;

enchant();

function startNow(){
    var div =document.getElementById('msg');
    document.body.removeChild(div);
    
    game=new Game(1280,720);
    game.preload('img/background.png');
    game.preload('img/character.png');
    game.preload('img/enemyA.png');
    game.preload('img/enemyB.png');
    game.preload('img/enemyC.png');
    game.preload('img/item.png');
    game.preload('img/ef_itemGet.png');
    game.fps=10;
    
    game.onload=function(){
        bg_image=new Sprite(1280,720);
        bg_image.image=game.assets['img/background.png'];
        bg_image.moveTo(0,0);
        game.rootScene.addChild(bg_image);
        
        
    }
}




