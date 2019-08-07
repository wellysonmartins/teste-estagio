$(document).on('ready', function () {
   updateValue();

   // FUNÇÃO SLIK
   $(".regular").slick({
      slidesToShow: 5,
      slidesToScroll: 5
   });

   // FUNÇÃO SLIK
   $(".single-item").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true
   });

   // FUNÇÃO PARA ATIVAR MENU FLUTUANTE
   $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
        if (scroll >= 40) {            
          $("#menu").addClass("ativo");
          $("#menu-links").addClass("ativo");
          $("#menu-logo").addClass("ativo");
          $("#icon-cart").addClass("ativo");
          $("#menu-links-dropdown").addClass("ativo");
          $("#dropdown-cart").addClass("ativo");
          $("#dropdown-search").addClass("ativo");
        } else {
          $("#menu").removeClass("ativo");
          $("#menu-links").removeClass("ativo");
          $("#menu-logo").removeClass("ativo");
          $("#icon-cart").removeClass("ativo");
          $("#menu-links-dropdown").removeClass("ativo");
          $("#dropdown-cart").removeClass("ativo");
          $("#dropdown-search").removeClass("ativo");
        }
   });
});

// FUNÇÃO PARA CALCULAR AUMENTO DE 25% NO VALOR DO PRODUTO
function updateValue() {
   $('.produto-vitrini-valor').each(function() {
	   value = $(this).text();
      add = (value * 25) / 100;
		total = parseFloat(value) + parseFloat(add);
		$(this).text(total.toFixed(2).replace('.',','));
   });   
}