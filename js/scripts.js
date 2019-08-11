/*****************************************************/
/* FUNÇÃO DE ENTRADA *********************************/
/*****************************************************/
$(document).on('ready', function () {
  addScrollMenu();
  btcVoltarTopo();
  addSlickBannerPrincipal();
  addProdutosVitrine();
  addSlickProdutosVitrine();
  addModalLogin();
});

/*****************************************************/
/* FUNÇÃO PARA ADICIONAR BOTÃO 'VOLTAR AO TOPO' ******/
/*****************************************************/
function btcVoltarTopo() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn();
    } else {
      $('a[href="#top"]').fadeOut();
    }
  });

  $('a[href="#top"]').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
}

/*****************************************************/
/* FUNÇÃO PARA ADICIONAR MODAL PARA LOGIN ************/
/*****************************************************/
function addModalLogin() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("modalLogin");
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function () {
    modal.style.display = "block";
    $('#menu-usuario').css('display', 'none');
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

/*****************************************************/
/* FUNÇÃO PARA ATIVAR MENU FLUTUANTE *****************/
/*****************************************************/
function addScrollMenu() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
      $("nav").addClass("ativo");
      $("#menu-links").addClass("ativo");
      $("#menu-logo").addClass("ativo");

      $('.icon-menu-header').css('display', 'none');
      $('.icon-menu-ativo').css('display', 'block');
    } else {
      $("nav").removeClass("ativo");
      $("#menu-links").removeClass("ativo");
      $("#menu-logo").removeClass("ativo");

      $('.icon-menu-header').css('display', 'block');
      $('.icon-menu-ativo').css('display', 'none');
    }
  });

  $(window).scroll(function () {
    $('nav').css('left', -$(window).scrollLeft());
  });
}

/*****************************************************/
/* VARIÁVEIS DE ATIVAÇÃO PARA TROCA DE ICONES ********/
/*****************************************************/
ativoSearch = false;
ativoCarrinho = false;

/*****************************************************/
/* FUNÇÃO PARA ABRIR MENU DE BUSCA *******************/
/*****************************************************/
function menuSearch() {
  $('#menu-search').slideToggle();
  $('#menu-search').css('display', 'grid');
  $('#menu-usuario').css('display', 'none');

  attrImgCarrinho();

  if (!ativoSearch) {
    $('.search').attr("src", "./img/icon-close-branco.png");
    $('.search-ativo').attr("src", "./img/icon-close-preto.png");
    ativoSearch = true;
  } else {
    $('.search').attr("src", "./img/icon-search.png");
    $('.search-ativo').attr("src", "./img/icon-search-hover.png");
    ativoSearch = false;
  }
}

/*****************************************************/
/* FUNÇÃO PARA ABRIR MENU DE USUÁRIO *****************/
/*****************************************************/
function menuUsuario() {
  $('#menu-usuario').slideToggle();
  $('#menu-usuario').css('display', 'grid');

  attrImgSearch();
  attrImgCarrinho();
}

/*****************************************************/
/* FUNCÃO PARA ABRIR MENU DO CARRINHO ****************/
/*****************************************************/
function menuCarrinho() {
  $('#menu-carrinho').slideToggle();
  $('#qtd-carrinho').slideToggle();
  $('#menu-carrinho').css('display', 'grid');
  $('#menu-usuario').css('display', 'none');

  attrImgSearch();

  if (!ativoCarrinho) {
    $('.carrinho').attr("src", "./img/icon-cart-close-branco.png");
    $('.carrinho-ativo').attr("src", "./img/icon-cart-close-preto.png");
    ativoCarrinho = true;
  } else {
    $('.carrinho').attr("src", "./img/icon-cart.png");
    $('.carrinho-ativo').attr("src", "./img/icon-cart-hover.png");
    ativoCarrinho = false;
  }
}

/*****************************************************/
/* FUNÇÃO PARA ATRIBUIR ÍCONES DO CARRINHO ***********/
/*****************************************************/
function attrImgCarrinho() {
  $('#qtd-carrinho').css('display', 'block');
  $('#menu-carrinho').css('display', 'none');
  $('.carrinho').attr("src", "./img/icon-cart-close-branco.png");
  $('.carrinho-ativo').attr("src", "./img/icon-cart-close-preto.png");
  $('.carrinho').attr("src", "./img/icon-cart.png");
  $('.carrinho-ativo').attr("src", "./img/icon-cart-hover.png");
  ativoCarrinho = false;
}

/*****************************************************/
/* FUÇÃO PARA ATRIBUIR ÍCONES DE BUSCA ***************/
/*****************************************************/
function attrImgSearch() {
  $('#menu-search').css('display', 'none');
  $('.search').attr("src", "./img/icon-close-branco.png");
  $('.search').attr("src", "./img/icon-search.png");
  $('.search-ativo').attr("src", "./img/icon-close-preto.png");
  $('.search-ativo').attr("src", "./img/icon-search-hover.png");
  ativoSearch = false;
}

/*****************************************************/
/* FUNÇÃO PARA ADICIONAR 1 ITEM QTD CARRINHO *********/
/*****************************************************/
function addProdutoCarrinho(origem) {
  valorAtual = $('#qtd-carrinho').text();
  total = parseInt(valorAtual) + 1;

  $('#qtd-carrinho').html(total);

  if (origem === 'cart') {
    menuCarrinho();
  }
}

/**********************************************************************/
/* FUNÇÃO PARA ADICIONAR OS PRODUTOS DA DATABASE NO CARRUSEL VITRINE **/
/**********************************************************************/
function addProdutosVitrine() {
  produto_vitrine.forEach(function (produto, i) {

    value = produto.valor;
    add = (value * 25) / 100;
    total = parseFloat(value) + parseFloat(add);
    parcela = total / 3;

    $(".slider2").append(
      `<div class="container">
          <img src="./img/produto-vitrine-${i + 1}.png" class="produto">
          <figcaption>
            <p>${produto.nome}</p>
            <p>R$ <strong>${total.toFixed(2).replace('.', ',')}</strong></p>
            <p>3x de R$ <span class="produto-vitrini-valor-1">${parcela.toFixed(2).replace('.', ',')}</span></p>
            <a onclick="addProdutoCarrinho('vitrine')">COMPRAR</a>
          </figcaption>
        </div>`
    )
  });
}

/*****************************************************/
/* FUNÇÃO PARA ADICIONAR O SLICK NA VITRINE **********/
/*****************************************************/
function addSlickProdutosVitrine() {
  $(".regular").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 879,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

/*****************************************************/
/* FUNÇÃO PARA ADICIONAR O SLICK NO BANNER PRINCIPAL */
/*****************************************************/
function addSlickBannerPrincipal() {
  $(".single-item").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
}