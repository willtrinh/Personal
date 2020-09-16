//Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

//add new Todo
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grab new todo text from input
    var todo = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append(
      '<li><span><i class="fas fa-trash-alt"></i></span> ' + todo + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text'").fadeToggle();
});
