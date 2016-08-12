


$(document).ready(function() {
  $('#output').modal({
      show: false
  });
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#output").modal("show");
  });

});
