var canvas = new fabric.Canvas('myCanvas');
player_x=20;
player_y=20;
block_width=40;
block_height=40;
var player_me="";
var block_nonliving="";
function playerupdate(){

    fabric.Image.fromURL("player.png",function(Img){
        player_me=Img;
    player_me.scaleToWidth(150);
    player_me.scaleToHeight(140);
    player_me.set({top:player_y,left:player_x});
    canvas.add(player_me);
    });
    
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        player_me=Img;
        block_nonliving.scaleToWidth(150);
        block_nonliving.scaleToHeight(140);
        block_nonliving.set({top:player_y,left:player_x});
    canvas.add(block_nonliving);
    });
    
}