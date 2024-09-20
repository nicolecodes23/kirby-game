function drawKirbytoLeftANDdescend()
{
    //shoes
    noStroke();
    fill(255,20,147);
    ellipse (kirby_xPos-12,kirby_yPos-10,15,15);
    quad(kirby_xPos-19,kirby_yPos-13,kirby_xPos-22,kirby_yPos,kirby_xPos-6,kirby_yPos,kirby_xPos-4,kirby_yPos-12);
    
    ellipse (kirby_xPos+12,kirby_yPos-10,15,15);
    quad(kirby_xPos+19,kirby_yPos-13,kirby_xPos+22,kirby_yPos,kirby_xPos+6,kirby_yPos,kirby_xPos+4,kirby_yPos-12);

    //pink body
    fill(255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-35,45,45);
    
    //face 
    noStroke();
    fill(0);
    ellipse (kirby_xPos-11,kirby_yPos-40,8,12,);
    ellipse (kirby_xPos+5,kirby_yPos-40,8,12,);
    fill(255);
    ellipse (kirby_xPos+5,kirby_yPos-42,5,8);
    ellipse (kirby_xPos-11,kirby_yPos-42,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-30,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-30,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-30,kirby_xPos-4,kirby_yPos-22,kirby_xPos+4,kirby_yPos-22,kirby_xPos+6,kirby_yPos-30)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-22,kirby_xPos-2,kirby_yPos-28,kirby_xPos+2,kirby_yPos-28,kirby_xPos+4,kirby_yPos-22,100);

    //hands
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-6,kirby_yPos-39,kirby_xPos-15,kirby_yPos-27,kirby_xPos-12,kirby_yPos-22,kirby_xPos,kirby_yPos-38);
    ellipse (kirby_xPos-3,kirby_yPos-40,7,7);
    
    quad (kirby_xPos+24,kirby_yPos-45,kirby_xPos+17,kirby_yPos-24,kirby_xPos+12,kirby_yPos-28,kirby_xPos+19,kirby_yPos-45);
    ellipse (kirby_xPos+21,kirby_yPos-44,7,7);

}

function drawKirbytoRightANDdescend()
{
    //shoes
    noStroke();
    fill(255,20,147);
    ellipse (kirby_xPos-12,kirby_yPos-10,15,15);
    quad(kirby_xPos-19,kirby_yPos-13,kirby_xPos-22,kirby_yPos,kirby_xPos-6,kirby_yPos,kirby_xPos-4,kirby_yPos-12);
    
    ellipse (kirby_xPos+12,kirby_yPos-10,15,15);
    quad(kirby_xPos+19,kirby_yPos-13,kirby_xPos+22,kirby_yPos,kirby_xPos+6,kirby_yPos,kirby_xPos+4,kirby_yPos-12);

    //pink body
    fill(255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-35,45,45);

   //face 
    noStroke();
    fill(0);
    ellipse (kirby_xPos-6,kirby_yPos-40,8,12,);
    ellipse (kirby_xPos+10,kirby_yPos-40,8,12,);
    fill(255);
    ellipse (kirby_xPos+10,kirby_yPos-42,5,8);
    ellipse (kirby_xPos-6,kirby_yPos-42,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-30,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-30,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-30,kirby_xPos-4,kirby_yPos-22,kirby_xPos+4,kirby_yPos-22,kirby_xPos+6,kirby_yPos-30)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-22,kirby_xPos-2,kirby_yPos-28,kirby_xPos+2,kirby_yPos-28,kirby_xPos+4,kirby_yPos-22,100);

    //hands
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-24,kirby_yPos-45,kirby_xPos-15,kirby_yPos-27,kirby_xPos-9,kirby_yPos-27,kirby_xPos-19,kirby_yPos-45);
    ellipse (kirby_xPos-21,kirby_yPos-44,7,7);
    
    quad (kirby_xPos,kirby_yPos-35,kirby_xPos+12,kirby_yPos-23,kirby_xPos+16,kirby_yPos-27,kirby_xPos+5,kirby_yPos-39);
    ellipse (kirby_xPos+2,kirby_yPos-38,7,7);
}

