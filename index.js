$(document).ready(function () {
  //   $("p").click(function () {
  //     $(this).hide();
  //   });

  $(".btn-show").click(function () {
    $(".heading").show();
  });
  $(".btn-hide").click(function () {
    $(".heading").hide();
  });
  $(".toggle").click(function () {
    $(".heading").toggle();
  });
  $(".dbl-click").dblclick(function () {
    $(".heading").show();
  });
  $(".name").blur(function () {
    $(".alert").show();
  });
  $(".name").change(function () {
    $(".alert").show();
  });
  $(".clickToBig").click(function () {
    $(".red-box").animate(
      {
        width: "300px",
        height: "300px",
        marginLeft: "100px",
      },
      300
    );
  });
  $(".clickToSmall").click(function () {
    $(".red-box").animate(
      {
        width: "100px",
        height: "100px",
        marginLeft: "0px",
      },
      300
    );
  });

  //product tab
  $(".product-image-item").hide();
  $(".product-image-item:first").show();

  $("#options li a:not(:first)").addClass("inactive");
  $("#options li a").click(function () {
    const n = $(this).attr("id");
    if ($(this).hasClass("inactive")) {
      $("#options li a").addClass("inactive");
      $(this).removeClass("inactive");

      $(".product-image-item").hide();
      $("#" + n + "image").fadeIn(500);
    }
  });
});
