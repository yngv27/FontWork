let eurofont = [
    {
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,42292,23243]),
    buffer: E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqqqqAAAAAAAAAAC1VVVVXgAAAAAAAC1VVVVVVXgAAAAAAJVVVVVVVVYAAAAAA1VVVVVVVVXAAAAADVVVVVVVVVVgAAAAJVVVVVVVVVVQAAAANVVVVVVVVVVcAAAAlVVX6AArVVVUAAAAlVVYAAAANVVWAAAAVVVgAAAABVVXAAAAVVVAAAAACVVXAAAAVVXAAAAAAVVXAAACVVXAAAAAAVVVAAACVVWAAAAAAVVVAAACVVWAAAAAAVVVAAADVVWAAAAAAVVVAAADVVWAAAAAA1VVAAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVgAADVVWAAAAAA1VVAAADVVWAAAAAAVVVAAACVVWAAAAAAVVVAAACVVWAAAAAAVVVAAACVVXAAAAAAVVVAAAAVVXAAAAAAVVXAAAAVVVgAAAACVVXAAAAVVVwAAAABVVWAAAA1VVeAAAAtVVUAAAAlVVVeqqtVVVcAAAANVVVVVVVVVVYAAAAJVVVVVVVVVVwAAAADVVVVVVVVVXAAAAAA1VVVVVVVVcAAAAAAJVVVVVVVVwAAAAAAC1VVVVVVeAAAAAAAAC/VVVV+AAAAAAAAAAAAqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))  
},
//1
 {
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65535,12678,27501,42292]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANVVVgAAAAAAAAAACVVVVgAAAAAAAAAAJVVVVgAAAAAAAAAAlVVVVgAAAAAAAAACVVVVVgAAAAAAAAAJVVVVVgAAAAAAAAAlVVVVVgAAAAAAAADVVVVVVgAAAAAAAANVVVVVVgAAAAAAAA1VVX1VVgAAAAAAADVVVclVVgAAAAAAANVVVwlVVgAAAAAAA1VVXAlVVgAAAAAAA1VVcAlVVgAAAAAAAlVVwAlVVgAAAAAAAJVXAAlVVgAAAAAAACVYAAlVVgAAAAAAAAlgAAlVVgAAAAAAAAKAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAlVVgAAAAAAAAAAAAv//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },

