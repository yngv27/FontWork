let fontStr = new Uint8Array(
  [0,0,0,0,0,0,0,0,0,15,228,31,200,0,0,112,0,224,0,0,3,128,7,0,0,32,2,120,7,240,127,0,243,192,63,131,248,7,144,1,0,0,0,28,16,100,33,255,225,16,130,31,0,28,7,0,31,0,34,16,124,96,115,128,12,0,96,3,156,12,124,16,136,1,240,1,192,0,0,239,3,255,4,66,8,196,31,216,28,240,0,192,3,192,4,128,0,4,0,14,0,0,0,31,224,127,225,128,98,0,64,0,8,1,24,6,31,248,31,224,0,0,108,0,112,3,248,1,192,6,192,0,0,0,0,2,0,4,0,62,0,124,0,32,0,64,0,0,0,4,0,56,0,96,0,0,16,0,32,0,64,0,128,0,0,0,48,0,96,0,0,0,0,3,0,30,1,240,15,128,120,0,192,0,0,1,255,7,255,8,2,16,4,32,8,127,240,127,192,0,2,0,7,255,15,254,0,0,0,0,3,224,143,225,16,66,32,132,65,15,130,14,0,0,0,64,16,136,33,16,66,32,135,255,7,124,0,0,31,128,63,0,2,0,4,0,8,7,255,15,254,0,0,62,0,124,16,136,33,16,66,32,132,127,0,124,0,0,31,240,127,240,136,33,16,66,32,132,127,0,124,0,0,32,0,64,0,128,225,15,194,124,7,192,14,0,0,0,29,240,127,240,136,33,16,66,32,135,255,7,124,0,0,31,0,127,16,130,33,4,66,8,135,255,7,252,0,0,12,96,24,192,0,0,98,192,199,0,0,0,64,1,192,6,192,24,192,32,128,0,0,72,0,144,1,32,2,64,4,128,0,0,32,128,99,0,108,0,112,0,64,0,0,16,0,96,0,134,65,28,131,224,3,128,0,0,7,224,31,224,96,97,158,66,126,132,133,9,250,17,228,48,104,48,192,63,0,0,0,255,131,255,4,16,8,32,16,64,63,240,63,224,0,1,255,131,255,4,66,8,132,17,8,63,240,59,192,0,0,255,3,255,4,2,8,4,16,8,48,48,32,64,0,1,255,131,255,4,2,8,4,16,8,63,240,63,192,0,1,255,131,255,4,66,8,132,17,8,0,0,127,224,255,193,16,2,32,4,64,0,0,15,240,63,240,64,32,128,65,8,131,31,2,62,0,0,31,248,63,240,4,0,8,0,16,3,255,7,254,0,0,31,248,63,240,0,0,0,128,1,128,1,0,2,0,4,31,248,63,224,0,0,255,193,255,128,120,1,152,6,24,24,24,32,16,0,0,255,193,255,128,1,0,2,0,4,0,8,0,0,127,224,255,192,96,0,112,0,224,3,0,31,248,63,240,0,0,255,193,255,129,128,1,128,1,128,31,248,63,240,0,0,127,129,255,130,1,4,2,8,4,31,248,31,224,0,0,255,193,255,130,32,4,64,8,128,31,0,28,0,0,0,127,129,255,130,1,4,2,8,28,31,252,31,232,0,0,255,193,255,130,32,4,64,8,128,31,248,29,240,0,0,113,129,243,130,33,4,66,8,132,29,248,25,224,0,0,128,1,0,3,255,7,254,8,0,16,0,0,0,127,192,255,192,0,128,1,0,2,15,252,31,240,0,0,126,0,255,0,7,128,3,0,30,15,240,31,128,0,0,126,0,255,0,7,128,7,7,244,15,240,0,120,0,48,127,192,255,0,0,3,3,7,158,3,240,1,128,15,192,121,224,192,192,0,3,192,7,192,0,252,1,248,62,0,120,0,0,1,7,130,31,4,98,8,132,19,8,60,16,112,32,0,3,255,199,255,136,1,0,0,24,0,60,0,31,0,15,128,3,192,1,128,0,16,2,63,252,127,248,0,0,24,0,240,3,128,12,0,14,0,15,0,6,0,0,0,0,32,0,64,0,128,1,0,2,0,4,0,0,112,0,96,0,0,0,38,0,222,1,36,2,72,7,240,7,224,0,1,255,131,255,0,130,1,4,3,248,3,224,0,0,15,128,63,128,65,0,130,1,4,0,0,3,224,15,224,16,64,32,131,255,7,254,0,0,1,240,7,240,9,32,18,64,60,128,56,0,0,1,0,15,248,63,240,72,0,0,0,31,0,127,32,130,65,4,131,255,7,252,0,0,255,193,255,128,64,0,128,1,252,1,248,0,0,79,224,159,192,0,0,0,32,0,73,255,147,254,0,0,127,224,255,192,8,0,56,1,222,3,28,0,0,63,240,127,224,0,0,63,128,127,0,128,1,252,3,248,4,0,15,224,15,192,0,0,127,0,254,1,0,2,0,7,240,7,224,0,0,31,0,127,0,130,1,4,3,248,3,224,0,0,31,248,63,240,65,0,130,1,252,1,240,0,0,7,192,31,192,32,128,65,0,255,193,255,128,0,7,240,15,224,16,0,32,0,96,0,64,0,0,1,144,7,176,9,32,18,64,55,128,38,0,0,1,0,7,240,15,240,8,32,0,0,63,0,127,0,2,0,4,3,248,7,240,0,0,31,0,63,0,3,0,6,1,248,3,224,0,0,15,128,31,128,1,128,127,0,252,0,12,3,248,7,192,0,0,24,192,59,128,28,0,56,1,220,3,24,0,0,15,0,31,0,3,0,2,32,255,193,255,0,0,4,48,8,224,19,64,44,128,113,0,194,0,0,0,192,31,248,124,248,128,16,0,7,255,239,255,192,0,16,2,62,124,63,240,6,0,0,0,128,3,0,4,0,12,0,12,0,8,0,48,0,64,0,0,0,0,0,0,0,0,0,0]);

