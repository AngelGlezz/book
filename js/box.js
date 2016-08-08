$(document).ready(function(){
	$(".box").click(function(){
		var title = $(this).attr('title');
		var ele = $(this).attr('ele');
		var backg = '<div class="content">';
		var backg_c = '</div>';
		var inner = '<div class="outer"><div class="back"><img class="ima_back" src="images/box/Izq.png"></div><div class="inner" id="inner-box" ele="'+ele+'"title="'+title+'">';
		var change = '</div><div class="close"><img class="ima_close" src="images/box/X.png"></div><div class="individual"><img class="ima_indi" src="images/box/Individual.png"></div><div class="todos"><img class="ima_todo" src="images/box/Todos.png"></div><div class="next"><img class="ima_next" src="images/box/Der.png"></div>';
		var inner_c = '</div>';
		$(".backg").append(backg+inner+change+inner_c+backg_c);
		for (var i =1; i <= ele; i++) {
			var image = '<div class="image"><img class="img" src="images/postales/'+title+'/'+i+'.jpg"></div>';
			$("#inner-box").append(image);
		};
		$(".img").click(individual);
		$(".backg").show();
		$(".close").click(cerrar);
		$(".individual").click(individualb);
		$(".todos").click(todos);
		$(".back").click(prev);
		$(".next").click(next);
		$(".back").hide();
		$(".next").hide();
	});

	function cerrar() {
		$(".backg").html("").hide();
	};

	function individual(){
		var str = $(this).attr('src');
		var element = str.split("/");
		var item_img = element[3];
		var img = item_img.split(".");
		var i = img[0];
		var title = $(".inner").attr('title');
		$(".individual").hide();
		$(".todos").show();
		$(".inner").html("");
		var postal = '<div class="cont_img_postal"><img class="img_postal" src="images/postales/'+title+'/'+i+'.jpg"></div>';
		$("#inner-box").append(postal);
		$(".back").show();
		$(".next").show();
		$(".content").addClass('content_max');
		$(".outer").addClass('content_max');
		$(".inner").addClass('inner_max');
	};

		$(document).keyup(function(e){
			if (e.keyCode == 37) {
				prev();
			} else if (e.keyCode == 39) {
				next();
			} else if (e.keyCode == 27) {
				cerrar();
			}
		});

	function individualb(){
		var i = 1;
		var title = $(".inner").attr('title');
		$(".individual").hide();
		$(".todos").show();
		$(".inner").html("");
		var postal = '<div class="cont_img_postal"><img class="img_postal" src="images/postales/'+title+'/'+i+'.jpg"></div>';
		$("#inner-box").append(postal);
		$(".back").show();
		$(".next").show();
		$(".content").addClass('content_max');
		$(".outer").addClass('content_max');
		$(".inner").addClass('inner_max');
	};

	function movil(){
		var title = $(".inner").attr('title');
		$(".individual").hide();
		$(".inner").html("");
		var i = 1;
		var postal = '<div class="cont_img_postal"><img class="img_postal" src="images/postales/'+title+'/'+i+'.jpg"></div>';
		$("#inner-box").append(postal);
		$(".todos").hide();
		$(".back").hide();
		$(".next").hide();
		$(".content").addClass('content_max');
		$(".outer").addClass('content_max');
		$(".inner").addClass('inner_max');
	};

	function todos() {
		var ele = $(".inner").attr('ele');
		var title = $(".inner").attr('title');
		$(".inner").html("");
		$(".todos").hide();
		$(".individual").show();
		for (var i =1; i <= ele; i++) {
			var image = '<div class="image"><img class="img" title="'+title+'"src="images/postales/'+title+'/'+i+'.jpg"></div>';
			$("#inner-box").append(image);
		};
		$(".back").hide();
		$(".next").hide();
		$(".content").removeClass('content_max');
		$(".outer").removeClass('content_max');
		$(".inner").removeClass('inner_max');
	};

	function next() {
		var strn = $(".img_postal").attr('src');
		var elementn = strn.split("/");
		var item_imgn = elementn[3];
		var imgn = item_imgn.split(".");
		var a = parseInt(imgn[0]);
		var ele = $(".inner").attr('ele');
		var title = $(".inner").attr('title');
		if (a < ele) {
			a += 1;
		} else {
			a = 1;
		}
		$(".img_postal").attr('src', 'images/postales/'+title+'/'+a+'.jpg');

	};

	function prev() {
		var strn = $(".img_postal").attr('src');
		var elementn = strn.split("/");
		var item_imgn = elementn[3];
		var imgn = item_imgn.split(".");
		var b = parseInt(imgn[0]);
		var ele = $(".inner").attr('ele');
		var title = $(".inner").attr('title');
		if (b > 1) {
			b -= 1;
		} else {
			b = ele;
		}
		$(".img_postal").attr('src', 'images/postales/'+title+'/'+b+'.jpg');
	};

	var ancho = $(window).width();

	if (ancho <= 480) {
		$(".box").click(movil);
		$(".todos").hide();
		$(".back").hide();
		$(".next").hide();
		$(".backg").bind("swipeleft", function(event){
			next();
		});
		$(".backg").bind("swiperight", function(event){
			prev();
		});
	}	

	
});










