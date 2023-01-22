// Declaring variable to be used later 

let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const firstHour = $('#hour1').text();
const secondHour = $('#hour2').text();
const thirdHour = $('#hour3').text();
const fourthHour = $('#hour4').text();
const fifthHour = $('#hour5').text();
const sixthHour = $('#hour6').text();
const seventhHour = $('#hour7').text();
const eighthHour = $('#hour8').text();
const ninthHour = $('#hour9').text();

const firstHourInt = parseInt(firstHour);
const secondHourInt = parseInt(secondHour);
const thirdHourInt = parseInt(thirdHour);
const fourthHourInt = parseInt(fourthHour);
const fifthHourInt = parseInt(fifthHour);
const sixthHourInt = parseInt(sixthHour);
const seventhHourInt = parseInt(seventhHour);
const eigthHourInt = parseInt(eighthHour);
const ninthHourInt = parseInt(ninthHour);

// check to see if hours log 
console.log(firstHour);

// check for parseInt numbers 

console.log(firstHourInt);

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

colorCoding();

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  // Test check: hourNow24 = 20;
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
}
  
  //Allow a user to enter an event when they click a timeblock

   // Save the event in local storage when the save button is clicked in that timeblock.
// Store user input in local Storage

$('#btn1').click(function() {
    if($('#text1').val()) {
      localStorage.removeItem('text1');
    }
  
    const firstHourString = JSON.stringify(firstHour);
    
    localStorage.setItem(hour1, $('#text1').val());
  });
  
  $('#btn2').click(function() {
    if($('#text2').val()) {
      localStorage.removeItem('text2');
    }
  
    const secondHourString = JSON.stringify(secondHour);
  
    localStorage.setItem(hour2, $('#text2').val());
  });
  
  $('#btn3').click(function() {
    if($('#text3').val()) {
      localStorage.removeItem('text3');
    }
  
    const thirdHourString = JSON.stringify(thirdHour);
  
    localStorage.setItem(hour3, $('#text3').val());
  });
  
  $('#btn4').click(function() {
    if($('#text4').val()) {
      localStorage.removeItem('text4');
    }
  
    const fourthHourString = JSON.stringify(fourthHour);
  
    localStorage.setItem(hour4, $('#text4').val());
  });
  
  $('#btn5').click(function() {
    if($('#text5').val()) {
      localStorage.removeItem('text5');
    }
  
    const fifthHourString = JSON.stringify(fifthHour);
  
    localStorage.setItem(hour5, $('#text5').val());
  });
  
  $('#btn6').click(function() {
    if($('#text6').val()) {
      localStorage.removeItem('text6');
    }
  
    const sixthHourString = JSON.stringify(sixthHour);
  
    localStorage.setItem(hour6, $('#text6').val());
  });
  
  $('#btn7').click(function() {
    if($('#text7').val()) {
      localStorage.removeItem('text7');
    }
  
    const seventhHourString = JSON.stringify(seventhHour);
  
    localStorage.setItem(hour7, $('#text7').val());
  })
  
  $('#btn8').click(function() {
    if($('#text8').val()) {
      localStorage.removeItem('text8');
    }
  
    const eighthHourString = JSON.stringify(eighthHour);
  
    localStorage.setItem("text8", $('#text8').val());
  })
  
  $('#btn9').click(function() { 
    if($('#text9').val()) {
      localStorage.removeItem('text9');
    }
  
    const ninthHourString = JSON.stringify(ninthHour);
  
    localStorage.setItem(hour9, $('#text9').val());
  })
  
   



   // Persist events between refreshes of a page