//Hide and Show
$("#homepage").show();
$("#catering").hide();

$(".cater").click(function(){
  $("#homepage").hide();
  $("#catering").show();
  console.log ("I'm here.");
});

$(".menu").click(function(){
  $("#homepage").hide();
  $("#catering").hide();

})

