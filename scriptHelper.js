// Write your helper functions here!
require('isomorphic-fetch');


let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");

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

    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty'
    } else if ((!isNaN(testInput))) {
        return 'Is a Number'
    } else {
        return 'Not a Number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        pilot = document.querySelector("input[name=pilotName]");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoLevel = document.querySelector("input[name=cargoMass]");
        list = document.getElementById('faultyItems');


        // let form = document.querySelector("form");
        // form.addEventListener("submit", function (event) {

        // Checking to make sure the form elements have values
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        // } else if (validateInput(pilot.value) === 'Is a Number' || validateInput(copilot.value) === 'Is a Number') {
        //     alert('Please enter text for name of pilot or co-pilot');

            // if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
            //     //     alert('Please enter numerical values for Fuel Level and Cargo Mass');
        }

        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let launchStatus = document.getElementById('launchStatus');
        let cargoStatus = document.getElementById('cargoStatus');


        //  if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        //     alert('Please enter numerical values for Fuel Level and Cargo Mass');
        // } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        //     alert('Please do not enter numbers for name of pilot or co-pilot');
    }
    // else {
    //     //update pilot/copilot status
    //     pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    //     copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
    //     list.style.visibility = 'hidden';
    // }
    // //check fuel levels and update faulty items
    // if (Number(fuelLevel) < 10000) {
    //     fuelStatus.innerHTML = `Not enough fuel for journey`;
    //     list.style.visibility = 'visible';
    //     launchStatus.innerHTML = `Shuttle not ready for launch`;
    //     launchStatus.style.color = `red`;
    // } else if (Number(cargoLevel) > 10000) {
    //     cargoStatus.innerHTML = `Cargo too heavy for takeoff`;
    //     list.style.visibility = `visible`;
    //     launchStatus.innerHTML = `Shuttle not ready for launch`;
    //     launchStatus.style.color = `red`;
    // } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
    //     list.style.visibility = `visible`;
    //     fuelStatus.innerHTML = `Enough fuel for journey`;
    //     cargoStatus.innerHTML = `Cargo light enough for takeoff`;
    //     launchStatus.innerHTML = `Shuttle ready for launch`;
    //     launchStatus.style.color = `green`;
    // }


async function myFetch() {
            let planetsReturned;

            planetsReturned = await fetch().then(function (response) {
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
