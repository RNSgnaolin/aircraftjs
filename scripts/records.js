// Declaration of pure text that will be recycled in every cycle of forEach

function callText(text) {
    let textElement = document.createElement("span");
    textElement.setAttribute("class", "bold");
    textElement.innerText = text;
    return textElement;
}

function findAircraft() {
    clearResults();
    let searchPattern = document.getElementById("searchPattern").value;
    let matchingRecords = aircrafts.filter(
        aircraft => {
            if (aircraft.callsign) {
                if (aircraft.callsign.indexOf(searchPattern) > -1)
                    return true;
            }

            if (aircraft.tailNumber) {
                if (aircraft.tailNumber.indexOf(searchPattern) > -1)
                    return true;
            }

            return false;
        });

    if (matchingRecords.length < 1) {
        document.getElementById("results").innerHTML = "<div class='box'><div class='title'>NO MATCHES FOUND</div></div>";
        return;
    }

    matchingRecords.forEach((aircraft => {
        var element = document.createElement("div");
        element.setAttribute("id", `aircraft${aircraft.aircraftId}`);
        element.setAttribute("class", "recordBox");

        element.appendChild(callText("Name:"));

        var regname2 = document.createElement("div");
        regname2.innerText = `${aircraft.regName}`;
        element.appendChild(regname2);

        element.appendChild(callText("Phone:"));

        var regph2 = document.createElement("div");
        regph2.innerText = `${aircraft.regPH}`;
        element.appendChild(regph2);

        element.appendChild(callText("Tail number:"));

        var tailnumber2 = document.createElement("div");
        tailnumber2.innerText = `${aircraft.tailNumber}`;
        element.appendChild(tailnumber2);

        element.appendChild(callText("Callsign:"));

        var callsign2 = document.createElement("div");
        callsign2.innerText = `${aircraft.callsign}`;
        element.appendChild(callsign2);

        document.getElementById("results").appendChild(element);
    }));
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}
