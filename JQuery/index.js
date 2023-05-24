

$("h1").addClass("big-title");

for (let i = 0; i < 4; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (key) {
        $("button").css("background-color", "aqua");
        setTimeout(function () {
            $("button").css("background-color", "white");
        }, 50);
    });
}


$("button").on("click", function() {
   $("h1").animate({opacity: 0.5});
});



