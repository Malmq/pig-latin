// business logic

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#word").val();
    var words = [];
    var breakUps = phrase.split(" ");
//    console.log(breakUps);
    breakUps.forEach(function(breakUp) {
      words.push(breakUp);
    });


    $(".word").text(words);
    $("#result").show();
  });
});
