$(document).ready(function() {
  console.log('Hey! It\'s good to see you here!\n' +
              'So, I supose you are trying to have a glimpse at the code, right?\n' +
              'Don\'t bother! I don\'t mind sharing the code with you.\n' +
              'Just visit https://github.com/nicollasiam/niam-web-portfolio and save your time! =)\n' +
              'I hope you liked it. And the most important:\n'+
              'Send me a message if you think I can improve my coding. Or if you want to share nice words to me.\n' +
              'Hope to the you again soon. See ya!');

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
