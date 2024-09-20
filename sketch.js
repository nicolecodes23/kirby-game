/*

The Game Project Finals 

1.I created a platform inspired by the idea of slippery mossy stones. Since the general theme of this game occurs in the dessert, I have decided to bring in some green visual element make it more coherent. Not only that, I have decided to create vibrations each time the game character lands on it, so as to increase difficulty, further enhancing how “slippery” the platform is. One of the difficult parts was getting the game character to jump and collect collectables on the platform. This took awhile to figure out and I managed to solve it by using a combination of conditionals and boolean expressions when the game character is on the platform.

2.In accordance with the desert theme, I have implemented dinosaurs as enemies. Much consideration was put into this:  I decided to choose images with a more cartoon appearance as it fits the aesthetic of my game. The difficulty in using loadImage was to choose a picture that was accessible to the general public and did not offend the copyrights of certain artists. 

3.I used sounds to enhance users’ experience. For dinosaurs, I used munching sounds to create the illusion of bones being crushed.The difficulty in using sounds is due the constant loop of the game. Without using .play() and .stop() at certain regions, the sounds clashes and creates echoes. I have learnt to use boolean expressions for when sounds are played, and immediately setting it to false after it is played.

*/

var kirby_xPos;
var kirby_yPos;
var kirby_width;

var ground_yPos;

var toLeft;
var toRight;
var Descend;
var toPlunge;

var collectables; 
var canyons;

var cameraPosX;

var myTree; 
var myCloud;
var myHill;
var lava;

var game_score;
var flagpole;
var lives;

var platforms;
var onPlatform;

var enemies;
var emitter;

var flag_img;
var dino_img;

var coinSound;
var bgMusic;
var levelWin;
var overSound;
var jumpSound;
var crunchSound;
var trudgeSound;

var overSoundPlayed;
var trudgeSoundPlaying;

function preload()
{
    soundFormats("mp3","wav");
    
    /*sound credits mixkit https://mixkit.co/free-sound-effects/video-game/?page=4 */ 
    coinSound = loadSound("assets/coin.wav");
    
    /*sound credits freesound https://freesound.org/people/yummie/sounds/410574/ */
    bgMusic = loadSound("assets/backgroundmusic.mp3");
    
    /*sound credits pixabay level win https://pixabay.com/sound-effects/search/level%20win/ */
    levelWin = loadSound("assets/levelwin.mp3");
    
    /*sound credits freesound https://freesound.org/people/noirenex/sounds/159408/ */
    overSound = loadSound("assets/gameover.mp3");
    
    /*sound credits freesound https://freesound.org/people/OwlStorm/sounds/404793/ */
    jumpSound = loadSound("assets/jump.mp3");
    
    /* sound credits freesound https://freesound.org/people/theplax/sounds/608645/ */
    crunchSound = loadSound("assets/crunch.wav");
    
    /* sound credits mixkit https://mixkit.co/free-sound-effects/walk/ */
    trudgeSound = loadSound("assets/walking.wav");
    

    flag_img = loadImage('https://preview.redd.it/9yoe6djv4ulx.png?auto=webp&s=282bb1043cfecf664d71e87252d49cef07a0f807');
    
    /* picture credit https://similarpng.com/cartoon-dinosaur-was-standing-with-two-legs-on-transparent-background-png/ */
    let dinoPath ='dinosaur.png';
    dino_img = loadImage(dinoPath);
    
}

//instuctions for pre-game
function splash()
{
    drawSunset();
    
    textFont('Papyrus');
    stroke(255,0,0);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(50);
    text("~Kirby vs Jurassic World~", width/2, 80);
    textSize(30);
    text("HOW TO PLAY: ", 150,150);
    text("Control game character movement with arrow keys", width/2,200);
    text("*Avoid dinos at all cost*", width/2,250);
    text("*Watch out for slippery mossy platforms*", width/2,300);
    text("press ENTER to enter jurassic world",width/2,350);
    
}

