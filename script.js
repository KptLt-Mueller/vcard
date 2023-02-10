/* Demo purposes only */
$(function() { 
    $(".hover").removeClass("hover"); 
});
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
