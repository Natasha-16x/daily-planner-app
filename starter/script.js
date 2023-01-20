


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