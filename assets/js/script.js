$(function()    {
    $(".change-sleep").on("click", function(event)  {
        var id = $(this).data("id");
        var moveBurger = $(this).data("moveBurger");

        var moveBurgerState =   {
            devoured: moveBurger
        };

        $.ajax("/api/burgers/" + id,    {
            type: "PUT",
            data: moveBurgerState
        }).then(
            function()  {
                console.log("Burger is ", moveBurger);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event)  {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers",  {
            type: "POST",
            data: newBurger
        }).then(
            function()  {
            console.log("cooked up a new burger");
            location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function(event)    {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id,    {
            type: "DELETE"
        }).then(
            function()  {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });

});