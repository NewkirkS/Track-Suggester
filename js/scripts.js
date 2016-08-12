$(document).ready(function() {

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
$('#output').modal({
    show: false
  });
  $("form#survey").submit(function(event){
    event.preventDefault();

    //Display Name in Modal
    var name = $("#name").val();
    $("#outputName").text(name);

    //Calculate Scores
    var question1 = parseInt($("select#question1").val());
    var question2 = parseInt($("select#question2").val());
    var question3 = parseInt($("select#question3").val());
    var question4 = parseInt($("select#question4").val());

    if (question1 === 1) {
      designScore += 1;
    } else if (question2 === 2) {
      cSharpScore += 1;
      javaScore += 1;
      rubyScore += 1;
      phpScore += 1;
    }
    //Display Highest Score(s) in Modal


    $("#output").modal("show");
  });
});
