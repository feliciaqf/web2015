define(['jquery','slides'],function($){
	function domEvents(){

		//banner slider 滑动
		$('#banner_slider').flexslider({
			animation: "fade"
	        // controlNav: 'thumbnails'
		});

		$("#play_list").flexslider({
			animation: "slide",
			directionNav:false
		});
	}

	var ept = {
		init:function(){
			domEvents();
		}

	}

	return ept;

})