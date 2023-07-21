let numberOfCharges = 0;

function generateCharge() {
    numberOfCharges++;
    const chargeBox = document.createElement("div");
    chargeBox.className = "penalCharge";
    chargeBox.insertAdjacentHTML("beforeend", `<input type="text" id="charge${numberOfCharges}">`);
    document.getElementById("criminalCharges").appendChild(chargeBox);
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