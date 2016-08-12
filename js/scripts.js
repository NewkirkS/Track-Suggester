// ===BACK=END===
var javaScore = 0;
var c#Score = 0;
var rubyScore = 0;
var phpScore = 0;
var designScore = 0;

var highScore = Math.max(javaScore, c#Score, rubyScore, phpScore, designScore);

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