//Initialisation of game
function startGame()
{
    setupScene();
    
    kirby_xPos = width/2;
	kirby_yPos = ground_yPos;
    kirby_width = 45;
    
    toLeft = false;
    toRight = false;
    Descend = false;
    toPlunge = false;
    onPlatform = false;
    overSoundPlayed = false;
    trudgeSoundPlaying = false;
    
    canyons = [{x_pos:200, y_pos:432, width:100},{x_pos:700, y_pos:432, width:100},{x_pos:1077, y_pos:432, width:100},{x_pos:1800, y_pos:432, width:100},{x_pos:2345,y_pos:432,width:100},{x_pos:2690,y_pos:432,width:100}];
    
    collectables = [{x_pos:100, y_pos:430, size:50, isFound:false},{x_pos:550, y_pos:310, size:50, isFound:false},{x_pos:975, y_pos:430, size:50, isFound:false},{x_pos:1320,y_pos:430,size:50,isFound:false},{x_pos:1660, y_pos:430, size:50, isFound:false},{x_pos:2100,y_pos:430, size:50, isFound:false},{x_pos:2500,y_pos:430, size:50, isFound:false},{x_pos:2700,y_pos:305, size:50, isFound:false},{x_pos:3100,y_pos:430, size:50, isFound:false}]
    
    platforms = [];
    platforms.push(createPlatforms(50,ground_yPos-100,115));
    platforms.push(createPlatforms(495,ground_yPos-80,115));
    platforms.push(createPlatforms(644,ground_yPos-130,115));
    platforms.push(createPlatforms(1090,ground_yPos-90,115));
    platforms.push(createPlatforms(1450,ground_yPos-80,115));
    platforms.push(createPlatforms(1610,ground_yPos-130,115));
    platforms.push(createPlatforms(2670,ground_yPos-90,115));

    enemies = [];
    enemies.push(new Enemy(-200,ground_yPos-60,90,280));
    enemies.push(new Enemy(300,ground_yPos-60,90,290));
    enemies.push(new Enemy(1160,ground_yPos-60,90,550));
    enemies.push(new Enemy(2845,ground_yPos-60,90,450));

    game_score = 0;  
    
    emitter = new Emitter(550,100,0,-1,10,color(128,0,0));
    emitter.startEmitter(1000,100);
    
    test = new Emitter
   
    flagpole = {isReached: false, x_pos: 3350};
    
}

function setup()
{
	createCanvas(1024, 576);
	ground_yPos = height * 3/4;
	
    game =
    {
        pre: true,
    }
    
    lives =3;
    startGame();
    
}

function draw()
{
    if(game.pre)
    {
        splash();
    }
    else 
    {
        drawGame();
    }
    
}

