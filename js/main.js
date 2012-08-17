require({
	packages:[
	{
		name: "dojo",
		location: "lib/dojo/dojo"		
	},
	{
		name: "dijit",
		location: "lib/dojo/dijit"		
	},
	{
		name: "dojox",
		location: "lib/dojo/dojox"		
	}
	]
},['dojo','dijit','dojox'],function(dojo){	
	console.log('main loaded');
	console.log(dojo.require);
});