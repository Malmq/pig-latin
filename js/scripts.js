// business logic


// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    event.preventDefault();

    $(".word").text(word);
  });
});
