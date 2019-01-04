// toggle done and not done, add listener to the parent so that new children will have desired functionality
$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

// delete todo item
$("ul").on("click", "span", function (e) {
    // fade out an then remove item
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    // stops event from propagating to higher parent elements
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    // if pressed enter add new to do
    if (e.which === 13) {
        // get to do input
        let todo = $(this).val();
        // make new li
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todo + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").slideToggle();
    $(".fa-plus").toggleClass("turn")
})