let numberOfPeople = 0;
let numberOfEvidence = 0;
let numberOfCharges = 0;
setInterval(getTime, 1000);

function gotoAircraft() {
    window.open("links/aircraft.html");
}
function gotoGround() {
    window.open("links/ground.html");
}
function gotoWarrant() {
    window.open("links/warrant.html");
}
function gotoDatabase() {
    window.open("links/records.html");
}
function getTime() {
    let losSantosHour = new Date().toUTCString();
    document.getElementById("currentLSHour").innerHTML = losSantosHour.slice(5, 25);
}
function generatePerson() {
    numberOfPeople++;
    const box = document.createElement("div");
    box.className = "box";
    box.insertAdjacentHTML("beforeend", `<div class='title'>Person of Interest</div><label for="poi${numberOfPeople}">Name:</label><input type="text" id="poi${numberOfPeople}"><label for="dob${numberOfPeople}">Date of Birth:</label><input type="text" id="dob${numberOfPeople}" placeholder="DD/MMM/YYYY"><label for="class${numberOfPeople}">Classification:</label><select id="class${numberOfPeople}" required><option value="Victim">Victim</option><option value="Suspect">Suspect</option><option value="Witness">Witness</option><option value="Informant">Informant</option></select><label for="phone${numberOfPeople}">Phone:</label><input type="text" id="phone${numberOfPeople}"><label for="residence${numberOfPeople}">Residence:</label><input type="text" id="residence${numberOfPeople}"></div>`)
    document.getElementById("peopleOfInterest").appendChild(box);
}
function generateEvidence() {
    numberOfEvidence++;
    const evidenceBox = document.createElement("div");
    evidenceBox.className = "title";
    evidenceBox.insertAdjacentHTML("beforeend", `<input type="text" id="evidence${numberOfEvidence}">`);
    document.getElementById("evidences").appendChild(evidenceBox);
}
function generateCharge() {
    numberOfCharges++;
    const chargeBox = document.createElement("div");
    chargeBox.className = "penalCharge";
    chargeBox.insertAdjacentHTML("beforeend", `<input type="text" id="charge${numberOfCharges}">`);
    document.getElementById("criminalCharges").appendChild(chargeBox);
}
function groundReport() {
    const name = document.getElementById("name").value;
    const badge = document.getElementById("badge").value;
    const rank = document.getElementById("rank").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const penalCode = document.getElementById("penalCode").value;
    const personNames = [""];
    const personClassifications = [""];
    const personDOB = [""];
    const personPhones = [""];
    const personResidence = [""];
    const evidenceList = [""];
    if (numberOfPeople > 0) {
        for (let i = 1; i <= numberOfPeople; i++) {
            personNames[i] = document.getElementById('poi' + i).value;
            personClassifications[i] = document.getElementById('class' + i).value;
            personDOB[i] = document.getElementById('dob' + i).value;
            personPhones[i] = document.getElementById('phone' + i).value;
            personResidence[i] = document.getElementById('residence' + i).value;
        }
    }
    if (numberOfEvidence > 0) {
        for (let i = 1; i <= numberOfEvidence; i++) {
            evidenceList[i] = document.getElementById('evidence' + i).value;
        }
    }
    const incidentReport = document.getElementById("incidentReport").value;
    document.open();
    document.write("[divbox=white][center][saaa=150][/saaa]<br><br>");
    document.write("[size=125][b]AVIATION ADMINISTRATION<br>");
    document.write("STATE OF SAN ANDREAS[/b]<br>");
    document.write("[i]A Passion for Safety[/i][/size]<br><br>");
    document.write("[size=110][u]INCIDENT REPORT[/u][/size][/center][hr][/hr]<br><br>");
    document.write("[font=arial][color=black][size=105][b]Filing Information[/b][/size]<br><br>");
    document.write("[indent]<br>");
    document.write("[b]Time & Date:[/b] ", hour, ", ", date, "<br>");
    document.write("[b]Penal Code (if Criminal):[/b] ", penalCode, "<br>");
    document.write("[b]Location:[/b] ", location, "<br><br>");
    document.write("[b]Filed By:[/b] ", rank, " ", name, "<br>");
    document.write("[b]Unit Number:[/b] ", badge, "<br><br><br>");
    document.write("[size=105][b]Involved Persons[/b][/size]<br>");
    if (numberOfPeople > 0) {
        for (let i = 1; i <= numberOfPeople; i++) {
            document.write("[u]Person #", i, " - ", personNames[i], "[/u]<br>");
            document.write("[b]Classification:[/b] ", personClassifications[i], "<br>");
            document.write("[b]Date of Birth:[/b] ", personDOB[i], "<br>");
            document.write("[b]Phone Number:[/b] ", personPhones[i], "<br>");
            document.write("[b]Residence:[/b] ", personResidence[i], "<br><br>");
        }
    }
    else {
        document.write("N/A<br>");
    }
    document.write("<br><br><br>");
    document.write("[size=105][b]Narrative[/b][/size]<br>");
    document.write("[indent]", incidentReport, "<br><br>");
    document.write("[size=105][b]Evidence[/b][/size]<br>");
    if (numberOfEvidence > 0) {
        document.write("[list=1]");
        for (let i = 1; i <= numberOfEvidence; i++) {
            document.write("[*]", evidenceList[i], "<br>");
        }
    }
    else {
        document.write("N/A");
    }
    document.write("[/list][/divbox]")
}
function aircraftReport() {
    let crewInjuries;
    let passengerInjuries;
    let groundInjuries;
    let totalInjuries;
    const name = document.getElementById("name").value;
    const badge = document.getElementById("badge").value;
    const rank = document.getElementById("rank").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const accidentNo = document.getElementById("accidentNo").value;
    const aircraftMakeModel = document.getElementById("aircraftMakeModel").value;
    const aircraftReg = document.getElementById("aircraftReg").value;
    const injuries = document.getElementById("injuries").value;
    const aircraftModel = document.getElementById("aircraftModel").value;
    const aircraftCategory = document.getElementById("aircraftCategory").value;
    const amateurBuilt = document.getElementById("amateurBuilt").value;
    const operatorName = document.getElementById("operatorName").value;
    const siteCondition = document.getElementById("siteCondition").value;
    const lightCondition = document.getElementById("lightCondition").value;
    const observationTime = document.getElementById("observationTime").value;
    const siteDistance = document.getElementById("siteDistance").value;
    const temperature = document.getElementById("temperature").value;
    const windSpeed = document.getElementById("windSpeed").value;
    const flightPlan = document.getElementById("flightPlan").value;
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    if (injuries == "Yes") {
        crewInjuries = document.getElementById("crewInjuries").value;
        passengerInjuries = document.getElementById("passengerInjuries").value;
        groundInjuries = document.getElementById("groundInjuries").value;
        totalInjuries = document.getElementById("totalInjuries").value;
    }
    else {
        crewInjuries = 0;
        passengerInjuries = 0;
        groundInjuries = 0;
        totalInjuries = 0;
    }
    const aircraftDamage = document.getElementById("aircraftDamage").value;
    const aircraftFire = document.getElementById("aircraftFire").value;
    const aircraftExplosion = document.getElementById("aircraftExplosion").value;
    const evidenceList = [];
    evidenceList[0] = "";
    if (numberOfEvidence > 0) {
        for (let i = 1; i <= numberOfEvidence; i++) {
            evidenceList[i] = document.getElementById('evidence' + i).value;
        }
    }
    const incidentReport = document.getElementById("incidentReport").value;
    const aircraftMake = aircraftMakeModel.split(" ");
    document.open();
    document.write("[divbox=white]<br>");
    document.write("[center][size=140][b][u]San Andreas Aviation Administration[/u][/b][/size][/center]<br>");
    document.write("[center][img]https://i.imgur.com/bMWn2Da.png[/img][/center]<br><br>");
    document.write("[hr][/hr]<br>");
    document.write("[divbox=white][b]Location:[/b] ", location, "<br>");
    document.write("[b]Accident Number:[/b] ", accidentNo, "<br>");
    document.write("[b]Date & Time:[/b] ", hour, ", ", date, "<br>");
    document.write("[b]Aircraft:[/b] ", aircraftMakeModel, "<br>");
    document.write("[b]Registration:[/b] ", aircraftReg, "<br>");
    document.write("[b]Injuries:[/b] ", injuries, "[/divbox]<br>");
    document.write("[hr][/hr]<br><br>");
    document.write("[divbox=white]NARRATIVE<br><br>");
    document.write(incidentReport);
    document.write("[/divbox]<br><br><br>");
    document.write("[divbox=white][center][b][i]Aircraft and Owner/Operator Information[/i][/b][/center]<br><br>");
    document.write("[b]Aircraft Make:[/b] ", aircraftMake[0], "<br>");
    document.write("[b]Registration: [/b]", aircraftReg, "<br>");
    document.write("[b]Model/Series: [/b]", aircraftModel, "<br>");
    document.write("[b]Aircraft Category:[/b] ", aircraftCategory, "<br>");
    document.write("[b]Amateur Built:[/b] ", amateurBuilt, "<br>");
    document.write("[b]Operator: [/b]", operatorName, "<br>");
    document.write("[/divbox]<br><br>");
    document.write("[divbox=white][center][b][i]Meteorological Information and Flight Plan[/i][/b][/center]<br>");
    document.write("[b]Conditions at Accident Site:[/b] ", siteCondition, "<br>");
    document.write("[b]Condition of Light:[/b]", lightCondition, "<br>");
    document.write("[b]Observation Time:[/b] ", observationTime, "<br>");
    document.write("[b]Distance from Accident Site:[/b] ", siteDistance, "<br>");
    document.write("[b]Temperature:[/b] ", temperature, "<br>");
    document.write("[b]Wind Speed:[/b] ", windSpeed, "<br>");
    document.write("[b]Type of Flight Plan Filed:[/b] ", flightPlan, "<br>");
    document.write("[b]Departure:[/b] ", departure, "<br>");
    document.write("[b]Destination:[/b] ", destination, "<br>");
    document.write("[/divbox]<br><br><br>");
    document.write("[divbox=white][center][b][i]Wreckage and Impact Information[/i][/b][/center]<br>");
    document.write("[b][b]Crew Injuries:[/b][/b] ", crewInjuries, "<br>");
    document.write("[b]Fatal Aircraft Damage: [/b]", aircraftDamage, "<br>");
    document.write("[b]Passenger Injuries: [/b]", passengerInjuries, "<br>");
    document.write("[b]Fatal Aircraft Fire:[/b] ", aircraftFire, "<br>");
    document.write("[b]Ground Injuries:[/b] ", groundInjuries, "<br>");
    document.write("[b]Aircraft Explosion:[/b] ", aircraftExplosion, "<br>");
    document.write("[b]Total Injuries: [/b]", totalInjuries, "<br>");
    document.write("[/divbox]<br>");
    document.write("[hr][/hr]<br><br>");
    document.write("[b]Evidence of Incident ((logs, screenshots, video)):[/b]<br>");
    document.write("[list]")
    for (let i = 1; i <= numberOfEvidence; i++) {
        document.write("[*]", evidenceList[i], "<br>");
    }
    document.write("[/list]<br>");
    document.write("[hr][/hr]<br>");
    document.write("The San Andreas Aviation Administration, will still continue to investigate this incident. This is preliminary information is, subject to change, and may contain errors. Any errors in this report will be corrected when the final report has been completed<br><br>");
    document.write("Investigator,<br>");
    document.write(rank, ", San Andreas Aviation Administration<br>");
    document.write(name, " - ", badge, "<br>");
    document.write("[center][img]https://i.imgur.com/bMWn2Da.png[/img][/center]<br>");
    document.write("[/divbox]");
}
function generateWarrant() {
    const name = document.getElementById("name").value;
    const badge = document.getElementById("badge").value;
    const rank = document.getElementById("rank").value;
    const suspectName = document.getElementById("suspectName").value;
    const suspectReport = document.getElementById("suspectReport").value;
    const reportNumber = document.getElementById("reportNumber").value;
    const incidentType = document.getElementById("incidentType").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const investigator = document.getElementById("investigator").value;
    const companyName = document.getElementById("companyName").value;
    const charges = [];
    for (let i = 1; i <= numberOfCharges; i++) {
        charges[i] = document.getElementById('charge' + i).value;
    }
    document.open();
    document.write("[divbox=white]<br>");
    document.write("[center][size=140][b][u]San Andreas Aviation Administration[/u][/b][/size][/center]<br>");
    document.write("[center][img]https://i.imgur.com/bMWn2Da.png[/img][/center]<br><br>");
    document.write("[hr][/hr]<br><br><br>");
    document.write("[b]TO:[/b] District Attorney's Office.<br>");
    if (companyName == null) {
        document.write("[b]RE:[/b] San Andreas Aviation Administration (SAAA's) investigation regarding incident (", date, ") against ", suspectName, ",<br><br>");
    }
    else if (companyName == "") {
        document.write("[b]RE:[/b] San Andreas Aviation Administration (SAAA's) investigation regarding incident (", date, ") against ", suspectName, ",<br><br>");
    }
    else if (companyName == "N/A") {
        document.write("[b]RE:[/b] San Andreas Aviation Administration (SAAA's) investigation regarding incident (", date, ") against ", suspectName, ",<br><br>");
    }
    else {
        document.write("[b]RE:[/b] San Andreas Aviation Administration (SAAA's) investigation regarding incident (", date, ") against ", suspectName, ", ", companyName, ",<br><br>");
    }
    document.write("Greetings, we hope this letter finds you well. The San Andreas Aviation Administration (SAAA) is an organization responsible for overseeing, implementing and maintaining the aviation laws & regulations and enforcing them in the State of San Andreas such as flight rules, licensing, providing Air Traffic Control and maintaining & implementing procedures in the San Andreas airspace and its airdromes, along with investigation Aviation related accidents, complaints and misbehaviors.<br><br><br>");
    document.write(" [b]Insert Summary[/b]<br><br>");
    document.write("[divbox=white]Report Number: ", reportNumber, "<br>");
    document.write("Incident Type: ", incidentType, "<br>");
    document.write("Date/Time: ", date, " - ", hour, "<br>");
    document.write("Investigator/Callsign: ", investigator, "<br><br>");
    document.write("[url]", suspectReport, "[/url]<br><br>");
    document.write("End of Report[/divbox]<br><br>");
    document.write("Following our investigation, we've come to a conclusion that the party operating the aircraft is in violation of:<br><br>");
    for (let i = 1; i <= numberOfCharges; i++) {
        document.write("[b]", charges[i], "[/b]<br>")
    }
    document.write("<br>");
    document.write("The San Andreas Aviation Administration, will still continue to investigate, analyse and review this incident as additional evidence and witnesses are presented. All of our findings will be forwarded to the District Attorney's Office for any follow-up.<br><br>");
    document.write("With due regards,<br>");
    document.write(rank, ",<br>");
    document.write(name, " - ", badge, "<br>");
    document.write("San Andreas Aviation Administration<br><br>");
    document.write("[center][img]https://i.imgur.com/bMWn2Da.png[/img][/center]");
    document.write("[/divbox]");
}