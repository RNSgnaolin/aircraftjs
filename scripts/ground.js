let numberOfPeople = 0;

function generatePerson() {
    numberOfPeople++;
    const box = document.createElement("div");
    box.className = "box";
    box.insertAdjacentHTML("beforeend", `<div class='title'>Person of Interest</div><label for="poi${numberOfPeople}">Name:</label><input type="text" id="poi${numberOfPeople}"><label for="dob${numberOfPeople}">Date of Birth:</label><input type="text" id="dob${numberOfPeople}" placeholder="DD/MMM/YYYY"><label for="class${numberOfPeople}">Classification:</label><select id="class${numberOfPeople}" required><option value="Victim">Victim</option><option value="Suspect">Suspect</option><option value="Witness">Witness</option><option value="Informant">Informant</option></select><label for="phone${numberOfPeople}">Phone:</label><input type="text" id="phone${numberOfPeople}"><label for="residence${numberOfPeople}">Residence:</label><input type="text" id="residence${numberOfPeople}"></div>`)
    document.getElementById("peopleOfInterest").appendChild(box);
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