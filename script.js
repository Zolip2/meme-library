$("#spongyabob").click(function(){
    window.location.href = "spongyabob/index.html";
})

$("#nyelvtan").click(function(){
    window.location.href = "nyelvtan/index.html";
})

$("#random").click(function(){
    window.location.href = "random/index.html";
})

$(".close-btn").click(function(){
    window.location.href = "pingvin/index.html";
})

$("#macska").click(function(){
    window.location.href = "Macska/index.html";
})

$("#cursed").click(function(){
    window.location.href = "cursed/index.html";
})

$("#bejelentkezesgomb").click(function(){
    var valasz = document.getElementById("bejelentkezes").value
    if (valasz == 1968) {
        window.location.href = "secret/index.html"
    } else if (valasz == "Tigriskenyér") {
        window.location.href = "személyes/index.html"
    } else if (valasz == "Game") {
        window.location.href = "game/index.html"
    }
})

var audio = new Audio('sound/Rick Astley - Never Gonna Give You Up (Video).mp3')

$("#rick").click(function(){
    audio.play()
})

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }