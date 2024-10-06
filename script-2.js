// Initialize game variables
let colonyName = "New Colony";
let population = 10;
let food = 100;
let water = 100;
let oxygen = 100;
let energy = 100;
let eventMessage = "";

// Update game variables
function updateGameVariables() {
    document.getElementById("colony-name").innerHTML = colonyName;
    document.getElementById("population").innerHTML = population;
    document.getElementById("food").innerHTML = food;
    document.getElementById("water").innerHTML = water;
    document.getElementById("oxygen").innerHTML = oxygen;
    document.getElementById("energy").innerHTML = energy;
    document.getElementById("event-message").innerHTML = eventMessage;
}

// Gather resources
function gatherResources(resource) {
    switch (resource) {
        case "food":
            food += 10;
            break;
        case "water":
            water += 10;
            break;
        case "oxygen":
            oxygen += 10;
            break;
        case "energy":
            energy += 10;
            break;
    }
    updateGameVariables();
}

// Generate energy
function generateEnergy() {
    energy += 10;
    updateGameVariables();
}

// Resolve event
function resolveEvent() {
    // Generate a random event
    let eventType = Math.floor(Math.random() * 3);
    switch (eventType) {
        case 0:
            eventMessage = "A solar flare has damaged your colony's life support systems. -10 oxygen.";
            oxygen -= 10;
            break;
        case 1:
            eventMessage = "A group of settlers have discovered a new source of food. +10 food.";
            food += 10;
            break;
        case 2:
            eventMessage = "A malfunctioning robot has caused a fire in the colony. -10 energy.";
            energy -= 10;
            break;
    }
    updateGameVariables();
}

// Add event listeners
document.getElementById("gather-food").addEventListener("click",