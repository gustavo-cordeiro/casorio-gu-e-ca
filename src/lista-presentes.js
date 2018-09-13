var gifts = [
  {
    "url_imagem": "Lixeira.jpg",
    "link_compra": "https://www.etna.com.br/etna/p/lixeira-pedal-aco-5litros/047414?skuId=0310852 ",
    "nome_presente": "Lixeira - R$99,00",
    "descricao_presente": ""
  },
  {"url_imagem":"LavaPratos.png","link_compra":"https://www.magazineluiza.com.br/lava-loucas-brastemp-ative-blf08as-8-servicos/p/011704500/ed/lalo/?partner_id=4660&utm_source=google&seller_id=magazineluiza&product_group_id=317393638549&ad_group_id=12213644784&aw_viq=pla&gclid=CjwKCAjw8uLcBRACEiwAaL6MSZvxSXw2Ce5CCVJ2mktUki38kxsTN-8NeUCOHxxyWVua6_vaeOikeBoCnrwQAvD_BwE","nome_presente":"Lava Pratos - R$1.424,91 ","descricao_presente":""},{"url_imagem":"AirFri.jpg","link_compra":"https://www.pontofrio.com.br/Eletroportateis/Fritadeiras/fritadeira-sem-oleo-midea-liva-4-litros-branco-preto-11615781.html?gclid=CjwKCAjw8uLcBRACEiwAaL6MSXQb_ILYp-AS-LYszF9OaAIJf8jA6U8kEqotwjxh2IC0yAS2SdOWuBoCrasQAvD_BwE&utm_medium=cpc&utm_source=gp_pla&IdSku=11615781&idLojista=16&s_kwcid=AL!427!3!97121726218!!!g!407312244858!&utm_campaign=Elpo_Shopping&ef_id=WjmZQwAAANodVQ2Z:20180913034551:s","nome_presente":"Air Fryer - R$ 299,90","descricao_presente":""}
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