let widthStr = [
  3, 4,6,8,8,13,10,
  3,5,5,6,7,4,
  5,4,7,
  8,5,8,7,8,8,8,8,8,
  8,3,3,6,6,
  
  6,7,12,8,8,
  8,8,6,6,8,8, 
  3,8,8,7,9,8,
  8,8,8,8,8,7,
  8,8,11,8,7,8,
  
  4,7,4,8,7,3,
  
  7,7,6,7,7,5,7,7,3,5,
  7,3,9,7,7,7,7,7,7,5,
  7,7,9,7,7,7, 
  5,3,5,9];


//g.setFontCustom(E.toString(fontStr), 32, E.toString(widthStr), 256 + 15); 
//let h = require("heatshrink");
let fx = btoa(fontStr);
let wx = btoa(widthStr);
let fcode = `
exports.add = function(graphics) {
  graphics.prototype.setFontBlocky = function() {
    this.setFontCustom(atob(${fx}), 32, atob(${wx}), 256 + 15);
  }
}
`;
console.log(fcode);

/**/
g.clear();
g.setFontAlign(-1,-1);
/**/
/*
g.drawString('!! "" ## $$ %% &&',4,20);
g.drawString("'' (( )) ** ++ ,,",4,45);
g.drawString("-- .. // 00 11 22",4,70);
g.drawString("33 44 55 66 77 88", 4, 95);
g.drawString("99 :: ;; << ==", 4, 110);
//g.drawString("9876543210", 4, 110);
*/
/*
g.drawString('>> ?? @@ AA BB',4,10);
g.drawString("CC DD EE FF GG HH",4,35);
g.drawString("II JJ KK LL MM NN",4,60);
g.drawString("OO PP QQ RR SS TT", 4, 85);
g.drawString("UU VV WW XX YY ZZ", 4, 110);
*/
/*
g.clear();
g.drawString("[[ \\ ]] ^^ __ ``",4,10);
g.drawString("{{ || }} ~~",4,35);
g.drawString("aa bb cc dd ee ff gg hh ii jj",4,60);
g.drawString("kk ll mm nn oo pp qq rr ss tt", 4, 85);
g.drawString("uu vv ww xx yy zz",4,110);
*/
/*
g.drawString("THE QUICK BROWN FOX".toLowerCase(),4, 130);
g.drawString(" JUMPS OVER A LAZY DOG".toLowerCase(),4, 145);
 */

