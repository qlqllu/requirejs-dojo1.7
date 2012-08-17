({	
	baseUrl : "../js",
	dir : "../buildoutput",
	optimizeCss : 'none',
	optimize: 'none',
	mainConfigFile: '../js/main.js',
	
	modules : [ {
		name : "main",
		exclude: ['dojo','dojox','dijit']
	}]
})