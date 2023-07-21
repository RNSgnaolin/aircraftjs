/**
 * Function for looking up the Aircrafts array and showing the result on the page
 */
function findAircraft() {
    // we clear the previous results first
    clearResults();
    
    // reading the searchPattern from the input field
    let searchPattern = document.getElementById("searchPattern").value;
    
    // filtering the aircrafts array, trying to find the searchPattern fragment in callsign/tailNumber properties
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

    // if there's nothing to show, we print a notification on the screen and return
    if (matchingRecords.length < 1) {
        document.getElementById("results").innerHTML = "No aircrafts found, please try again";
        return;
    }

    // print the results on the page
    matchingRecords.forEach((aircraft => {
        var element = document.createElement("div");
        element.setAttribute("id", `aircraft${aircraft.aircraftId}`);

        var id = document.createElement("p");
        id.innerText = `Aircraft ID: ${aircraft.aircraftId}`;
        element.appendChild(id);

        var tailnumber = document.createElement("p");
        tailnumber.innerText = `Tailnumber: ${aircraft.tailNumber}`;
        element.appendChild(tailnumber);

        document.getElementById("results").appendChild(element);
    }));
}

/**
 * Function to clear the results from the page
 */
function clearResults() {
    document.getElementById("results").innerHTML = "";
}