function drawGame()
{
    cameraPosX = kirby_xPos - width/2;
	///////////DRAWING CODE//////////
    
    //set background to sunset
    drawSunset();

    //drawing soil
    noStroke();
	fill(222,184,135);
	rect(0, ground_yPos, width, height-ground_yPos); 

    //drawing grass 
    fill (60,179,113);
    rect (0,ground_yPos,width,35);
    
    push ();
    translate (-cameraPosX,0);
    
    //drawing clouds
    drawClouds();

    //floating clouds
    floatClouds();
    
    //drawing mountains 
    drawMountains();
    
    //drawing lava
    drawLava();
    
    //drawing trees 
    drawTrees();
    
    //draw starting lava
    drawBlackHole();
    
    //drawing enemies
    drawEnemies();
    
    //multiple canyons
    for (var i=0; i<canyons.length; i++)
    {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
        noStroke();
    }
           
    //multiple collectablesa
    for (var i=0; i<collectables.length;i++)
    {
        if (!collectables[i].isFound)
        {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
        }
    }
    
    //drawing flagpole
    renderFlagpole();
    
	//draw the game character
	if(toLeft && Descend)
	{
        // add your jumping-left code
        drawKirbytoLeftANDdescend();
	}
	else if(toRight && Descend)
	{
        // add your jumping-right code    
        drawKirbytoRightANDdescend();
	}
	else if(toLeft)
	{
        // add your walking left code  
        drawKirbytoLeft();
	}
	else if(toRight)
	{
        //add your walking right code  
        drawKirbytoRight();

	}
	else if(Descend || toPlunge)
	{
        //add your jumping facing forwards code
        drawKirbyDescendORtoPlunge();
	}
	else
	{
        //add your standing front facing code
        drawKirbyFaceFront();
    }
    
    //drawing platforms
    drawMossyStones();
    
  
    pop();
    
    //draw health counter
    drawHealth();
                          
	///////////////INTERACTION CODE///////////////////
    
    //collectable interaction
    checkCollectable(collectables);
    
    //for character to plummet into left and right canyon
    checkCanyon(canyons);
    
    //lives interaction
    checkPlayerDead();
            
    //flagpole interaction
    if (flagpole.isReached ==false)
    {
    checkFlagpole();
    }
    
    //moving left 
    if (toLeft == true)
    {
        kirby_xPos -=5;
    }
    
    //moving right
    else if (toRight == true)
    {
        kirby_xPos +=5;
    }
    
    // descending after jumping 
    if (kirby_yPos <ground_yPos)
    {
        Descend = true;
        var touch = false;
        onPlatform = false;
        for (var i=0; i< platforms.length; i++)
        {
            if(platforms[i].checkContact(kirby_xPos,kirby_yPos) && keyCode == 38)
            {
                Descend = false;
                touch = true;
                onPlatform = true;
                break;      
            }
        }
        
        if(touch == false)
        {
            kirby_yPos+=5;
            Descend = true;
        }
    }
    else 
    {
        Descend = false;
    }
    
    //game score counter
    fill(255);
    noStroke();
    textSize(25);
    textFont('Papyrus');
    text("score: " + game_score,45,35);
                
    //win or lose game 
    if (lives <1)
    {
        fill(255)
        textAlign(CENTER,CENTER);
        textSize(50);
        textFont('Papyrus');
        text("Game Over!",width/2,height/2);
        text("Press spacebar to continue.", width/2,(height+110)/2)
        bgMusic.stop();
        toLeft = false;
        toRight=false;
        trudgeSound.stop();
        
        if(!overSoundPlayed){
            overSound.play(0,0.7,0.6,false);
            overSoundPlayed=true;
        }
        
        return;
    }
    
    //flagpole interaction
    if (flagpole.isReached)
    {
        fill(255);
        noStroke();
        textAlign(CENTER,CENTER);
        textSize(50);
        textFont('Papyrus');
        text ("Level Complete!", width/2,height/2);
        text("Time to celebrate!", width/2,(height+120)/2)
        bgMusic.stop();
        trudgeSound.stop();
        
        toLeft= false;
        toRight = false;

        return;
    }
    
}

function keyPressed ()
    {
	// if statements to control the animation of the character when
	// keys are pressed.
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
   
    if(keyCode == 13)
    {
        console.log("enter");
        if(game.pre)
        {
            game.pre = false;
            bgMusic.play(0,1,0.5,true);
        }
    }
        
    if (keyCode == 37)
    {
        console.log("left arrow");
        toLeft = true;
        if(!trudgeSoundPlaying)
        {
            trudgeSound.play(0,0.7,0.6,true);
        }

    }
    
    else if (keyCode == 39)
    {
        console.log("right arrow");
        toRight = true;
        if(!trudgeSoundPlaying)
        {
            trudgeSound.play(0,0.7,0.6,true);
        }
    }
    else if (keyCode ==38)
    {
        if(kirby_yPos=ground_yPos || onPlatform )
        {
            console.log("up arrow");
            kirby_yPos -=130;
            jumpSound.play(0,1,0.4,false);

        }  
    }
        
    if (keyCode == 32 && lives <1)
    {
        console.log("spacebar to restart game");
        
        setup();
        startGame();
    }
                            
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if (keyCode == 37)
    {
        console.log("left arrow");
        toLeft = false;
        if(kirby_yPos >= ground_yPos)
        {
            trudgeSound.stop();
        }
    }
    
    else if (keyCode == 39)
    {
        console.log("right arrow");
        toRight = false;
        if(kirby_yPos >= ground_yPos)
        {
            trudgeSound.stop();
        }
    }
    
    
}

function drawMossyStones()
{
    for (var i=0; i<platforms.length; i++)
    {
        platforms[i].draw();
    }
    
}

