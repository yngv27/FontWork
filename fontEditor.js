/*
** Not even close to ready, but WIP
*/

g.setFontCustom(font, 32, E.toString(widths), Font.bpp<<16|scale<<8|Font.height);

function display(ch) {
  let scale = 8;
  g.setFontAlign(-1,-1).setBgColor(0,0,1).clear();
  //g.setColor(0,0,1)//.fillRect(0,72,239,239);
  g.setColor(-1);
  g.setFontCustom(E.toString(Font.buf), 32, E.toString(Font.wids), Font.bpp<<16|scale<<8|Ht);
  g.drawString(ch, 20, 80, true);
}
function go() {
 // g.drawString(`Well, we have a small mess to figure out.`, 20, 90);
  let y=8;
//  g.drawString(`!!! """ %%% ''' ((( ))) `, 8, y+=20);
//  g.drawString("+++ ,,, --- ... ///", 8,y+=20);
//  g.drawString("000 111 222 333 444 555", 8,y+=20);
//  g.drawString("666 777 888 999 ::: ???", 8,y+=20);
//  g.drawString("AAA BBB CCC DDD EEE FFF", 8,y+=20);
  g.drawString("GGG HHH III JJJ KKK LLL", 8,y+=20);
  g.drawString("MMM NNN OOO PPP QQQ RRR", 8,y+=20);
  g.drawString("RRR SSS TTT UUU VVV WWW", 8,y+=20);
  g.drawString("XXX YYY ZZZ", 8,y+=20);
  g.drawString("aaa bbb ccc ddd eee fff ggg", 8,y+=20);
  g.drawString("hhh iii jjj kkk lll mmm nnn", 8,y+=20);
  g.drawString("ooo ppp qqq rrr sss ttt uuu", 8,y+=20);
  g.drawString("vvv www xxx yyy zzz", 8,y+=20);
  g2=Graphics.createArrayBuffer(120, 40, 2, {msb: true});
  for(let x=0; x<4; x++) g2.setColor(x).fillRect(x*30,0,x*30+29,39);
  //g.drawImage(g2.asImage(), 0, 160);
}
//go();
var HI=0;
setWatch(()=>{HI=analogRead(wOS.BAT);}, wOS.CHG, {edge: "rising"});

function foo(n) {
  let res = Math.floor(n/64)*1000;
  n %= 64;
  res += Math.floor(n/16) * 100;
  n %= 16;
  res += Math.floor(n/4) * 10;
  res += (n % 4);
  return res;
}
D12.set();

//* /
function show(ch) {
  let idx = ch.charCodeAt(0)-32;
  let offset=0;
  let stride=Font.height*Font.bpp/8;
  for(let c=0; c<idx; c++) offset+=widths[c]*stride;
  print("offset is "+offset);
  print("widths[idx] = "+widths[idx]);
  let ab = E.toArrayBuffer(font.substring(offset,offset+widths[idx]*stride));
  let str = "";
  for(let i=0; i<ab.length; i++) { 
    if( ! (i % stride) ) { print(str); str="";}
    str += foo(ab[i]).toString().padStart(4,'0')+' '; //ab[i].toString(2).padStart(8,'0'); 
  }
  print(str);
  // onscreen version
  let S=8;
  let xoff = 120, yoff = 90;
  for(let x=0; x<ab.length; x+=stride) {
    for(let y=0; y<stride; y++) {
      for(let z = 0; z<8/Font.bpp; z++) {
        let val = (ab[x+y] >> (6-z*2)) & 0x03;
        x0 = xoff + x/stride*S;
        y0 = yoff + (y*8/Font.bpp+z)*S;
        g.setColor(["#000000","#555555","#aaaaaa","#ffffff"][val]).fillRect(x0,y0,x0+S-2,y0+S-2);
        //print( `${x} ${y} ${val}`);
      }
    }
      //print('-----------');
  }
}