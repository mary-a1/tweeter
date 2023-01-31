$(document).ready(function() {
  //Once HTML loads
  console.log("hello world");
  $("#tweet-text").on("input", function() {
    const max = 140;
    const input = $(this);
    const textChars = input.val().length;
    const charsRemaining = max - textChars;
    
    // looking up;get the first element that matches the selector
    const form = input.closest('form'); 
    //looking down; : get the descendants of each element
    const counter = form.find('.counter'); 
    
    counter.text(charsRemaining); //sets the content
    
    if (charsRemaining < 0){ 
      counter.addClass('red'); //changes to red
    } else {
      counter.removeClass('red');
    }
  });

});




// $("#tweet-text").on("keypress", function() {
//   console.log(this); //The this keyword is a reference to the button
// });