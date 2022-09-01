//Get today's date
var getDate = moment().format("MMM Do, YYYY - hh:mm a");

//get current hour
var currentHour = moment();

//array for time blocks
var taskTimes = [document.querySelector("#userTask9AM"), document.querySelector("#userTask10AM"), document.querySelector("#userTask11AM"), document.querySelector("#userTask12PM"), document.querySelector("#userTask1PM"), document.querySelector("#userTask2PM"), document.querySelector("#userTask3PM"), document.querySelector("#userTask4PM"), document.querySelector("#userTask5PM")]

//loop through time blocks
for (i = 0; i < taskTimes.length; i++) {
    var timeEle = document.querySelector("#time" + i);
    var taskTimesEle = taskTimes[i];

    if (moment(timeEle.innerText, 'HH:mm a').hours() == currentHour.hours()) {
        taskTimesEle.classList.add('present');
    } else if (moment(timeEle.innerText, 'HH:mm a').hours() < currentHour.hours()) {
        taskTimesEle.classList.add('past');
    } else if (moment(timeEle.innerText, 'HH:mm a').hours() > currentHour.hours()) {
        taskTimesEle.classList.add('future');
    }
}

var divEle = document.getElementById("currentDay");
divEle.innerText = getDate;

//functions for save button
var taskInput9AM = document.querySelector("#userTask9AM");
var saveButton9AM = document.querySelector("#save9AM");

taskInput9AM.value = localStorage.getItem("task9AM");

saveButton9AM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task9AM", taskInput9AM.value.trim());
})
var taskInput10AM = document.querySelector("#userTask10AM");
var saveButton10AM = document.querySelector("#save10AM");

taskInput10AM.value = localStorage.getItem("task10AM");

saveButton10AM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task10AM", taskInput10AM.value.trim());
})
var taskInput11AM = document.querySelector("#userTask11AM");
var saveButton11AM = document.querySelector("#save11AM");

taskInput11AM.value = localStorage.getItem("task11AM");

saveButton11AM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task11AM", taskInput11AM.value.trim());
})
var taskInput12PM = document.querySelector("#userTask12PM");
var saveButton12PM = document.querySelector("#save12PM");

taskInput12PM.value = localStorage.getItem("task12PM");

saveButton12PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task12PM", taskInput12PM.value.trim());
})
var taskInput1PM = document.querySelector("#userTask1PM");
var saveButton1PM = document.querySelector("#save1PM");

taskInput1PM.value = localStorage.getItem("task1PM");

saveButton1PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task1PM", taskInput1PM.value.trim());
})
var taskInput2PM = document.querySelector("#userTask2PM");
var saveButton2PM = document.querySelector("#save2PM");

taskInput2PM.value = localStorage.getItem("task2PM");

saveButton2PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task2PM", taskInput2PM.value.trim());
})
var taskInput3PM = document.querySelector("#userTask3PM");
var saveButton3PM = document.querySelector("#save3PM");

taskInput3PM.value = localStorage.getItem("task3PM");

saveButton3PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task3PM", taskInput3PM.value.trim());
})
var taskInput4PM = document.querySelector("#userTask4PM");
var saveButton4PM = document.querySelector("#save4PM");

taskInput4PM.value = localStorage.getItem("task4PM");

saveButton4PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task4PM", taskInput4PM.value.trim());
})
var taskInput5PM = document.querySelector("#userTask5PM");
var saveButton5PM = document.querySelector("#save5PM");

taskInput5PM.value = localStorage.getItem("task5PM");

saveButton5PM.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("task5PM", taskInput5PM.value.trim());
})