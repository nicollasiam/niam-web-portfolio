$(document).ready(function() {
  console.log('Hey! It\'s good to see you here!\n' +
              'So, I supose you are trying to have a glimpse at the code, right?\n' +
              'Don\'t bother! I don\'t mind sharing the code with you.\n' +
              'Just visit https://github.com/nicollasiam/niam-web-portfolio and save your time! =)\n' +
              'I hope you liked it. And the most important:\n'+
              'Send me a message if you think I can improve my coding. Or if you want to share nice words to me.\n' +
              'Hope to the you again soon. See ya!');

  FixTabPosition();
  HideAllTabsContent();
  ShowActiveTabContent(0);

  // Tab click event
  $('.tab-item, .contact-me').on('click', function() {
    if($(this)[0].classList.contains('contact-me')) {
      // Hide active content
      $($('.active a').data('open')).fadeOut();
      // Remove active class from previous active element
      $('.active').removeClass('active');
      // Add active class to contact tab area and show its content (after .5 sec)
      $($('.tabs').children()[3]).addClass('active');

      var topY = $(document).scrollTop();
      setTimeout(ShowActiveTabContent(topY), 500);
    }
    else if (!$(this)[0].classList.contains('active')) {
      // Hide active content
      $($('.active a').data('open')).fadeOut();
      // Remove active class from previous active element
      $('.active').removeClass('active');
      // Add active class to clicked element and show its content (after .5 sec)
      $(this).addClass('active');

      var topY = $(document).scrollTop();
      setTimeout(ShowActiveTabContent(topY), 500);
    }
  });

  // Hide all contents
  function HideAllTabsContent() {
    $('.content-wrapper').children().each(function(_, content) {
      $(content).css('display', 'none');
    });
  }

  // Show active tab content
  function ShowActiveTabContent(topY) {
    var contentId = $('.active a').data('open');

    $(contentId).fadeIn(function() {
      $(document).scrollTop(topY);
    });
  }

  // Fix tab y position bug, when window width <= 1412
  // There is still a bug when width is beetwen 1413 and 1420
  function FixTabPosition() {
    if ($(document).width() <= 1412) {
      $('ul').css('bottom', '6px');
    }
  }
})
