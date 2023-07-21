// Declaration of pure text that will be recycled in every cycle of forEach

const regname = document.createElement("div");
regname.setAttribute("class", "bold");
regname.innerText = "Name:";

const regph = document.createElement("div");
regph.setAttribute("class", "bold");
regph.innerText = "Phone:";

const tailnumber = document.createElement("div");
tailnumber.setAttribute("class", "bold");
tailnumber.innerText = "Tail number:";

const callsign = document.createElement("div");
callsign.setAttribute("class", "bold");
callsign.innerText = "Callsign:";

const agencytype = document.createElement("div");
agencytype.setAttribute("class", "bold");
agencytype.innerText = "Agency Type:";

const agencyname = document.createElement("div");
agencyname.setAttribute("class", "bold");
agencyname.innerText = "Agency Name:";

const aircraftmodel = document.createElement("div");
aircraftmodel.setAttribute("class", "bold");
aircraftmodel.innerText = "Aircraft Type & Model:";

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
        document.getElementById("results").innerHTML = "<div class='box'><div class='title'>NO MATCHES FOUND</div</div>";
        return;
    }

    matchingRecords.forEach((aircraft => {
        var element = document.createElement("div");
        element.setAttribute("id", `aircraft${aircraft.aircraftId}`);
        element.setAttribute("class", "recordBox");

        element.appendChild(regname);

        var regname2 = document.createElement("div");
        regname2.innerText = `${aircraft.regName}`;
        element.appendChild(regname2);

        element.appendChild(regph);

        var regph2 = document.createElement("div");
        regph2.innerText = `${aircraft.regPH}`;
        element.appendChild(regph2);

        element.appendChild(tailnumber);

        var tailnumber2 = document.createElement("div");
        tailnumber2.innerText = `${aircraft.tailNumber}`;
        element.appendChild(tailnumber2);

        element.appendChild(callsign);

        var callsign2 = document.createElement("div");
        callsign2.innerText = `${aircraft.callsign}`;
        element.appendChild(callsign2);

        document.getElementById("results").appendChild(element);
    }));
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}
