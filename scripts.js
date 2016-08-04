// MAIN NAV SHOW

$('#menu-button-header-nav').on('mouseenter', function() {
  showHeader();
});

$('header').on('mouseleave', function() {
  hideHeader();
});

function showHeader() {
  $('#menu-button-header-nav').hide();
  $('header').show();
}

function hideHeader() {
  $('header').hide();
  $('#menu-button-header-nav').show();
}

// PERSONAL STATEMENT

$('#footer-title-container').hover(function() {
  showPersonalStatement();
});

$('#personal-statement').mouseleave(function() {
  hidePersonalStatement();
  // $('#personal-statement').slideDown();
});

function showPersonalStatement() {
  $('#personal-statement').show();
}

function hidePersonalStatement() {
  $('#personal-statement').slideUp();
}

// BIO

$('.close-bio').on('click', function() {
  closeBioSection();
});

$('#menu-nav-about').on('click', function() {
  showBioSection();
});

$('#footer-nav-about').on('click', function() {
  showBioSection();
});

function closeBioSection() {
  $('.bio-content').hide();
}

function showBioSection() {
  $('.bio-content').show();
}

// EXPERIENCE
function showExperience() {
  $('.work-experience-content').show();
}

function hideExpereince() {
  $('.work-experience-content').hide();
}

$('#menu-nav-past-jobs').on('click', function() {
  showExperience();
});

$('.close-experience').on('click', function() {
  hideExpereince();
});

// PROJECT SECTION

function showProjects() {
  $('.project-content').show();
}

function hideProjects() {
  $('.project-content').hide();
}

$('#menu-nav-projects').on('click', function() {
  showProjects();
});

$('.close-projects').on('click', function() {
  hideProjects();
});

// INCREASE IMPORTANCE
// $(document).on('click', function() {
//   increaseZindex();
// });
//
// function increaseZindex() {
//   $(this).toggle('.important');
// }
