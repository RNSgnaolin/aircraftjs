let numberOfEvidence = 0;

function onLoad() {
    startClock();
}
function startClock() {
    let timeElement = document.getElementById("currentLSHour");
    if(!timeElement) return;
    
    setTimeOnClock();
    setInterval(setTimeOnClock, 1000);
}
function setTimeOnClock() {
    let timeElement = document.getElementById("currentLSHour");
    let losSantosHour = new Date().toUTCString();
    timeElement.innerHTML = losSantosHour.slice(5, 25);
}
function generateEvidence() {
    numberOfEvidence++;
    const evidenceBox = document.createElement("div");
    evidenceBox.className = "title";
    evidenceBox.insertAdjacentHTML("beforeend", `<input type="text" id="evidence${numberOfEvidence}">`);
    document.getElementById("evidences").appendChild(evidenceBox);
}