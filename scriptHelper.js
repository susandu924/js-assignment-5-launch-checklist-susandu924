// Write your helper functions here!

// //require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   //function pickPlanet(planets)
   const missionTarget  = document.querySelector('#missionTarget');
   missionTarget.innerHTML = `
                <h3>Mission Destination</h3>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
                `
   
}

function validateInput(testInput) { 
    if (testInput === ""){
        return "Empty"
    };
    if (isNaN(testInput)) {
        return "Not a number"
    } else {
        return  "Is a Number"                            
    };
};
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if ((validateInput(pilot)) === "Empty" || (validateInput(copilot)) === "Empty" || (validateInput(fuelLevel)) === "Empty" ||
    (validateInput(cargoLevel)) === "Empty") {
        alert("All fields are required!")
    } if 
    (fuelLevel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready For Launch"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
        launchStatus.style.color = "red"
        list.style.visibility = "visible"
    } if (cargoLevel > 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready For Launch"
        cargoStatus.innerHTML = "Cargo mass too high for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
        launchStatus.style.color = "red"
        list.style.visibility = "visible"
    } if ((fuelLevel > 10000) && (cargoLevel < 10000)) {
        launchStatus.innerHTML = "Shuttle Is Ready For Launch"
        launchStatus.style.color = "green"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"     
    }        
};

async function myFetch() {
  let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()
});  
        return planetsReturned;             
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];

};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
