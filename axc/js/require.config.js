require.config({
	baseUrl: "js",
	paths:{
		'app':'app',
		'jquery':'lib/jquery.min',
		'artTemplate':'lib/artTemplate',
		'slides':'lib/jquery.flexslider.min'
	},
	shim:{
		'slides':{
			deps:['jquery']
		}
	}
 });