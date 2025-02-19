// Index
$('#index').click(function() {
   $('#toggle').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

// Toggle
  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
    });