function drawBlackHole()
{
    var d = dist(kirby_xPos,ground_yPos,emitter.pos.x,emitter.pos.y);
    if (d<width)
    {
        emitter.drawAndUpdateParticles();
    }    
    
}

function drawCollectable(t_collectable)
{

    if (t_collectable .isFound == false)
    {  
    stroke(255,170,51);
    strokeWeight(3);
    fill (255,215,0);
    ellipse (t_collectable .x_pos,t_collectable .y_pos+5,t_collectable .size,t_collectable .size);
    stroke (0);
    beginShape();
    vertex (t_collectable .x_pos+10,t_collectable .y_pos-10);
    vertex (t_collectable .x_pos,t_collectable .y_pos-5);
    vertex (t_collectable .x_pos-10,t_collectable .y_pos);
    vertex (t_collectable .x_pos,t_collectable .y_pos+5);
    vertex (t_collectable .x_pos+10,t_collectable .y_pos+10);
    vertex (t_collectable .x_pos,t_collectable .y_pos+15);
    vertex (t_collectable .x_pos-10,t_collectable .y_pos+20);
    endShape();
    line (t_collectable .x_pos,t_collectable .y_pos-10,t_collectable .x_pos,t_collectable .y_pos+21);
    noStroke();
        
    //anchor point for collectable token 
    //fill (255,0,0);
    //ellipse (t_collectable .x_pos,t_collectable .y_pos,10,10);
    }   
}

function drawCanyon(t_canyons)
{
    //canyon hole 
    fill (100,149,237);
    rect (t_canyons.x_pos+40,t_canyons.y_pos,t_canyons.width+10,145);

    //left side canyon
    stroke(255,69,0);
    fill (139,0,0);
    rect (t_canyons.x_pos-4,t_canyons.y_pos,t_canyons.width-50,30,50);
    rect (t_canyons.x_pos-20,t_canyons.y_pos+30,t_canyons.width-30,50,60);        
    rect (t_canyons.x_pos-31,t_canyons.y_pos+70,t_canyons.width-15,45,60);        
    rect (t_canyons.x_pos-40,t_canyons.y_pos+108,t_canyons.width,35,40)
    
    //right side canyon
    stroke(255,69,0);
    fill (139,0,0);
    rect (t_canyons.x_pos+119,t_canyons.y_pos,t_canyons.width-50,30,50);
    rect (t_canyons.x_pos+117,t_canyons.y_pos+30,t_canyons.width-30,50,60);        
    rect (t_canyons.x_pos+117,t_canyons.y_pos+70,t_canyons.width-15,45,60);        
    rect (t_canyons.x_pos+116,t_canyons.y_pos+108,t_canyons.width,35,40);
    
    //anchor point for canyons 
    //fill (255,0,0);
    //ellipse (canyons.x_pos,canyons.y_pos,10,10);
    //ellipse (t_canyons.x_pos,t_canyons.y_pos,10,10)        
}

function checkCollectable(t_collectable)
{
    if (dist(kirby_xPos,kirby_yPos,t_collectable .x_pos,t_collectable .y_pos )< 20) 
    {
        console.log(dist(kirby_xPos,kirby_yPos,t_collectable .x_pos,t_collectable .y_pos))
        t_collectable .isFound = true;  
        game_score +=1;
        coinSound.play(0,1,0.2,false);
    }  
}

function checkCanyon(t_canyons)
{
    //left canyon interaction 
    if ((kirby_xPos + kirby_width/2) > t_canyons.x_pos+80 &&
    ((kirby_xPos + kirby_width/2 ) < (t_canyons.x_pos +t_canyons.width+40)) && kirby_yPos >= ground_yPos)
    {
        toPlunge = true;
        toLeft = false;
        toRight = false;
        kirby_yPos +=9; 
        
        
    //right canyon interaction
    if ((kirby_xPos-kirby_width/2)>canyons.x_pos +100 && 
    ((kirby_xPos-kirby_width/2) < (canyons.x_pos + canyons.width+ 100))
    && kirby_yPos >=ground_yPos)
    {
        toPlunge = true;
        toLeft = false;
        toRight = false;
        kirby_yPos +=9;

    }
        
        toPlunge = false;

    }
}

