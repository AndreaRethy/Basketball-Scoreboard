let homeCounter = 0
let guestCounter = 0

function homePlus1() {
    homeCounter ++
    document.getElementById("homeCounter").textContent = homeCounter
}

function homePlus2() {
    homeCounter += 2
    document.getElementById("homeCounter").textContent = homeCounter
}

function homePlus3() {
    homeCounter += 3
    document.getElementById("homeCounter").textContent = homeCounter
}

function guestPlus1() {
    guestCounter ++
    document.getElementById("guestCounter").textContent = guestCounter
}

function guestPlus2() {
    guestCounter += 2
    document.getElementById("guestCounter").textContent = guestCounter
}

function guestPlus3() {
    guestCounter += 3
    document.getElementById("guestCounter").textContent = guestCounter
}

function newGame() {
    homeCounter = 0
    guestCounter = 0
    document.getElementById("homeCounter").textContent = homeCounter
    document.getElementById("guestCounter").textContent = guestCounter
}