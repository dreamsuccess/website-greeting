var greetingElementID = "greeting_span";

var myDate = new Date();
var hrs = myDate.getHours();

var d = new Date();
var n = d.getDay()

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function GetTimeText() {
    if (hrs < 12)
        return "morning";
    else if (hrs >= 12 && hrs <= 17)
        return "afternoon";
    else if (hrs >= 17 && hrs <= 24)
        return "evening";
}

(function () {
    var greetingElement = document.getElementById(greetingElementID);
    greetingElement.innerText = "Good " + GetTimeText() + "! Enjoy the rest of your " + days[n] + ".";
})();
