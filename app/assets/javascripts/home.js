$(document).ready(function() {

  HideAllTabsContent();
  ShowActiveTabContent();

  // Tab click event
  $('.tab-item').on('click', function() {
    if (!$(this)[0].classList.contains('active')) {
      // Hide active content
      $($('.active a').data('open')).fadeOut();
      // Remove active class from previous active element
      $('.active').removeClass('active');
      // Add active class to clicked element and show its content (after .5 sec)
      $(this).addClass('active');
      setTimeout(ShowActiveTabContent, 500);
    }
  })

  // Hide all contents
  function HideAllTabsContent() {
    $('.content-wrapper').children().each(function(_, content) {
      $(content).css('display', 'none');
    });
  }

  // Show active tab content
  function ShowActiveTabContent() {
    var contentId = $('.active a').data('open');

    $(contentId).fadeIn();
  }
})
