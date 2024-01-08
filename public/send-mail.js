// form header //

$(document).ready(function () {
  $("#form-header").submit(function () {

    $.ajax({
      type: "POST",
      url: "./php/send-form-header.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts-block")
        .addClass("active-form")
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery("#form-header").trigger("reset");
        $(".contacts-block").removeClass("active-form").fadeOut();
      }, 2000);
    });
    return false;
  });
});

// form popup //

$(document).ready(function () {
  $("#form-popup").submit(function () {

    $.ajax({
      type: "POST",
      url: "./php/form-popup.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts-block")
        .addClass("active-form")
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery("#form-popup").trigger("reset");
        $(".contacts-block").removeClass("active-form").fadeOut();
        $(".popup").removeClass("popup_opened");
      }, 2000);
    });
    return false;
  });
});

// END FORM SEND MAIL
