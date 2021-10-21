$(document).ready(function () {
  // small navbar activation
  $('.icon-wrapper').on('click', function () {
    $('.header-bottom').collapse('toggle');
    $('body').toggleClass('active');
  });

  // user collapse
  $('.user-item-toggle').on('click', function () {
    $('.user-items').collapse('toggle');
  });


  // program details page large device
  $('.start-step-btn').on('click', function (e) {
    e.preventDefault();
    $('.main-content-box, .start-step-btn').addClass('deactive');
    $('.box-btn.conditional-btn, .multiple-steps.step-one').addClass('active');
  })

  $('.submit-application-btn').on('click', function (e) {
    e.preventDefault();
    $('.box-btn.conditional-btn').html('applied');
    $('.form-step-one').addClass('deactive');
    $('.form-step-two').addClass('active');
  })

  $('.go-back-btn').on('click', function (e) {
    e.preventDefault();
    $('.box-btn.conditional-btn').html('applying');
    $('.form-step-one').removeClass('deactive');
    $('.form-step-two').removeClass('active');
  })

  $('.confirm-payment-btn').on('click', function (e) {
    e.preventDefault();
    $('.box-btn.conditional-btn').html('pending').addClass('status-pending');
    $('.multiple-steps.step-one, .form-step-two').removeClass('active');
    $('.multiple-steps.step-two').addClass('active');
  })

  // program details page small device
  $('.btn-course-details').on('click', function () {
    $(this).toggleClass('active');
    $('.course-description').collapse('toggle');
  })

  $('.btn-trainers-card').on('click', function () {
    $(this).toggleClass('active');
    $('.trainers-box').collapse('toggle');
  })

})