let y = 2;
['It has come to my attention',
 'that the best thing in life for ',
 'any being is to help each other; ',
 "learn from each other in a way",
 "that's cooperative, respectful ",
 "and loving of your fellow being"
 ].forEach((s) => {g.drawString(s, 2, y);y+= 14;});

 exports.add = function(graphics) {
  graphics.prototype.setFontBlocky = function() {
    this.setFontCustom(atob("AAAAAAAAAAAAD+QfyAAAcADgAAADgAcAACACeAfwfwDzwD+D+AeQAQAAABwQZCH/4RCCHwAcBwAfACIQfGBzgAwAYAOcDHwQiAHwAcAAAO8D/wRCCMQf2BzwAMADwASAAAQADgAAAB/gf+GAYgBAAAgBGAYf+B/gAABsAHAD+AHABsAAAAAAAgAEAD4AfAAgAEAAAAAEADgAYAAAEAAgAEAAgAAAADAAYAAAAAADAB4B8A+AeADAAAAB/wf/CAIQBCAIf/B/wAACAAf/D/4AAAAAA+CP4RBCIIRBD4IOAAAAQBCIIRBCIIf/B3wAAB+APwACAAQACAf/D/4AAD4AfBCIIRBCIIR/AHwAAB/wf/CIIRBCIIR/AHwAACAAQACA4Q/CfAfADgAAAB3wf/CIIRBCIIf/B3wAAB8AfxCCIQRCCIf/B/wAAAxgGMAAAGLAxwAAAEABwAbAGMAggAAASACQASACQASAAAAggGMAbABwAEAAABAAYACGQRyD4AOAAAAH4B/gYGGeQn6EhQn6EeQwaDDAPwAAAP+D/wQQCCAQQD/wP+AAAf+D/wRCCIQRCD/wO8AAAP8D/wQCCAQQCDAwIEAAAf+D/wQCCAQQCD/wP8AAAf+D/wRCCIQRCAAAf+D/wRACIARAAAAP8D/wQCCAQQiDHwI+AAAf+D/wBAAIABAD/wf+AAAf+D/wAAAAgAGAAQACAAQf+D/gAAD/wf+AeAGYBhgYGCAQAAD/wf+AAQACAAQACAAAf+D/wGAAcADgAwAf+D/wAAD/wf+BgAGAAYAf+D/wAAB/gf+CAQQCCAQf+B/gAAD/wf+CIARACIAfABwAAAB/gf+CAQQCCBwf/B/oAAD/wf+CIARACIAf+B3wAABxgfOCIQRCCIQd+BngAACAAQAD/wf+CAAQAAAAf8D/wACAAQACD/wf8AAAfgD/AAeAAwAeD/AfgAAAfgD/AAeABwf0D/AAeAAwf8D/AAADAweeA/ABgA/AeeDAwAADwAfAAPwB+D4AeAAAAQeCHwRiCIQTCDwQcCAAA//H/4gBAAAYADwAHwAPgAPAAYAAEAI//H/4AAAYAPADgAwADgAPAAYAAAAAIABAAIABAAIABAAAcABgAAAAJgDeASQCSAfwB+AAAf+D/wCCAQQD+APgAAAPgD+AQQCCAQQAAAPgD+AQQCCD/wf+AAAB8AfwCSASQDyAOAAAAQAP+D/wSAAAAB8AfyCCQQSD/wf8AAD/wf+AQACAAfwB+AAAT+CfwAAAACAASf+T/gAAf+D/wAgAOAHeAxwAAD/wf+AAAD+AfwCAAfwD+AQAD+APwAAAfwD+AQACAAfwB+AAAB8AfwCCAQQD+APgAAAf+D/wQQCCAfwB8AAAB8AfwCCAQQD/wf+AAAfwD+AQACAAYABAAAABkAewCSASQDeAJgAAAQAH8A/wCCAAAD8AfwACAAQD+AfwAAAfAD8AAwAGAfgD4AAAD4AfgAGAfwD8AAwD+AfAAAAYwDuAHAA4AdwDGAAADwAfAAMAAiD/wf8AAAQwCOATQCyAcQDCAAAAwB/4fPiAEAAH/+//wAAQAj58P/AGAAAAgAMABAAMAAwACAAwAEAAAAAAAAAAAAAA"), 32, atob("AwQGCAgNCgMFBQYHBAUEBwgFCAgICAgICAgDAwYGBgYMCAkICAYGCAgDCAgHCQgICAgICAcICAsIBwgEBwQIBwMHBwYHBwUHBwMFBwMJBwcHBwcHBQcHCQcHBwUDBQk="), 256 + 15);
  };
};