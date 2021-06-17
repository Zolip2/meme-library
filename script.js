$("#spongyabob").click(function(){
    window.location.href = "spongyabob/index.html";
})

$("#nyelvtan").click(function(){
    window.location.href = "nyelvtan/index.html";
})

$("#random").click(function(){
    window.location.href = "random/index.html";
})

$("#bejelentkezesgomb").click(function(){
    var valasz = document.getElementById("bejelentkezes").value
    if (valasz == 1968) {
        window.location.href = "secret/index.html"
    } else if (valasz == "Tigriskenyér") {
        window.location.href = "személyes/index.html"
    }
})

var audio = new Audio('sound/Rick Astley - Never Gonna Give You Up (Video).mp3')

$("#rick").on("click", () => {
    audio.play();
})