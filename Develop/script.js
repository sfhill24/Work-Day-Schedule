//1. Get today's date
//2. Time blocks for business hours: DONE
    //a. time block is color-coded to indicate whether it is in the past, present or futre
    //b. enter event when time block is clicked
//3. Save event to a local storage
    //a. event should remain in local storage when the page is refreshed


//Get today's date
var getDate = moment().format("MMM Do, YYYY");

var divEle = document.getElementById("currentDay");
divEle.innerText = getDate;