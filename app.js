var btnCon = document.querySelector("#convert-btn");
var iptArea = document.querySelector("#input-area");
var optArea = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/shakespeare.json";

function urlEdit(input) {
    return url + "?" + "text=" + input;
}

btnCon.addEventListener("click", () => {
    var conv = (one) => one.json();
    var disp = (two) => {
        var returned = two.contents.translated;
        optArea.innerText = returned;
    };
    fetch(urlEdit(iptArea.value))
        .then(conv)
        .then(disp)
        .catch((err) => {
            alert(
                "Sorry! It's not you, Shakespeare is tired. Try again after some time."
            );
            return console.log("Try again after some time.", err);
        });
});