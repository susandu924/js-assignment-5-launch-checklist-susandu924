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
    if (testInput === ""){
        return "Empty"
    }
    if (isNaN(testInput)) {
        return "Not a number"
    } else {
        return  "Is a Number"                            
    };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if ((validateInput(pilotName)) === "Empty")
        alert("All fields must be filled in");
    if ((validateInput(copilotName)) === "Empty")
        alert("All fields must be filled in");
    if ((validateInput(fuelLevel)) === "Empty")
        alert("All fields must be filled in");
    if ((validateInput(cargoMass)) === "Empty")
        alert("All fields must be filled in");
    if ((validateInput(NaN(fuelLevel))) === "Not a number")
        alert("Input must be a number");
        else if ((validateInput(fuelLevel)) === "Is a number")
    if ((validateInput(NaN(cargoMass))) === "Not a number")
        alert("Input must be a number");
        else ((validateInput(cargoMass)) === "Is a number")
    //else if everything correct, update all the above
        pilotName.value = "";
        copilotName.value = ""
        fuelLevel.value = ""
        cargoMass.value = ""
        
    if ()


    //if the form.addEventListener hears submit, the function routes to formSubmission which calls validateInput 
    //if validateInput passes, update values?

     //let? pilotName.value ?
    //console.log(1. Pilot ${pilotName} is ready for launch)
    //console.log(input.value)to update a value
    //validateInput()
    //faultyItems update
    //pilotStatus update using template literals to include pilot name
    //copilotStatus same 
    //fuelStatus
    //cargoStatus

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
