1. use requirejs to load dojo1.7.3. Put dojo files in: js/lib/dojo.

The lib folder look like this:
lib
 |-dojo
   |-dojo
   |-dijit
   |-dojox
 |-requirejs
   |-require.js 


2. index.html: load dojo through requirejs. dojo doesn's have require() function
   index-dojo.html: load dojo through script tag. dojo has require() function
   
   I don't know why! If anybody can explain, please contact me at: qlqllu@126.com.

