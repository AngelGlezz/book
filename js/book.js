$(document).ready(function(){
	$('#cascada').imagesLoaded(function(){
		$('#cascada').masonry({
	      itemSelector: '.cascada_img',
	      originTop: true,
	      gutter: 0,
	      columnWidth: 0,
	      fitWidth: true,
	      isAnimated: true
	    })
	});

	$(".show").fancybox({
		'centerOnScroll': true
	});
    $(".show").attr('rel', 'lb_postal lb_gif lb_video lb_disfraz').fancybox({padding: 0});

	$(".item").click(function(){
	    var id = $(this).attr('id');
	    switch (id) {
	    	case 'postales':
	    		$("#gif").hide();
	    		$("#cascada").hide();
	    		$("#indepth").hide();
	    		$("#video").hide();
	    		$("#campaña").hide();
	    		$("#insight").hide();
	    		$("#disfraz").hide();
	    		$("#postal").show();
	    		$("#postales").removeClass('disable').addClass('enable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    		$(".show_postal").addClass('show');
	    		$(".show_gif").removeClass('show');
	    		$(".show_video").removeClass('show');
	    		$(".show_disfraz").removeClass('show');
	    	break;
	    	case 'gifs':
	    		$("#gif").show();
	    		$("#cascada").hide();
	    		$("#indepth").hide();
	    		$("#video").hide();
	    		$("#campaña").hide();
	    		$("#insight").hide();
	    		$("#disfraz").hide();
	    		$("#postal").hide();
	    		$("#gifs").removeClass('disable').addClass('enable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    		$(".show_postal").removeClass('show');
	    		$(".show_gif").addClass('show');
	    		$(".show_video").removeClass('show');
	    		$(".show_disfraz").removeClass('show');
	    	break;
	    	case 'infografias':
	    		$("#postal, #gif, #indepth, #video, #campaña, #insight, #disfraz").hide();
	    		$("#cascada").show();
	    		$('#cascada').imagesLoaded(function(){
					$('#cascada').masonry({
				      itemSelector: '.cascada_img',
				      originTop: true,
				      gutter: 0,
				      columnWidth: 0,
				      fitWidth: true,
				      isAnimated: true
				    })
				});
				$("#infografias").removeClass('disable').addClass('enable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    	break;
	    	case 'indepths':
	    		$("#postal, #gif, #cascada, #video, #campaña, #insight, #disfraz").hide();
	    		$("#indepth").show();
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('disable').addClass('enable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    	break;
	    	case 'videos':
	    		$("#postal, #gif, #cascada, #indepth, #campaña, #insight, #disfraz").hide();
	    		$("#video").show();
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('disable').addClass('enable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    		$(".show_postal").removeClass('show');
	    		$(".show_gif").removeClass('show');
	    		$(".show_video").addClass('show');
	    		$(".show_disfraz").removeClass('show');
	    	break;
	    	case 'campañas':
	    		$("#postal, #gif, #cascada, #indepth, #video, #insight, #disfraz").hide();
	    		$("#campaña").show();
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('disable').addClass('enable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    	break;
	    	case 'insights':
	    		$("#postal, #gif, #cascada, #indepth, #video, #campaña, #disfraz").hide();
	    		$("#insight").show();
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('disable').addClass('enable');
	    		$("#disfraces").removeClass('enable').addClass('disable');
	    	break;
	    	case 'disfraces':
	    		$("#postal, #gif, #cascada, #indepth, #video, #campaña, #insight").hide();
	    		$("#disfraz").show();
	    		$("#infografias").removeClass('enable').addClass('disable');
	    		$("#gifs").removeClass('enable').addClass('disable');
	    		$("#postales").removeClass('enable').addClass('disable');
	    		$("#indepths").removeClass('enable').addClass('disable');
	    		$("#videos").removeClass('enable').addClass('disable');
	    		$("#campañas").removeClass('enable').addClass('disable');
	    		$("#insights").removeClass('enable').addClass('disable');
	    		$("#disfraces").removeClass('disable').addClass('enable');
	    		$(".show_postal").removeClass('show');
	    		$(".show_gif").removeClass('show');
	    		$(".show_video").removeClass('show');
	    		$(".show_disfraz").addClass('show');
	    	break;
	    }
	});

    $('#cascada').masonry({
      itemSelector: '.cascada_img',
      originTop: true,
      gutter: 0,
      columnWidth: 0,
      fitWidth: true
    });
});