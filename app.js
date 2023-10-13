$(document).ready(function(){
   $("#courses").click(function(){
      $(".courses").toggle();
      if($('.courses').css('display') == 'none')
         $("#courses a").css("color","#787D85");
      else
         $("#courses a").css("color","#7653FC");
   });
   $("#design").click(function(){
      $(".design").show();
   });
   $("#photoshop").click(function(){
      $(".cont").show();
      if($('.cont').css('display') == 'none')
         $("#photoshop a").css("color","#787D85");
      else
         $("#photoshop a").css("color","#7653FC");
   });
});