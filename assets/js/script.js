// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var projectDisplayEl = $('.container');
   
// sets and displays current day
var currDate = moment().format("dddd, MMMM Do");
timeDisplayEl.text(currDate);
  
// creates each timeblock from 9 to 5 
for (let i = 0; i < 9; i++) {
    // sets the hour for this specific loop
    var thisHr = i + 9;

    // adds table row
    var sss = $("<div>").addClass("row time-block");

    // gets current hour and compares against this hour in the specific loop
    if (moment().format("H") > thisHr) {
        sss.addClass("past");
    } else if (moment().format("H") <  thisHr) {
        sss.addClass("future");
    } else {
        sss.addClass("present");
    }

    // saves the specific hour to a new attribute called hr
    sss.attr("hr", thisHr);

    // adds text area for this timeblock
    var desc = $("<textarea>").addClass("col-lg-10");

    // if in localstorage then show saved content else show nothing
    if (localStorage.getItem("hour-" + thisHr) ) {
        desc.text(localStorage.getItem("hour-" + thisHr));
    } else {
        desc.text("");
    }

    // adds div for the hour
    var hr = $('<div>').addClass('col-lg-1 hour');

    // adds correct AM OR PM
    if (thisHr < 12) {
        hr.text(thisHr + "AM");
    } else if (thisHr > 12) {
        hr.text((thisHr - 12) + "PM");
    } else {
        hr.text(thisHr + "PM");
    }
     
    // adds div for save button
    var saveProjectBtn = $('<i>').addClass('fa-solid fa-floppy-disk ');
    var saveProject  = $('<button>').addClass('col-lg-1 saveBtn block'); 

    // appends button 
    saveProject.append(saveProjectBtn);

    // appends to div and displays
    sss.append(hr, desc, saveProject);
    projectDisplayEl.append(sss);
}
 
function handleSave(event) {
    // gets target of click and the parent timeblock
    var targ = $(event.target);
    var outerTR = targ.closest('div');
 
    // takes the hour and text from the triggered timeblock and saves to local storage
    var hour = outerTR.attr("hr");
    var content = outerTR.children('textarea').val().trim();
    localStorage.setItem("hour-" + hour, content);
}

// event listener for save button clicks
$("button").on('click', handleSave);