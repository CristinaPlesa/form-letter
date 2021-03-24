$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const personInput = $("input#person").val();
    console.log(personInput)
    $("#name ").append(personInput);

    $("#letter").show();

    event.preventDefault();
  });
});