var gifts = [
  {
    url_imagem: 'presente1.jpg',
    link_compra: 'https://www.mercadopago.com/mlb/checkout/start?pref_id=28747259-2fe481f9-a178-4c04-8080-a1e7de2de1d3',
    nome_presente: 'Presente 1',
    descricao_presente: 'Primeiro Presente',
  },
  {
    url_imagem: 'presente2.jpg',
    link_compra: 'https://www.mercadopago.com/mlb/checkout/start?pref_id=28747259-2fe481f9-a178-4c04-8080-a1e7de2de1d3',
    nome_presente: 'Presente 2',
    descricao_presente: 'Segundo Presente',
  },
  {
    url_imagem: 'presente3.jpg',
    link_compra: 'https://www.mercadopago.com/mlb/checkout/start?pref_id=28747259-2fe481f9-a178-4c04-8080-a1e7de2de1d3',
    nome_presente: 'Presente 3',
    descricao_presente: 'Terceiro Presente',
  },
];




$(document).ready(function() {
  var $listaPresentes = $('#lista_presentes');
  var $giftsRowns = [];
  var i,j,chunk = 3;
  var chukRow;

  for (i=0, j=gifts.length; i<j; i+=chunk) {
    chukRow = gifts.slice(i,i+chunk);
    $listaPresentes.append(renderRowGifts(chukRow));
  };
});


function renderRowGifts(gifts) {
  var rowTemplate = '';
  var $row = $('<div class="row">');

  for (var i = gifts.length - 1; i >= 0; i--) {
    rowTemplate += renderGift(gifts[i])
  };
  return $row.html(rowTemplate);
}

function renderGift(data) {
  return '<div class="wedding-item col-md-4 animation fadeIn">\
    <div class="photo-item">\
      <img src="./images/presentes/'+data.url_imagem+'" alt="" class="hover-animation image-zoom-in"/>\
      <div class="layer wh95 border-photo-caption fade-out"></div>\
    </div>\
    <div class="title-excerpt">\
      <h3 class="text-center">\
        <a>'+data.nome_presente+'</a>\
      </h3>\
      <div class="row">\
        <div class="col-md-6 text-center">\
          <a href="https://pag.ae/bhD2CcH" target="_blanck" class="de-button small" style="display: block; width: 100%">\
            Contribuir\
          </a>\
        </div>\
        <div class="col-md-6 text-center">\
          <a href="'+data.link_compra+'" target="_blanck" class="de-button small" style="display: block; width: 100%">\
            Comprar\
          </a>\
        </div>\
      </div>\
    </div>\
  </div>'
};
