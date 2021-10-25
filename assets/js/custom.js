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

  // program details page small device course and trainee
  $('.btn-course-details').on('click', function () {
    $(this).toggleClass('active');
    $('.course-description').collapse('toggle');
  })

  $('.btn-trainers-card').on('click', function () {
    $(this).toggleClass('active');
    $('.trainers-box').collapse('toggle');
  })

  // program details page small device form steper
  $('#op3-tab').on('click', function(e){
    e.preventDefault();
    $('#op2-tab').trigger('click');
  })

  $('.small-device-enroll-start-btn').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('deactive');
    $('.input-field-wrapper.sd-form-one').collapse('toggle');
    $('.small-device-conditional-btn').addClass('active');
    $('.small-device-start-step-btn').addClass('deactive');
  })

  $('.small-device-submit-application-btn').on('click', function () {
    $('.input-field-wrapper.sd-form-one, .input-field-wrapper.sd-form-two').collapse('toggle');
    $('.small-device-conditional-btn').html('applied');
    $('.header-step.header-step-one').addClass('is-completed');
    $('.header-step.header-step-two').addClass('is-active');
  });

  $('.small-device-go-back-btn').on('click', function () {
    $('.input-field-wrapper.sd-form-one, .input-field-wrapper.sd-form-two').collapse('toggle');
    $('.small-device-conditional-btn').html('applying');
    $('.header-step.header-step-one').removeClass('is-completed');
    $('.header-step.header-step-two').removeClass('is-active');
  })

  $('.small-device-confirm-payment-btn').on('click', function () {
    $('.input-field-wrapper.sd-form-two').collapse('toggle');
    $('.small-device-conditional-btn').html('pending').addClass('status-pending');
    $('.header-step.header-step-two').addClass('is-completed');
    $('.header-step.header-step-three').removeClass('is-active');
  })

})