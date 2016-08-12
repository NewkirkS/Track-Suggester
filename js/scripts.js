$(document).ready(function() {

  // ===BACK=END===
  var javaScore = 0;
  var cSharpScore = 0;
  var rubyScore = 0;
  var phpScore = 0;
  var designScore = 0;
  var vsHighScore = function(score) {
    var highScore = Math.max(javaScore, cSharpScore, rubyScore, phpScore, designScore);
    if (score === highScore) {
      return true;
    } else {
      return false;
    }
  }

  // ===FRONT=END===
  $("form#survey").submit(function(event){
    event.preventDefault();
    //Display Name in Modal
    var name = $("#name").val();
    $(".outputName").text(name);
    if (name === "") {
      $("#nameInput").addClass("has-error");
    }
    //Calculate Scores
    var question1 = parseInt($("select#question1").val());
    var question2 = parseInt($("select#question2").val());
    var question3 = parseInt($("select#question3").val());
    var question4 = parseInt($("select#question4").val());
    if (question1 === 1) {
      designScore += 1;
    } else {
      cSharpScore += 1;
      javaScore += 1;
      rubyScore += 1;
      phpScore += 1;
    }
    if (question2 === 1){
      cSharpScore += 1;
      javaScore += 1;
    } else {
      rubyScore += 1;
      phpScore += 1;
      designScore +=1;
    }
    if (question3 === 1) {
      javaScore += 2;
    } else if (question3 === 2) {
      phpScore += 2;
    } else if (question3 === 3) {
      cSharpScore += 2;
    }else if (question3 === 4) {
      rubyScore += 2;
    } else {
      designScore += 2;
    }
    if (question4 === 1) {
      javaScore += 1;
      cSharpScore += 1;
    } else if (question4 === 2) {
      rubyScore += 1;
      phpScore += 1;
    } else {
      designScore +=1;
    }
    //Display Highest Score(s) in Modal
    if (vsHighScore(javaScore) === true) {
      $("#javaImage").removeClass("hidden");
      $("#outputJava").removeClass("hidden");
    } else if (vsHighScore(cSharpScore) === true) {
      $("#cSharpImage").removeClass("hidden");
      $("#outputCSharp").removeClass("hidden");
    } else if (vsHighScore(rubyScore) === true) {
      $("#rubyImage").removeClass("hidden");
      $("#outputRuby").removeClass("hidden");
    } else if (vsHighScore(phpScore) === true) {
      $("#phpImage").removeClass("hidden");
      $("#outputPhp").removeClass("hidden");
    } else if (vsHighScore(designScore) === true && vsHighScore(0) === false){
      $("#designImage").removeClass("hidden");
      $("#outputDesign").removeClass("hidden");
    } else {
      event.preventDefault();
    }
  });
});
