// // starting line movesss
var typed = new Typed (".auto_type",{
    strings : ['content creation' , 'writing clean code','google adds','SEO'],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
})








// card content image 
$(document).ready(function(){
    $(".card-img-top").click(function(){
      var $cardOverlay = $(this).closest('.card').find('.card-overlay');
      $cardOverlay.find('.card-text').toggle();
    });
  });








