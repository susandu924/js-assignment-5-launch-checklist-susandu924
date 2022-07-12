// Write your JavaScript code here!

window.addEventListener("load", function() {
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
      console.log(listedPlanets);
      let chosenPlanet = pickPlanet(listedPlanets);

       // Then using pickPlanet() and addDestinationInfo(), 
       //select a planet at random from listedPlanets and 
       
       
       //!!!!!!!!pass that information
       // to addDestinationInfo(). Reload your page 
       //and check out your site to see the mission target information.
       //????pass this information to addDestination
      
      
      addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
   });
           
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
     let pilot = document.querySelector("input[name=pilotName]").value;
     let copilot = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoLevel = document.querySelector("input[name=cargoMass]").value; 
     
     let list = document.getElementById("faultyItems");

     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});
