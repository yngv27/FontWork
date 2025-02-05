/*
** an LED font, only FASTER
*/
_S=require("Storage");
//*
var img = [
Graphics.createImage(`
  xxx  
 x   x
 x   x
 x   x
   
x   x
x   x
x   x
 xxx  `),
Graphics.createImage(`
     
     x
     x
     x
   
    x
    x
    x
   `),
Graphics.createImage(`
  xxx  
     x
     x
     x
 xxx 
x    
x    
x    
 xxx  `),
Graphics.createImage(`
  xxx  
     x
     x
     x
 xxx 
    x
    x
    x
 xxx  
`),
Graphics.createImage(`
     
 x   x
 x   x
 x   x
 xxx 
    x
    x
    x
    
`),
Graphics.createImage(`
  xxx  
 x    
 x    
 x    
 xxx 
    x
    x
    x
 xxx  
`),
Graphics.createImage(`
  xxx  
 x    
 x    
 x    
 xxx 
x   x
x   x
x   x
 xxx   
`),
Graphics.createImage(`
  xxx  
     x
     x
     x
     
    x
    x
    x
       
`),
Graphics.createImage(`
  xxx  
 x   x
 x   x
 x   x
 xxx 
x   x
x   x
x   x
 xxx  
`),
Graphics.createImage(`
  xxx  
 x   x
 x   x
 x   x
 xxx 
    x
    x
    x
 xxx  
`),

];

g.clear();
x = 0;
//img.forEach((i)=>{g.drawImage(i, x, 8); x+=7;});
Ht = 10;
//*
var gr = Graphics.createArrayBuffer(Ht,70,1,{msb:true});
gr.setRotation(3,1);
img.forEach((i)=>{gr.drawImage(i, x, 0); x+= 7;});
gr.setRotation(0,0);
//g.drawImage(gr, 0, 0);

//gr.setRotation(0);
var font = E.toString(gr.asImage().buffer);
//* /
g.setFontCustom(font, 48, 7, 2<<8|Ht);
g.setFontAlign(1,0); //drawString("0123456789",20,120);
let cnt=0;
print(setInterval(()=>{
  g.drawString(cnt++, 230, 120, true);
}, 50));
