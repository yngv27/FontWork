/*
** stub file for managing "rich" fonts created by DigitMaker
*/
exports = {

    fname: "",
    wids: [],
    offs: [],
    
    init: (f) => { 
      return( {
        fname: f, 
        offs: new Uint16Array(E.toArrayBuffer(_S.read(f, 0, 20))),
        wids: new Uint16Array(E.toArrayBuffer(_S.read(f, 20, 20))),
      });
    },
  
    getDigit: (o, d) => { 
        return(_S.read(o.fname, o.offs[d], o.wids[d]));
    },
  
    print: (o) => { print(o.fname); },
  };
  