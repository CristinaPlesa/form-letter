$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const personInput = $("input#person").val();

    $("#person").append("input#personInput");

    $("#letter").show();

    event.preventDefault();
  });
});