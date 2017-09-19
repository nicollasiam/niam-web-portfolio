$(document).ready(function() {
  $('.skill-dev').on('mouseover', function() {
    if(!$(this)[0].classList.contains('active-skill')) {
      // Remove active-skill class from previous active skill
      $('.active-skill').removeClass('active-skill');
      // Give this element the class
      $(this).addClass('active-skill');

      // Update skill description
      $('.skill-description').fadeOut(function() {
        $('.skill-description').html('I\'m always trying to learn new technologies as well as improving the ones I already have.').fadeIn();
      })
      // Update skill1
      UpdateSkill('#skill_1', 'HTML', 90);
      // Update skill2
      UpdateSkill('#skill_2', 'CSS', 80);
      // Update skill3
      UpdateSkill('#skill_3', 'JAVASCRIPT', 65);
      // Update skill4
      UpdateSkill('#skill_4', 'RUBY', 75);
      // Update skill5
      UpdateSkill('#skill_5', 'RAILS', 75);
      // Update skill6
      UpdateSkill('#skill_6', 'JAVA', 40);
    }
  });

  $('.skill-cook').on('mouseover', function() {
    if(!$(this)[0].classList.contains('active-skill')) {
      // Remove active-skill class from previous active skill
      $('.active-skill').removeClass('active-skill');
      // Give this element the class
      $(this).addClass('active-skill');

      // Update skill description
      $('.skill-description').fadeOut(function() {
        $('.skill-description').html('When you live alone, you need to learn some cooking. And I got pretty good at it!').fadeIn();
      })
      // Update skill1
      UpdateSkill('#skill_1', 'DISH WASHING', 100);
      // Update skill2
      UpdateSkill('#skill_2', 'MEAT', 60);
      // Update skill3
      UpdateSkill('#skill_3', 'SWEET', 90);
      // Update skill4
      UpdateSkill('#skill_4', 'SAUCE', 83);
      // Update skill5
      UpdateSkill('#skill_5', 'SALAD', 45);
      // Update skill6
      UpdateSkill('#skill_6', 'PASTA', 30);
    }
  });

  $('.skill-game').on('mouseover', function() {
    if(!$(this)[0].classList.contains('active-skill')) {
      // Remove active-skill class from previous active skill
      $('.active-skill').removeClass('active-skill');
      // Give this element the class
      $(this).addClass('active-skill');

      // Update skill description
      $('.skill-description').fadeOut(function() {
        $('.skill-description').html('Gaming was all I knew in my childhood. In fact, I am what I am today because of it. So, why not?').fadeIn();
      })
      // Update skill1
      UpdateSkill('#skill_1', 'RPG / MMORPG', 85);
      // Update skill2
      UpdateSkill('#skill_2', 'MOBA', 95);
      // Update skill3
      UpdateSkill('#skill_3', 'CARD GAME', 90);
      // Update skill4
      UpdateSkill('#skill_4', 'ACTION', 45);
      // Update skill5
      UpdateSkill('#skill_5', 'FPS', 28);
      // Update skill6
      UpdateSkill('#skill_6', 'PUZZLE', 70);
    }
  });

  $('.skill-pkm').on('mouseover', function() {
    if(!$(this)[0].classList.contains('active-skill')) {
      // Remove active-skill class from previous active skill
      $('.active-skill').removeClass('active-skill');
      // Give this element the class
      $(this).addClass('active-skill');

      // Update skill description
      $('.skill-description').fadeOut(function() {
        $('.skill-description').html('This is my secret profession. As you can see, I\'m not very good at it...').fadeIn();
      })
      // Update skill1
      UpdateSkill('#skill_1', 'TEAM WORK', 85);
      // Update skill2
      UpdateSkill('#skill_2', 'AIM', 50);
      // Update skill3
      UpdateSkill('#skill_3', 'STRENGTH', 40);
      // Update skill4
      UpdateSkill('#skill_4', 'LUCK', 30);
      // Update skill5
      UpdateSkill('#skill_5', 'CHARISMA', 80);
      // Update skill6
      UpdateSkill('#skill_6', 'SPEED', 20);
    }
  });


  function UpdateSkill(element, skill, level) {
    // Change text
    $(element + ' .skill-name').fadeOut(function() {
      $(element + ' .skill-name').html(skill).fadeIn();
    })
    // Update like meter
    $(element + ' .like-meter').css('left', level + '%');
    // Update percentage
    UpdatePercentage(element, level);

    function UpdatePercentage(element, level) {
      var textPercent = $(element + ' .skill-percent').text();
      var currPercent = parseInt(textPercent.substr(0, textPercent.length - 1));

      while(currPercent != level) {
        if(currPercent > level) {
          currPercent--;
        }
        else if(currPercent < level) {
          currPercent++;
        }

        $(element + ' .skill-percent').html(currPercent + '%');
      }
    }
  }
})
