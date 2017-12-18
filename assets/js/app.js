
$(document).ready(function(){

	// solo se mostrara la primera imagen
	$(".foto:first").show();
	
	// se enconderan las imagenes
	 $(".foto").hide();

	

	// cambiar el color del circulo
	$(".pagination:first").css({"color": "#1c7c26"});

	//funciones
	// se da click, llama a la funcion paginacion
	// $(".pagination").click(pagination);
	// al hacer click cambia a la siguiente imagen
	// $(".right span").click(nextSlider);
	// al hacer click cambia a la imagen previa
	// $(".left span").click(prevSlider);

	$(".icon-circle").click(pagination);


	function pagination(){

		var circle = $(this).index() + 1;

		$(".foto").hide();

		$('#img' + circle).fadeIn(1000);

		$(".icon-circle").css({"color": "#FFF"});

		$(this).css({'color': "#1c7c26"});
	}

});