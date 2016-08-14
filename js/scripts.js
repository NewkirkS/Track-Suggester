$(document).ready(function() {
  // ===BACK=END===
  var javaScore = 0;
  var cSharpScore = 0;
  var rubyScore = 0;
  var phpScore = 0;
  var designScore = 0;
  var vsHighScore = function(score) {
    var highScore = Math.max(javaScore, cSharpScore, rubyScore, phpScore, designScore);
    if (score === highScore && highScore != 0) {
      return true;
    } else {
      return false;
    }
  }
  var clearScores = function() {
    javaScore = 0;
    cSharpScore = 0;
    rubyScore = 0;
    phpScore = 0;
    designScore = 0;
  }
  var resetResults = function() {
    $("#javaImage, #outputJava, #cSharpImage, #outputCSharp, #rubyImage, #outputRuby, #phpImage, #outputPhp, #designImage, #outputDesign").addClass("hidden");
  }
  // ===FRONT=END===
  $("form#survey").submit(function(event){
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
    var question5 = parseInt($("select#question5").val());
    if (question1 === 1) {
      designScore += 1;
    } else if (question1 === 2) {
      cSharpScore += 1;
      javaScore += 1;
      rubyScore += 1;
      phpScore += 1;
    }
    if (question2 === 1) {
      cSharpScore += 1;
      javaScore += 1;
    } else if (question2 === 2){
      rubyScore += 1;
      phpScore += 1;
      designScore +=1;
    }
    if (question3 === 1) {
      javaScore += 1;
    } else if (question3 === 2) {
      phpScore += 1;
    } else if (question3 === 3) {
      cSharpScore += 1;
    }else if (question3 === 4) {
      rubyScore += 1;
    } else if (question3 === 5) {
      designScore += 1;
    }
    if (question4 === 1) {
      javaScore += 1;
      cSharpScore += 1;
    } else if (question4 === 2) {
      rubyScore += 1;
      phpScore += 1;
    } else if (question4 === 3) {
      designScore += 1;
    }
    if (question5 === 1) {
      designScore += 1;
    } else if (question5 === 2) {
      javaScore += 1;
    } else if (question5 === 3) {
      cSharpScore += 1;
    } else if (question5 === 4) {
      rubyScore += 1;
    } else if (question5 === 5){
      phpScore += 1;
    }
    //Display Highest Score(s) in Modal
    if (vsHighScore(javaScore) === true) {
      $("#javaImage, #outputJava").removeClass("hidden");
        event.preventDefault();
    } else if (vsHighScore(cSharpScore) === true) {
      $("#cSharpImage, #outputCSharp").removeClass("hidden");
        event.preventDefault();
    } else if (vsHighScore(rubyScore) === true) {
      $("#rubyImage, #outputRuby").removeClass("hidden");
        event.preventDefault();
    } else if (vsHighScore(phpScore) === true) {
      $("#phpImage, #outputPhp").removeClass("hidden");
        event.preventDefault();
    } else if (vsHighScore(designScore) === true) {
      $("#designImage, #outputDesign").removeClass("hidden");
        event.preventDefault();
    }
  });
  $("#closeModal").click(function(event) {
    resetResults();
    clearScores();
  });
});
