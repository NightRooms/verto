var text = ["Welcome fellow player.", "Wait, I think I saw you before!", "Well you've unlocked the new version.","Get ready."];
var i = 0;
var elemement = document.getElementById("cycle__text");


$(document).ready(function() {
    change()
});

function change() {

    $("#cycle__text").fadeToggle(5000, 'swing', function() {
        if ($("#cycle__text").css("display") == "none") {
            elemement.innerHTML = text[i];
            i++;
            if (i >= text.length) {
                //timeout for the last element
                setTimeout(function() {
                    window.location.href = "q1.html";
                }, 3000);
            }
        }
        change();
    });
}