$(document).ready(function () {
  const contactEmail = $(".contact-left > h3");
  contactEmail.click(function (e) {
    e.stopPropagation();
    $(".contact-modal").fadeIn(500);
    $(".contact-modal-mask").show();
  });
  $(".contact-modal-mask").click(function () {
    $(".contact-modal").fadeOut(500);
    $(".contact-modal-mask").hide();
    // $('.reset').trigger("click")
  });
});