function drawKirbytoLeft()
{
    //shoes
    fill(255,20,147);
    quad(kirby_xPos-14,kirby_yPos-11,kirby_xPos-19,kirby_yPos,kirby_xPos-9,kirby_yPos,kirby_xPos-6,kirby_yPos-11);
    
    quad(kirby_xPos+14,kirby_yPos-11,kirby_xPos+19,kirby_yPos,kirby_xPos+9,kirby_yPos,kirby_xPos+6,kirby_yPos-11);

    //left hand
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-16,kirby_yPos-20,kirby_xPos-24,kirby_yPos-11,kirby_xPos-19,kirby_yPos-8,kirby_xPos-14,kirby_yPos-20);
    ellipse (kirby_xPos-21,kirby_yPos-9,7,7);
  
    //pink body
    fill(255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-30,45,45);
    
     //right hand
    fill(255,182,193);
    stroke(219,112,147);    
    quad (kirby_xPos+15,kirby_yPos-20,kirby_xPos+22,kirby_yPos-15,kirby_xPos+18,kirby_yPos-10,kirby_xPos+13,kirby_yPos-20);
    ellipse (kirby_xPos+21,kirby_yPos-11,7,7);

    //face 
    noStroke();
    fill(0);
    ellipse (kirby_xPos-11,kirby_yPos-35,8,12,);
    ellipse (kirby_xPos+5,kirby_yPos-35,8,12,);
    fill(255);
    ellipse (kirby_xPos+5,kirby_yPos-37,5,8);
    ellipse (kirby_xPos-11,kirby_yPos-37,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-25,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-25,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-25,kirby_xPos-4,kirby_yPos-17,kirby_xPos+4,kirby_yPos-17,kirby_xPos+6,kirby_yPos-25)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-17,kirby_xPos-2,kirby_yPos-23,kirby_xPos+2,kirby_yPos-23,kirby_xPos+4,kirby_yPos-17,100);        
}

function drawKirbytoRight()
{
    //shoes
    fill(255,20,147);
    quad(kirby_xPos-14,kirby_yPos-11,kirby_xPos-19,kirby_yPos,kirby_xPos-9,kirby_yPos,kirby_xPos-6,kirby_yPos-11);
    
    quad(kirby_xPos+14,kirby_yPos-11,kirby_xPos+19,kirby_yPos,kirby_xPos+9,kirby_yPos,kirby_xPos+6,kirby_yPos-11);

    //right hand
    fill(255,182,193);
    stroke(219,112,147);   
    quad (kirby_xPos+16,kirby_yPos-20,kirby_xPos+24,kirby_yPos-11,kirby_xPos+19,kirby_yPos-8,kirby_xPos+14,kirby_yPos-20);
    ellipse (kirby_xPos+21,kirby_yPos-9,7,7);

    //pink body
    fill(255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-30,45,45);
    
    // left hand
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-16,kirby_yPos-20,kirby_xPos-22,kirby_yPos-15,kirby_xPos-19,kirby_yPos-8,kirby_xPos-14,kirby_yPos-20);
    ellipse (kirby_xPos-21,kirby_yPos-11,7,7);
  
    //face 
    noStroke();
    fill(0);
    ellipse (kirby_xPos-6,kirby_yPos-35,8,12,);
    ellipse (kirby_xPos+10,kirby_yPos-35,8,12,);
    fill(255);
    ellipse (kirby_xPos+10,kirby_yPos-37,5,8);
    ellipse (kirby_xPos-6,kirby_yPos-37,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-25,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-25,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-25,kirby_xPos-4,kirby_yPos-17,kirby_xPos+4,kirby_yPos-17,kirby_xPos+6,kirby_yPos-25)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-17,kirby_xPos-2,kirby_yPos-23,kirby_xPos+2,kirby_yPos-23,kirby_xPos+4,kirby_yPos-17,100);
}