//euro2 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,27469,44373]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAPlVVVVVfAAAAAAADlVVVVVVVcAAAAAANVVVVVVVVWwAAAAAlVVVVVVVVVQAAAADVVVVVVVVVVYAAAACVVVVVVVVVVXAAAANVVVVVVVVVVWAAAANVVWwAAA5VVVAAAAJVVcAAAADVVVwAAAFVVQAAAAAlVVwAAAFVVgAAAAA1VVgAAAFVVgAAAAA1VVgAAAFVVwAAAAAFVVgAAAFVVwAAAAAFVVgAAAFVVwAAAAAFVVgAAAJVWAAAAAAFVVgAAAAAAAAAAAA1VVgAAAAAAAAAAAA1VVwAAAAAAAAAAAAVVVwAAAAAAAAAAANVVVwAAAAAAAAAAOVVVVAAAAAAAAAA+VVVVWAAAAAAAAA6VVVVVUAAAAAAAD1VVVVVVcAAAAAAD1VVVVVVVwAAAAAA5VVVVVVVYAAAAAACVVVVVVVXwAAAAAA1VVVVVVXwAAAAAADVVVVVVbAAAAAAAACVVVVVvAAAAAAAAANVVVVsAAAAAAAAAAJVVVsAAAAAAAAAAAFVVbAAAAAAAAAAAAFVVcAAAAAAAAAAAAFVVgAAAAAAAAAAAAFVVgAAAAAAAAAAAAFVVgAAAAAAAAAAAA1VVgAAAAAAAAAAAA1VVgAAAAAAAAAAAA1VVVVVVVVVVWwAAA1VVVVVVVVVVVwAAA1VVVVVVVVVVVwAAA1VVVVVVVVVVVwAAA1VVVVVVVVVVVwAAA1VVVVVVVVVVVwAAA1VVVVVVVVVVVwAAAKqqqqqqqqqqqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },
// euro3 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,42292,25356]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqqAAAAAAAAAALVVVVVXoAAAAAAACVVVVVVVVgAAAAAAtVVVVVVVVeAAAAAAVVVVVVVVVVAAAAADVVVVVVVVVVwAAAABVVVVVVVVVVYAAAAJVVVVVVVVVVcAAAANVVWAAAC1VVUAAAAFVVQAAAAJVVUAAAAFVVgAAAABVVWAAAAFVVgAAAACVVWAAAAlVVgAAAACVVWAAAAlVVgAAAACVVWAAAAlVVgAAAACVVWAAAAFVVAAAAACVVWAAAACqoAAAAACVVWAAAAAAAAAAAADVVWAAAAAAAAAAAAJVVUAAAAAAAAAAAAlVVYAAAAAAAAA//9VVVQAAAAAAAACVVVVVXgAAAAAAAACVVVVVcAAAAAAAAACVVVVXAAAAAAAAAACVVVVVeAAAAAAAAACVVVVVVgAAAAAAAACVVVVVVYAAAAAAAAAqqvVVVUAAAAAAAAAAAAJVVWAAAAAAAAAAAACVVXAAAAAAAAAAAACVVVAAAAAAAAAAAAA1VVAAAA1VWAAAAAA1VVgAAAVVWAAAAAA1VVgAAAVVWAAAAAA1VVgAAAVVWAAAAAA1VVgAAAVVWAAAAAA1VVgAAAVVXAAAAAA1VVAAAA1VVAAAAACVVVAAAA1VVwAAAADVVVAAAAlVVWqAAqlVVXAAAAlVVVVVVVVVVWAAAAFVVVVVVVVVVcAAAAJVVVVVVVVVVYAAAACVVVVVVVVVVgAAAAAlVVVVVVVVeAAAAAACVVVVVVVXgAAAAAAAK9VVVV/gAAAAAAAAAAAqqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
},
//euro4 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([0,65503,25388,42260]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1VVVcAAAAAAAAAACVVVVUAAAAAAAAAAJVVVVUAAAAAAAAAAFVVVVUAAAAAAAAAA1VVVVUAAAAAAAAACVVVVVUAAAAAAAAAJVVVVVUAAAAAAAAAFVVVVVUAAAAAAAAA1VVRVVUAAAAAAAACVVVhVVUAAAAAAAAJVVXBVVUAAAAAAAAFVVcBVVUAAAAAAAA1VVQBVVUAAAAAAACVVVgBVVUAAAAAAAJVVXABVVUAAAAAAAFVVcABVVUAAAAAAA1VVQABVVUAAAAAACVVVgABVVUAAAAAAJVVXAABVVUAAAAAANVVcAABVVUAAAAAA1VVQAABVVUAAAAACVVVgAABVVUAAAAAJVVXAAABVVUAAAAANVVUAAABVVUAAAAAlVVYAAABVVUAAAACVVVgAAABVVUAAAABVVXAAAABVVUAAAAJVVcAAAABVVUAAAAJVVYAAAABVVUAAAAJVV6qqqqtVVWqgAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVYAAJVVVVVVVVVVVVwAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAABVVUAAAAAAAAAAAAD//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },
//euro5 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,25356,42292]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqqqqqqqqqqwAAAANVVVVVVVVVVwAAAANVVVVVVVVVVwAAAANVVVVVVVVVVwAAAANVVVVVVVVVVwAAAANVVVVVVVVVVwAAAANVVqqqqqqqqwAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwAAAAAAAAAAAANVVwA///wAAAAAAANVVw5VVVWsAAAAAANVV+VVVVVWwAAAAANVVpVVVVVVYAAAAANVVVVVVVVVWAAAAANVVVVVVVVVVwAAAANVVVVVVVVVVcAAAANVVWv//+lVVcAAAANVVcAAAANVVYAAAANVVgAAAACVVXAAAACqqwAAAADVVXAAAAAAAAAAAADVVXAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAAAAAAAAAAAlVWAAAA5VWAAAAAAlVWAAAA1VWAAAAAAlVWAAAA1VWAAAAADlVWAAAA1VWAAAAADVVXAAAAJVVwAAAADVVXAAAAJVVgAAAAOVVUAAAAJVVb8AAP5VVYAAAANVVVaqqpVVVcAAAACVVVVVVVVVVgAAAADVVVVVVVVVVwAAAAA1VVVVVVVVXAAAAAAOVVVVVVVVsAAAAAAA6VVVVVVrAAAAAAAAA/qlWq/AAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },
//euro6 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,25356,42292]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6VVVVawAAAAAAAA5VVVVVVWwAAAAAACVVVVVVVVYAAAAAA5VVVVVVVVWwAAAAAlVVVVVVVVVgAAAADVVVVVVVVVVcAAAACVVVqqqqlVVYAAAANVVbAAAAOVVYAAAANVVcAAAADVVYAAAAJVVgAAAAAVVUAAAAFVVwAAAAAVVUAAAAFVVAAAAAAlVYAAAAFVVAAAAAAAAAAAAAFVVAAAAAAAAAAAAAFVVAAAAAAAAAAAAAFVVAAAAAAAAAAAAAFVVAAAAAAAAAAAAAFVVAAAAAAAAAAAAAFVVAAqqqoAAAAAAAFVVDlVVVVWwAAAAAFVVNVVVVVVbAAAAAFVV1VVVVVVVwAAAAFVVVVVVVVVVcAAAAFVVVVVVVVVVYAAAAFVVVVqqpVVVUAAAAFVVbAAAAOVVXAAAAFVVcAAAAAVVWAAAAFVVgAAAAAlVWAAAAFVVwAAAAA1VVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAFVVAAAAAAFVVAAAAJVVwAAAAA1VVAAAAJVVgAAAAAlVWAAAANVVcAAAADVVWAAAABVVWgAAA5VVXAAAACVVVVVVVVVVYAAAADVVVVVVVVVVcAAAAAlVVVVVVVVVgAAAAAJVVVVVVVVWAAAAAADVVVVVVVVYAAAAAAAOVVVVVVaAAAAAAAAAD6qqq/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  }, 
//euro7 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65535,12678,27501,42292]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqqqqqqqqqqrAAAAJVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAAOqqqqqqqqVVWAAAAAAAAAAAAOVVXAAAAAAAAAAAANVVYAAAAAAAAAAAAJVVcAAAAAAAAAAAA1VVgAAAAAAAAAAAAlVVwAAAAAAAAAAADVVWAAAAAAAAAAAACVVXAAAAAAAAAAAANVVYAAAAAAAAAAAAJVVcAAAAAAAAAAAA1VVgAAAAAAAAAAAAlVVwAAAAAAAAAAADVVWAAAAAAAAAAAACVVXAAAAAAAAAAAANVVYAAAAAAAAAAAAJVVcAAAAAAAAAAAA1VVgAAAAAAAAAAAAlVVwAAAAAAAAAAADVVWAAAAAAAAAAAAOVVXAAAAAAAAAAAANVVYAAAAAAAAAAAAFVVcAAAAAAAAAAAAlVVgAAAAAAAAAAADlVVwAAAAAAAAAAADVVWAAAAAAAAAAAANVVXAAAAAAAAAAAANVVYAAAAAAAAAAAAFVVcAAAAAAAAAAAAlVVgAAAAAAAAAAADlVVwAAAAAAAAAAADVVWAAAAAAAAAAAANVVXAAAAAAAAAAAAJVVYAAAAAAAAAAAAFVVcAAAAAAAAAAAAlVVgAAAAAAAAAAADVVVwAAAAAAAAAAACVVWAAAAAAAAAAAANVVXAAAAAAAAAAAAJVVYAAAAAAAAAAAAP//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },

