var myTree; 
var myCloud;
var myHill;
var lava;

function setupScene()
{
    myTree = [{x_pos:110, y_pos:height/2},{x_pos:400,y_pos:height/2},{x_pos:900,y_pos:height/2},{x_pos:1250,y_pos:height/2},{x_pos:1600, y_pos:height/2},{x_pos:1740, y_pos:height/2},{x_pos:2200, y_pos:height/2},{x_pos:2550, y_pos:height/2}];
    
    myCloud= [{x_pos:10,y_pos:70},{x_pos:378,y_pos:70},{x_pos:766,y_pos:70},{x_pos:1100,y_pos:70},{x_pos:1700,y_pos:70}];

    myHill= [{x_pos:-360,y_pos:396},{x_pos:210,y_pos:396},{x_pos:1150,y_pos:396},{x_pos:1800,y_pos:396},{x_pos:2567,y_pos:396}];
    
    lava = [{x_pos:-60,y_pos:100,width:30},{x_pos:510,y_pos:100,width:30},{x_pos:1450,y_pos:100,width:30},{x_pos:2100,y_pos:100,width:30},{x_pos:2867,y_pos:100,width:30}];
    
}

function drawSunset()
{
    let color1 = color ("darkblue");
    let color2 = color ("orange");
    
    //mixing color1 and color2 
    for(var i=0; i<ground_yPos; i++)
    {
        let yMap = map(i,0,ground_yPos,0,1); 
        let newColor = lerpColor(color1,color2,yMap);
        stroke(newColor);
        line(0,i,width,i);
    }
}

function drawClouds()
{
    for (i=0; i<myCloud.length; i++)
    {
    noStroke();
    fill(255);
    ellipse(myCloud[i].x_pos-66, myCloud[i].y_pos+8, 68, 44)
    ellipse(myCloud[i].x_pos+6, myCloud[i].y_pos-6, 118, 93)
    ellipse(myCloud[i].x_pos+76, myCloud[i].y_pos-6, 118, 107)
    ellipse(myCloud[i].x_pos+146, myCloud[i].y_pos+5, 78, 62)
    ellipse(myCloud[i].x_pos+194, myCloud[i].y_pos+8, 61, 28)
    ellipse(myCloud[i].x_pos+232, myCloud[i].y_pos+12, 44, 20) 
        
    //anchor point for clouds 
    //fill(255,0,0);
    //ellipse (myCloud[i].x_pos,myCloud[i].y_pos,10,10);      
    }   
}

function floatClouds()
{
    //This is code written by myself// 
    //animation for continous floating clouds near the game character
    for (var i=0; i<myCloud.length; i++)
    {
        myCloud[i].x_pos += 2  
    
    if (myCloud[i].x_pos > kirby_xPos+500)
    {
        myCloud[i].x_pos =myCloud[i].x_pos * -1;  
    }
    }  
}

function drawMountains()
{
    for (i=0; i< myHill.length; i++)
    {
    //tallest mountain
    fill (188,143,143);
    triangle (myHill[i].x_pos+190,myHill[i].y_pos+40,myHill[i].x_pos+340,myHill[i].y_pos-300,myHill[i].x_pos+480,myHill[i].y_pos+40);
    
    //two short mountains
    fill(160,82,45);
    triangle (myHill[i].x_pos+150,myHill[i].y_pos+40,myHill[i].x_pos+210,myHill[i].y_pos-100,myHill[i].x_pos+270,myHill[i].y_pos+40);
    triangle (myHill[i].x_pos+320,myHill[i].y_pos+40,myHill[i].x_pos+390,myHill[i].y_pos-70,myHill[i].x_pos+475,myHill[i].y_pos+40);
        
    //anchor point for mountains 
    //fill(255,0,0);
    //ellipse(myHill[i].x_pos,myHill[i].y_pos,10,10);
    }   
}

