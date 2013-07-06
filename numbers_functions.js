#!/usr/bin/env node
var fs = require('fs');
var outfile = "numbers.txt";
var numX = 2;
var numN = 0;
var maxN = 100;
var listN = "";
while (numN < maxN) 
  {
    if (numX == 2 || numX == 3) 
      {
      listN += numX + ', ';
      numN++;
      } 
    else 
      {
        for (x=3; x<=Math.numX; x+=2) 
	  {
          
	  if(x==numX)
	   {
	    listN += numX ;
	    numN++;
	    if (numN < maxN) {listN += ', '}
	   }
	   
	   if (numX % x == 0) 
	    {
	      break
	    }
	  }
      }
    numX++;
    };

fs.writeFileSync(outfile, listN);  
console.log("Script: " + __filename + "\nWrote: " + listN + "\nTo: " + outfile);  
        