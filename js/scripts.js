// ===BACK=END===
var javaScore = 0;
var cSharpScore = 0;
var rubyScore = 0;
var phpScore = 0;
var designScore = 0;

var highScore = Math.max(javaScore, cSharpScore, rubyScore, phpScore, designScore);

var vsHighScore = function(score) {
  if (score === highScore) {
    return true;
  } else {
    return false;
  }
}

// ===FRONT=END===

$(document).ready(function() {
  $('#output').modal({
      show: false
  });
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#output").modal("show");
  });

});
