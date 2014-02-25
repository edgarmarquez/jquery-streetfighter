$(document).keydown(function(e){
  if(e.keyCode == 88){
    $(".ryu-still").hide();
    $(".ryu-ready").hide();
    $(".ryu-cool").show();
  }   
})
.keyup(function(e){
  if(e.keyCode == 88){
    $(".ryu-still").show();
    $(".ryu-ready").hide();
    $(".ryu-cool").hide();
   }
 });
