$(document).ready(function() {

    $(".normal").css("color", "blue");

    $("#paragraph_button").click(function(){
        $(".normal").css("color", "red");
        $(".normal").css("font-family", "Arial");
        $(".normal").css("font-size", "24px");
        });

    $("body").append("<img id=\"my_image\" class=\"img\" src=\"imgs/books.jpg\">");

    $("#effect_button").click(function(){
        $("#my_image").fadeOut(2000);
    });

    $("#text_button").click(function(){
        $("#textchange").html("You've changed the text up here!");
    });

    $(".img").css("height", "50%");
    $(".img").css("width", "25%");
    $(".img").css("border", "5px solid");

    $("body").append("<ul><li>this is the first item in this list</li><li>this is the second item in this list</li><li>this is the third item in this list</li></ul>");
   
});
