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
    //retreive values that need to be evaluated
 
    if (pilotName.value === "" || coPilotName.value === "" || fuelLevel === "" || cargoMass === "") {
        alert("Empty") };
    if ((isNaN(fuelLevel.value)) || (isNaN(cargoMass.value))) {
        alert("Not a Number")
    } else {
        alert("Is a Number")                            
    };
};
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    //console.log(1. Pilot ${pilotName} is ready for launch)
    //console.log(input.value)to update a value
    //validateInput()
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
