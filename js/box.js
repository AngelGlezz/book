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
		$(".backg").show();
		$(".close").click(cerrar);
		$(".individual").click(individual);
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
		var title = $(".inner").attr('title');
		$(".individual").hide();
		$(".todos").show();
		$(".inner").html("");
		var i = 1;
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
	var i = 1;
	function next() {
		var ele = $(".inner").attr('ele');
		var title = $(".inner").attr('title');
		if (i < ele) {
			i += 1;
		} else {
			i = 1;
		}
		$(".img_postal").attr('src', 'images/postales/'+title+'/'+i+'.jpg');
	};

	function prev() {
		var ele = $(".inner").attr('ele');
		var title = $(".inner").attr('title');
		if (i > 1) {
			i -= 1;
		} else {
			i = ele;
		}
		$(".img_postal").attr('src', 'images/postales/'+title+'/'+i+'.jpg');
	};

	var ancho = $(window).width();
	console.log(ancho);

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







