// Declaring variable to be used later 

let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);

const firstHour = $('#hour1').text();
const secondHour = $('#hour2').text();
const thirdHour = $('#hour3').text();
const fourthHour = $('#hour4').text();
const fithhHour = $('#hour5').text();
const sixthHour = $('#hour6').text();
const seventhHour = $('#hour7').text();
const eighthHour = $('#hour8').text();
const ninthHour = $('#hour9').text();

const firstHourInt = parseInt(firstHour);
const secondHourInt = parseInt(secondHour);
const thirdHourInt = parseInt(thirdHour);
const fourthHourInt = parseInt(fourthHour);
const fithHourInt = parseInt(fithhHour);
const sixthHourInt = parseInt(sixthHour);
const seventhHourInt = parseInt(seventhHour);
const eigthHourInt = parseInt(eighthHour);
const ninthHourInt = parseInt(ninthHour);

// I want to display the current day and time at the top of the calender when a user opens the planner

var currentDayEl = $("#currentDay");


function displayTime(){
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
    // check  to see if date and time displays
    console.log(rightNow);
}

displayTime();


    


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  
  //Allow a user to enter an event when they click a timeblock

   // Save the event in local storage when the save button is clicked in that timeblock.

   


   


   // Persist events between refreshes of a page