function renderFlagpole()
{
    push();
    stroke(192,192,192);
    strokeWeight(10);
    line(flagpole.x_pos,ground_yPos,flagpole.x_pos,ground_yPos-250);
    
    noStroke();
    var rectWidth = 100;
    var rectHeight= 50;
    
    if (flagpole.isReached)
    {
    image(flag_img,flagpole.x_pos,ground_yPos-250,rectWidth,rectHeight);
    }
    else 
    {
    image(flag_img,flagpole.x_pos,ground_yPos-50,rectWidth,rectHeight); 
    };
  
    pop();
    /*photo credits: https://reddit.com/r/JurassicPark/comments/530oas/i_made_a_jurassic_park_flag/ */  
}

function checkFlagpole()
{
    var d = abs (kirby_xPos - flagpole.x_pos);
    
    if (d<10)
    {
        flagpole.isReached =true;
        levelWin.play(0,1,0.5,false);

    }
}

function checkPlayerDead()
{
   if (kirby_yPos >height)
    {
        toPlunge = true;
        lives--;
        if (lives >0)
        {
            startGame();
        }
    
        
    }
}

function Enemy(x,y,size,range)
{
    this.x = x;
    this.y = y;
    this.size = size;
    this.range = range;
    
    this.currentX= x;
    this.inc = 1;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
        {
            this.inc = -1;
        }
        else if(this.currentX < this.x)
        {
           this.inc = 1; 
        }
    }
    
    this.draw = function ()
    {
        this.update();
        image(dino_img,this.currentX,this.y,this.size, this.size);
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var dx = abs(gc_x - this.currentX);  
        if (this.size <100 && dx <25 && gc_y == this.y+60 )
        {
            
            return true;
        }
              
        return false;
    
    }
    
}

 function drawEnemies()
{
    //drawing enemies
    for (var i=0; i<enemies.length; i++)
    {
        enemies[i].draw();
        
        var isBitten = enemies[i].checkContact(kirby_xPos,kirby_yPos); 
        if (isBitten)
        {
            crunchSound.play(0,0.5,0.6,false);
            
            if(lives >0)
            {
                startGame();
                lives --;
                break;
            }
            if (lives <1)
            {
                crunchSound.stop();
            }
        }
        
    }
}

function createPlatforms(x,y,length)
{
    var shaking = false;
    var shakeAmount = 8;
    var p = 
    {
        x:x,
        y:y,
        length:length,
        draw : function()
        {

            //stones 
            let stoneGap =18;
            stroke(64,64,64);
            strokeWeight(3);
            fill(96,96,96);
            for(var i=0; i<7; i++)
            {
                quad(this.x+ stoneGap*i, this.y, this.x-15+ stoneGap*i, this.y+19, this.x+2+ stoneGap*i, this.y+29, this.x+11+ stoneGap*i, this.y+17);
            }
            
            //grass top 
            stroke(51,102,0);
            strokeWeight(15);
            line(this.x-7,this.y+4,this.x+this.length, this.y+4);
            noStroke();
        
            //kirby lands on shaky platform to create more challenge
            if(shaking)
            {
                this.x = this.x +random(-shakeAmount,shakeAmount);
            }
            
            shaking = false;
        }, 
        
        checkContact: function(gc_x, gc_y)
        {
            if (gc_x > this.x && gc_x < this.x + this.length + this.length-28 )
            {
                var d = this.y - gc_y;
                if (d>=0 && d <4)
                {
                    shaking = true;
                    return true; 
                }
        
            }   
            return false;
        }
    }

    return p;
}

function drawHealth()
{
    var heartX = width-40
    var heartGap = -40
    for (var i=0; i<lives; i++)
    {
    stroke(0);
    strokeWeight(3);
    fill(255,0,0);
    
    beginShape()
    vertex(heartX+i*heartGap,25);
    bezierVertex(heartX+i*heartGap,5,heartX-30+i*heartGap,10,heartX+i*heartGap,40);
    bezierVertex(heartX-10+i*heartGap,5,heartX+30+i*heartGap,0,heartX+i*heartGap,40);
    endShape();
    }

}