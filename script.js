// Write your JavaScript code here!

// const { formSubmission } = 
import("./scriptHelper");

    window.addEventListener("load", ()=> {
        formSubmission(document)
    //     let form = document.querySelector("form");
    //     form.addEventListener("submit", (event)=>{
    //         event.preventDefault();

    // let pilotName = document.querySelector("input[name=pilotName]");
    // let copilotName = document.querySelector("input[name=copilotName]");
    // let fuelLevel = document.querySelector("input[name=fuelLevel]");
    // let cargoMass = document.querySelector("input[name=cargoMass]");
    // let list = document.getElementById('faultyItems');


    // // let form = document.querySelector("form");
    // // form.addEventListener("submit", function (event) {

    //     // Checking to make sure the form elements have values
        // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        //     alert("All fields are required!");
        //     event.preventDefault();
    //     }
    //     formSubmission(document,list, pilotName, copilotName, fuelLevel, cargoMass);
    // })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});