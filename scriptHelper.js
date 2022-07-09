// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

    planetsReturned = await fetch(https://handlers.education.launchcode.org/static/planets.json).then(function(response) {
        response.json().then(function(json) {
            return planetsReturned;
        })  
})      
};

function pickPlanet(planets) {
    //takes in one arguement: a list of planets return one planet from the list with a randomly selected index
    
    //Math.random() myFetch.planetsReturned
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
