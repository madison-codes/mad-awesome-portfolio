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

$('.close-section-button').on('click', function() {
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

//
