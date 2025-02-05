/*
var img = [
Graphics.createImage(`
 xxxx  
x    x 
x    x 
x    x 
x    x 
x    x 
 xxxx 
`),
Graphics.createImage(`
   x  
  xx 
   x 
   x 
   x 
   x 
   x 
`),
Graphics.createImage(`
 xxxx  
x    x 
    x
  xx
 x
x 
xxxxxx 
`),
Graphics.createImage(`
 xxxx  
x    x 
     x
  xxx
     x
x    X
 xxxx  
`),
Graphics.createImage(`
   xx 
  x x
 x  x
x   x
x   x
xxxxxx
    x  
`),
Graphics.createImage(`
xxxxx 
x      
xxxxx      
     x
     x
x    X
 xxxx  
`),
Graphics.createImage(`
 xxxx  
x    x 
x
xxxxx
x    x
x    X
 xxxx  
`),
Graphics.createImage(`
xxxxxx
     x
    x 
   x  
  x   
 x    
 x    
 
`),
Graphics.createImage(`
 xxxx  
x    x
x    x
 xxxx 
x    x
x    X
 xxxx  
`),
Graphics.createImage(`
 xxxx  
x    x
x    x
 xxxxx
     x
x    X
 xxxx  
`),

];

g.clear();
x = 0;
//img.forEach((i)=>{g.drawImage(i, x, 8); x+= 7;});
Ht = 8;
var gr = Graphics.createArrayBuffer(Ht,70,1,{msb:true});
gr.setRotation(3,1);
img.forEach((i)=>{gr.drawImage(i, x, 0); x+= 7;});
gr.setRotation(0,0);
//g.drawImage(gr, 0, 0);

gr.setRotation(0);
var font = E.toString(gr.asImage().buffer);
*/
g2.setFontCustom(atob("fIKCgoJ8AAAAQP4AAABGipKSokIARIKSkpJsABwkRIT+BADkoqKiohwAfJKSkpJMAICGiJCgwABskpKSkmwAZJKSkpJ8AA=="), 48, 7, 256|8);
//g.drawString("0123456789",20,20);
var g2 = Graphics.createArrayBuffer(64,64,16); //,{msb:true});
g2.clear();
g2.setColor("#606060").fillCircle(32,32,32);
g2.setColor("#e0e0e0").setFontAlign(0,0);
g2.drawString("00", 8, 32);
g2.drawString("50", 32, 8);
g2.drawString("99", 56, 32);
foo = g2.asImage();
for(let x =0; x<32; x++) {
  g.drawImage(g2.asImage(), Math.random()*200+32, Math.random()*200+32);
}
g.lcd_wake();
D12.set();
