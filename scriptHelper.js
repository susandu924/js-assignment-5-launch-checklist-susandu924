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
        alert("All fields are required!");//do these need to be window.alert("All fields must be filled in")
    if ((validateInput(copilotName)) === "Empty")
        alert("All fields are required!");
    if ((validateInput(fuelLevel)) === "Empty")
        alert("All fields are required!");
    if ((validateInput(cargoMass)) === "Empty")
        alert("All fields are required!");
    if ((validateInput(NaN(fuelLevel))) === "Not a number")
        alert("Make sure to enter valid information for each field!");
        else if ((validateInput(fuelLevel)) === "Is a number")
    if ((validateInput(NaN(cargoMass))) === "Not a number")
        alert("Make sure to enter valid information for each field!");
        else ((validateInput(cargoMass)) === "Is a number")
    //else if everything correct, update all the above
        list.pilotStatus = pilotName.value
        copilotName.value = ""
        fuelLevel.value = ""
        cargoMass.value = ""
        //console.log(1. Pilot ${pilotStatus} is ready for launch) update the li elements pilotStatus and copilotStatus to include their names
    if (fuelLevel < 10000 ) { //this needs to be 10,000 liters, do i use liters? is 10000 a string, i cant remember
       launchStatus = "Shuttle Not Ready For Launch"
        //<h2> = "red" i know this is totaly wrong but this is what i need to do i just dont know how?

    }
    if (cargoMass > 10000) {
        launchStatus = "Shuttle Not Ready For Launch"
        color = "red"
    }
    //how do we determine it is ready? all fields filled in, numbers correct. if ????
    //if shuttle is ready, change launchStatus text to "Shuttle Is Ready To Launch"
    //color = "green"

    //launchStatus
    //faultyItems
    //if the form.addEventListener hears submit, the function routes to formSubmission which calls validateInput 
    //if validateInput passes, update values?

     //let? pilotName.value ?
    
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
