"use strict";

/*Day Trip Generator
Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
Technologies: JavaScript, HTML, CSS, Bootstrap
Features: 

(5 points): As a developer, I want to make good, consistent commits.

(5 points): As a user, I want a destination to be randomly selected for my day trip.
Create arrays

(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
Create arrays

(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
Create arrays

(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
Create arrays

(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
Create an operation for random selection (research)

10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
check to see that all items are included in the list

(10 points): As a user, I want to display my completed trip in the console.
write a few sentences that display the agenda 

(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
Define my functions - which ones do I need

Research: 
How to generate a random number in JavaScript?
math.floor only returns numbers above 0; how do we use i++ here?


Review arrays
Review functions

Generate random number to index arrays --- each item in a position ---
(Math.ceil(Math.random()*4))
function randomRestaurant() {
    let destination = ["New York, San Francisco, Baton Rouge, Florida"]
    let Math.ceil(Math.random()*4)-1
    **type action here----
    **call function
}

*/

let destination = ["New York", "San Francisco", "Baton Rouge", "Tampa", "Denver", "Chicago"]
let restaurant = ["McDonalds", "Fleming's", "Bertrand's", "Pappadeaux", "Burger King", "Prejean's"]
let transportation = ["car", "scooter", "Airplane", "boat", "bus", "train"]
let entertainment = ["see a movie", "go to the circus", "attend a murder mystery dinner", "listen to live music", "take a historical tour", "go whale watching"]

function chooseDestination() {
    let randomNumber = Math.floor(Math.random()*destination.length);
    return destination[randomNumber];
}

function chooseRestaurant() {
    let randomNumber = Math.floor(Math.random()*restaurant.length);
    return restaurant[randomNumber];
}

function chooseTransportation() {
    let randomNumber = Math.floor(Math.random()*transportation.length);
    return transportation[randomNumber];
}

function chooseEntertainment() {
    let randomNumber = Math.floor(Math.random()*entertainment.length);
    return entertainment[randomNumber];
}

let randomDestination = chooseDestination();
let randomRestaurant = chooseRestaurant();
let randomTransportation = chooseTransportation();
let randomEntertainment = chooseEntertainment();


let biography = "You are going to " + randomDestination + ". You will travel by " + randomTransportation + ". " +
"While you are there, you will eat at " + randomRestaurant + ", and your entertainment will be to " +
randomEntertainment + ".";

alert (biography);

let reselect = prompt("Are you happy with your itinerary? Type Y to keep it and N to generate a new one.");

if (reselect === "Y" || "y") {
    alert("Have a fun trip!");
}
else {
    prompt("Are you sure you would like to generate a new trip?");
        
        
    }  