//euro8 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,42292,23275]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqgAAAAAAAAAAK/VVVV+gAAAAAAAC9VVVVVVeAAAAAAAJVVVVVVVV4AAAAAA1VVVVVVVVWAAAAACVVVVVVVVVXgAAAADVVVVVVVVVVgAAAAJVVX6qqvVVVQAAAANVVYAAAAtVVYAAAAFVVwAAAAJVVYAAAAFVVgAAAADVVcAAAAlVVgAAAACVVcAAAAlVVgAAAACVVcAAAAlVXgAAAACVVcAAAAlVXgAAAACVVcAAAAlVVgAAAACVVcAAAAFVVgAAAACVVcAAAAFVVgAAAADVVYAAAANVVwAAAAJVVYAAAAJVVeAAAAtVVwAAAADVVV/qq/VVXgAAAAA1VVVVVVVVeAAAAAALVVVVVVVXwAAAAAAClVVVVVVeAAAAAAALVVVVVVVV4AAAAAC1VVVVVVVVXAAAAALVVVVf/VVVVwAAAANVVeqoKqtVVYAAAAlVVgAAAADVVcAAAA1VXAAAAACVVWAAAA1VWAAAAAA1VWAAAA1VWAAAAAA1VWAAACVVWAAAAAA1VXAAACVVWAAAAAA1VXAAACVVWAAAAAA1VXAAACVVWAAAAAA1VXAAACVVWAAAAAA1VXAAACVVWAAAAAA1VXAAAA1VXAAAAACVVWAAAA1VVgAAAADVVWAAAA1VVegAACtVVcAAAAFVVV///9VVVcAAAANVVVVVVVVVVYAAAALVVVVVVVVVVgAAAAC1VVVVVVVVWAAAAAAtVVVVVVVV4AAAAAAC9VVVVVVeAAAAAAAACr/VX/6AAAAAAAAAAACqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  },
//euro9 = 
{
    width : 48, height : 54, bpp : 2,
    transparent : 0,
    //palette : new Uint16Array([65503,12678,42292,23243]),
    buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqgAAAAAAAAAAK9VVVV+gAAAAAAAC1VVVVVVeAAAAAAAtVVVVVVVV4AAAAACVVVVVVVVVWAAAAALVVVVVVVVVXAAAAANVVVVVVVVVVgAAAAlVVV///9VVVwAAAAlVV6AAACtVVYAAAA1VXAAAAALVVcAAAA1VXAAAAADVVcAAAAVVWAAAAACVVeAAACVVWAAAAACVVWAAACVVWAAAAACVVWAAACVVWAAAAACVVWAAACVVWAAAAACVVWAAACVVWAAAAACVVWAAACVVWAAAAACVVWAAAAVVWAAAAACVVWAAAAVVWAAAAACVVWAAAA1VXAAAAADVVWAAAA1VVgAAAAJVVWAAAAlVVfqqqr1VVWAAAAlVVVVVVVVVVWAAAAJVVVVVVVVVVWAAAADVVVVVVVXVVWAAAAC1VVVVVVeVVWAAAAAtVVVVVVyVVWAAAAAAvVVVV+CVVWAAAAAAAqqqqACVVWAAAAAAAAAAAACVVWAAAAAAAAAAAACVVWAAAAAAAAAAAACVVWAAAAAAAAAAAACVVWAAAAKqoAAAAACVVWAAAAlVeAAAAACVVWAAAA1VWAAAAACVVWAAAA1VWAAAAADVVeAAAA1VWAAAAADVVcAAAAlVVgAAAAJVVcAAAAlVVeqoKq1VVYAAAAlVVVV//VVVVwAAAAJVVVVVVVVVVgAAAALVVVVVVVVVXAAAAACVVVVVVVVVcAAAAAAtVVVVVVVVgAAAAAAC9VVVVVX4AAAAAAAACr///+oAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
  }
];