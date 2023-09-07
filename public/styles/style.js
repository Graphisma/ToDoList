
$(".checkbox").on("click", function() {
  var imgSrc = $(this).find("img").attr("src");
  if (imgSrc === "/img/unchecked.png") {
    $(this).find("img").attr("src", "/img/checked.png");
    $(this).find(".written_task").css("text-decoration", "line-through");
  } else {
    $(this).find("img").attr("src", "/img/unchecked.png");
    $(this).find("p").css("text-decoration", "none");
  };

});

$(".checkbox").last().css("margin-bottom", "24px");

//$("#plusButton").on("click", function() {
//  $("ul").append('<li><div class="checkbox"><img class="chb_img" src="/img/unchecked.png"><p class="written_task">4. feladat<p></div> </li>');
//});






