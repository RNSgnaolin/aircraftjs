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