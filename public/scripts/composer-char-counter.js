$(document).ready(function() {

  // event listener that listens for the input event
  $("#tweet-text").on("input", function() {
    const max = 140;
    const input = $(this);
    const textChars = input.val().length;
    const charsRemaining = max - textChars;
    
    // looking up; gets the first element that matches the selector
    const form = input.closest('form'); 
    //looking down; gets the descendants of each element
    const counter = form.find('.counter'); 
    
    counter.text(charsRemaining); //sets the content
    
    if (charsRemaining < 0){ 
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }
  });

});