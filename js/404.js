var canvas = document.getElementById("404canvas"),
    ctx = canvas.getContext("2d"),
    FPS = 30;
    
canvas.width = 880;
canvas.height = 600;


function pxlBlk(x, y){
    ctx.fillStyle = "white";
    ctx.fillRect(x,y, 10,10);
}


var player = {
    x: 440,
    y: 500,
    vx: 0,
    draw: function(){
        //Cannons
        pxlBlk(this.x + 10,this.y);
        pxlBlk(this.x + 30,this.y);
        //Body
        pxlBlk(this.x,this.y + 10);
        pxlBlk(this.x + 10,this.y + 10);
        pxlBlk(this.x + 20,this.y + 10);
        pxlBlk(this.x + 30,this.y + 10);
        pxlBlk(this.x + 40,this.y + 10);
        pxlBlk(this.x,this.y + 20);
        pxlBlk(this.x + 10,this.y + 20);
        pxlBlk(this.x + 20,this.y + 20);
        pxlBlk(this.x + 30,this.y + 20);
        pxlBlk(this.x + 40,this.y + 20);
        pxlBlk(this.x,this.y + 30);
        pxlBlk(this.x + 10,this.y + 30);
        pxlBlk(this.x + 20,this.y + 30);
        pxlBlk(this.x + 30,this.y + 30);
        pxlBlk(this.x + 40,this.y + 30);
        pxlBlk(this.x,this.y + 40);
        pxlBlk(this.x + 10,this.y + 40);
        pxlBlk(this.x + 20,this.y + 40);
        pxlBlk(this.x + 30,this.y + 40);
        pxlBlk(this.x + 40,this.y + 40);
        pxlBlk(this.x,this.y + 50);
        pxlBlk(this.x + 10,this.y + 50);
        pxlBlk(this.x + 20,this.y + 50);
        pxlBlk(this.x + 30,this.y + 50);
        pxlBlk(this.x + 40,this.y + 50);
        pxlBlk(this.x,this.y + 60);
        pxlBlk(this.x + 10,this.y + 60);
        pxlBlk(this.x + 20,this.y + 60);
        pxlBlk(this.x + 30,this.y + 60);
        pxlBlk(this.x + 40,this.y + 60);
        pxlBlk(this.x,this.y + 70);
        pxlBlk(this.x + 10,this.y + 70);
        pxlBlk(this.x + 20,this.y + 70);
        pxlBlk(this.x + 30,this.y + 70);
        pxlBlk(this.x + 40,this.y + 70);
        //Wings
        /*Left*/
        pxlBlk(this.x - 30,this.y + 50);
        pxlBlk(this.x - 30,this.y + 60);
        pxlBlk(this.x - 30,this.y + 70);
        pxlBlk(this.x - 20,this.y + 60);
        pxlBlk(this.x - 20,this.y + 70);
        pxlBlk(this.x - 10,this.y + 60);
        pxlBlk(this.x - 10,this.y + 70);
        /*Right*/
        pxlBlk(this.x + 40 + 30,this.y + 50);
        pxlBlk(this.x + 40 + 30,this.y + 60);
        pxlBlk(this.x + 40 + 30,this.y + 70);
        pxlBlk(this.x + 40 + 20,this.y + 60);
        pxlBlk(this.x + 40 + 20,this.y + 70);
        pxlBlk(this.x + 40 + 10,this.y + 60);
        pxlBlk(this.x + 40 + 10,this.y + 70);
    },
    update: function(){
        this.x += this.vx / FPS;
    }
}

var bullet = {
    x: player.x + 25,
    y: player.y + 10,
    vy: 500,
    fire: function(){
        pxlBlk(this.x, this.y);
    },
    shoot: function(){
        this.y -= this.vy / FPS;
    },
    updateX: function(){
        this.x = player.x + 25;
    }
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    player.draw();
}

window.onkeydown = function( e ){
    e = e || window.event;
    
    code = e.keycode || e.which;
    
    if(code == 37){
        player.vx = -500;
    }
    if(code == 39){
        player.vx = 500;
    }
    if(code == 32){
        bullet.fire();
    }
}

window.onkeyup = function( e ){
    e = e || window.event;
    
    code = e.keycode || e.which;
    
    if(code == 37){
        player.vx = 0;
    }
    if(code == 39){
        player.vx = 0;
    }
}

function update(){
    player.update();
    bullet.shoot();
    bullet.updateX();
}

function tick(){
    draw();
    update();
}

setInterval(tick,1000/FPS)