function drawKirbyDescendORtoPlunge()
{
    //shoes
    noStroke();
    fill(255,20,147);
    ellipse (kirby_xPos-12,kirby_yPos-10,15,15);
    quad(kirby_xPos-19,kirby_yPos-13,kirby_xPos-22,kirby_yPos,kirby_xPos-6,kirby_yPos,kirby_xPos-4,kirby_yPos-12);
    
    ellipse (kirby_xPos+12,kirby_yPos-10,15,15);
    quad(kirby_xPos+19,kirby_yPos-13,kirby_xPos+22,kirby_yPos,kirby_xPos+6,kirby_yPos,kirby_xPos+4,kirby_yPos-12);

    //pink body
    fill(255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-35,45,45);

    //face 
    noStroke();
    fill(0);
    ellipse (kirby_xPos-8,kirby_yPos-40,8,12,);
    ellipse (kirby_xPos+8,kirby_yPos-40,8,12,);
    fill(255);
    ellipse (kirby_xPos+8,kirby_yPos-42,5,8);
    ellipse (kirby_xPos-8,kirby_yPos-42,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-30,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-30,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-30,kirby_xPos-4,kirby_yPos-22,kirby_xPos+4,kirby_yPos-22,kirby_xPos+6,kirby_yPos-30)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-22,kirby_xPos-2,kirby_yPos-28,kirby_xPos+2,kirby_yPos-28,kirby_xPos+4,kirby_yPos-22,100);

    //hands
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-24,kirby_yPos-45,kirby_xPos-20,kirby_yPos-27,kirby_xPos-15,kirby_yPos-27,kirby_xPos-19,kirby_yPos-45);
    ellipse (kirby_xPos-21,kirby_yPos-44,7,7);
    
    quad (kirby_xPos+24,kirby_yPos-45,kirby_xPos+20,kirby_yPos-27,kirby_xPos+15,kirby_yPos-27,kirby_xPos+19,kirby_yPos-45);
    ellipse (kirby_xPos+21,kirby_yPos-44,7,7);
}

function drawKirbyFaceFront()
{
    //shoes
    fill(255,20,147);
    quad(kirby_xPos-14,kirby_yPos-11,kirby_xPos-19,kirby_yPos,kirby_xPos-9,kirby_yPos,kirby_xPos-6,kirby_yPos-11);
    
    quad(kirby_xPos+14,kirby_yPos-11,kirby_xPos+19,kirby_yPos,kirby_xPos+9,kirby_yPos,kirby_xPos+6,kirby_yPos-11);

    //hands
    fill(255,182,193);
    stroke(219,112,147);
    quad (kirby_xPos-16,kirby_yPos-20,kirby_xPos-24,kirby_yPos-11,kirby_xPos-19,kirby_yPos-8,kirby_xPos-14,kirby_yPos-20);
    ellipse (kirby_xPos-21,kirby_yPos-9,7,7);
    
    quad (kirby_xPos+16,kirby_yPos-20,kirby_xPos+24,kirby_yPos-11,kirby_xPos+19,kirby_yPos-8,kirby_xPos+14,kirby_yPos-20);
    ellipse (kirby_xPos+21,kirby_yPos-9,7,7);

    //pink body
    fill (255,182,193);
    stroke(219,112,147);
    ellipse(kirby_xPos,kirby_yPos-30,45,45);

    //face 
    noStroke();
    fill (0);
    ellipse (kirby_xPos-8,kirby_yPos-35,8,12,);
    ellipse (kirby_xPos+8,kirby_yPos-35,8,12,);
    fill(255);
    ellipse (kirby_xPos+8,kirby_yPos-37,5,8);
    ellipse (kirby_xPos-8,kirby_yPos-37,5,8);
    fill (255,105,180);
    ellipse (kirby_xPos-11,kirby_yPos-25,10,5);
    ellipse (kirby_xPos+11,kirby_yPos-25,10,5);
    fill(0);
    quad (kirby_xPos-6,kirby_yPos-25,kirby_xPos-4,kirby_yPos-17,kirby_xPos+4,kirby_yPos-17,kirby_xPos+6,kirby_yPos-25)
    fill(240,128,128);
    quad (kirby_xPos-4,kirby_yPos-17,kirby_xPos-2,kirby_yPos-23,kirby_xPos+2,kirby_yPos-23,kirby_xPos+4,kirby_yPos-17,100);
        
    //anchor point for game character
    //fill (255,0,0);
    //ellipse (kirby_xPos,kirby_yPos,10,10);
}