function drawLava()
{
  for (i=0; i<lava.length; i++)
    {
    fill (255,140,0);
    ellipse (lava[i].x_pos+30,lava[i].y_pos+20,lava[i].width-5,lava[i].width);
    ellipse (lava[i].x_pos+50,lava[i].y_pos+20,lava[i].width-5,lava[i].width);
    fill (255,69,0);
    ellipse (lava[i].x_pos+40,lava[i].y_pos+15,lava[i].width-10,lava[i].width-2);    
    fill(255,0,0);
    beginShape();
    vertex (lava[i].x_pos+30,lava[i].y_pos+25);
    vertex (lava[i].x_pos+20,lava[i].y_pos+35);
    vertex (lava[i].x_pos+30,lava[i].y_pos+45);
    vertex (lava[i].x_pos+20,lava[i].y_pos+55);
    vertex (lava[i].x_pos+30,lava[i].y_pos+65);
    vertex (lava[i].x_pos+20,lava[i].y_pos+75);
    vertex (lava[i].x_pos+30,lava[i].y_pos+85);
    vertex (lava[i].x_pos+20,lava[i].y_pos+95);
    vertex (lava[i].x_pos+30,lava[i].y_pos+105);
    vertex (lava[i].x_pos+50,lava[i].y_pos+105);
    vertex (lava[i].x_pos+60,lava[i].y_pos+95);
    vertex (lava[i].x_pos+50,lava[i].y_pos+85);
    vertex (lava[i].x_pos+60,lava[i].y_pos+75);
    vertex (lava[i].x_pos+50,lava[i].y_pos+65);
    vertex (lava[i].x_pos+60,lava[i].y_pos+55);
    vertex (lava[i].x_pos+50,lava[i].y_pos+45);
    vertex (lava[i].x_pos+60,lava[i].y_pos+35);
    vertex (lava[i].x_pos+50,lava[i].y_pos+25);
    endShape();

    fill (255,255,0);
    beginShape();
    vertex (lava[i].x_pos+35,lava.y+10);
    vertex (lava[i].x_pos+30,lava[i].y_pos+20);
    vertex (lava[i].x_pos+35,lava[i].y_pos+30);
    vertex (lava[i].x_pos+30,lava[i].y_pos+40);
    vertex (lava[i].x_pos+35,lava[i].y_pos+50);
    vertex (lava[i].x_pos+30,lava[i].y_pos+60);
    vertex (lava[i].x_pos+35,lava[i].y_pos+70);
    vertex (lava[i].x_pos+30,lava[i].y_pos+80);
    vertex (lava[i].x_pos+35,lava[i].y_pos+90);
    vertex (lava[i].x_pos+45,lava[i].y_pos+90);
    vertex (lava[i].x_pos+50,lava[i].y_pos+80);
    vertex (lava[i].x_pos+45,lava[i].y_pos+70);
    vertex (lava[i].x_pos+50,lava[i].y_pos+60);
    vertex (lava[i].x_pos+45,lava[i].y_pos+50);
    vertex (lava[i].x_pos+50,lava[i].y_pos+40);
    vertex (lava[i].x_pos+45,lava[i].y_pos+30);
    vertex (lava[i].x_pos+50,lava[i].y_pos+20);
    vertex (lava[i].x_pos+45,lava[i].y_pos+20);
    endShape();   
    }  
}

function drawTrees()
{
    for (i=0; i <myTree.length; i++)
    {
    //draw tree trunk
    fill(92, 64, 51);
    rect(myTree[i].x_pos,myTree[i].y_pos-3,60,150);
    
    //draw leaves 
    fill (85,107,47);
    ellipse (myTree[i].x_pos,myTree[i].y_pos,70,70);
    fill (154,205,50);
    ellipse (myTree[i].x_pos-50,myTree[i].y_pos-38,60,60);
    fill (85,107,47);   
    ellipse (myTree[i].x_pos-30,myTree[i].y_pos-82,60,60);
    fill (154,205,50);
    ellipse (myTree[i].x_pos+20,myTree[i].y_pos-132,60,70);
    fill (85,107,47);
    ellipse (myTree[i].x_pos,myTree[i].y_pos-82,60,60);
    fill (154,205,50);
    ellipse (myTree[i].x_pos,myTree[i].y_pos-82,60,60);
    fill (85,107,47);
    ellipse (myTree[i].x_pos+60,myTree[i].y_pos-92,70,60);
    fill (154,205,50);
    ellipse (myTree[i].x_pos+90,myTree[i].y_pos-52,60,60);
    fill (85,107,47);
    ellipse (myTree[i].x_pos+60,myTree[i].y_pos-2,70,70);
    fill (154,205,50);
    ellipse (myTree[i].x_pos+20,myTree[i].y_pos-20,50,50);
    fill (85,107,47);
    ellipse (myTree[i].x_pos-20,myTree[i].y_pos-42,55,55);
    ellipse (myTree[i].x_pos+20,myTree[i].y_pos-62,50,50);
    ellipse (myTree[i].x_pos+49,myTree[i].y_pos-42,50,50);
        
    //anchor point for trees
    //fill (255,0,0);
    //ellipse (myTree[i].x_pos,myTree[i].y_pos,10,10);
    }  
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

