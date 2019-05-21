$(function(){

  var demo_configs=
  [
    {config:{"fx":"fade smear","backwards":false,"timing":50,"fx_duration":"1000ms","letter_end":"restore","element_end":"restore"}},
  ];

  $("[data-letterfx]").each(function(){
    var fx = $(this).data('letterfx');

    if(fx.match(/^custom\[(.+)\]$/) ){
      var data = demo_configs[ fx.replace(/^custom\[(.+)\]$/, '$1') ];
      fx = data.config;
      fx_string = data.text ? data.text : JSON.stringify(fx);
      var code = '$(".tagline").letterfx('+fx_string+');';
      $(this).click(function(){
        if (! $(".tagline").data('letterfx-obj') || $(".tagline").data('letterfx-obj').isDone() ){
          $(".tagline").letterfx(fx);
          $('.source-code').hide().html(code).fadeIn('slow');
        }
      });
    }


  })

  $(".navbar-brand")
    .letterfx({ fx:'fly-top spin',  timing:150 } )
    .mouseover(function(){$(this).letterfx({fx:'spin'})} );

});