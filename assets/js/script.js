// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var projectDisplayEl = $('.container');
   
var currDate = moment().format("dddd, MMMM Do");
timeDisplayEl.text(currDate);
  
for (let i = 0; i < 9; i++) {
    // sets the hour for this 
    var thisHr = i + 9;

    // adds table row
    var sss = $("<tr>").addClass("row time-block");

    // gets current hour and compares against this hour in the loop
    if (moment().format("H") > thisHr) {
        sss.addClass("past");
    } else if (moment().format("H") <  thisHr) {
        sss.addClass("future");
    } else {
        sss.addClass("present");
    }
    sss.attr("hr", thisHr);

    // adds text area for this timeblock
    var desc = $("<textarea>").addClass("col-lg-10");

    // if in localstorage then show
    if (localStorage.getItem("hour-" + thisHr) ) {
        desc.text(localStorage.getItem("hour-" + thisHr));
    } else {
        desc.text("");
    }

    // adds cell for the hour
    var hr = $('<td>').addClass('col-lg-1 hour');

    // adds correct AM OR PM
    if (thisHr < 12) {
        hr.text(thisHr + "AM");
    } else if (thisHr > 12) {
        hr.text((thisHr - 12) + "PM");
    } else {
        hr.text(thisHr + "PM");
    }
     
    // adds cell for save button
    var saveProjectBtn = $('<i>').addClass('fa-solid fa-floppy-disk ');
    var btn  = $('<button>').addClass("block ");
    btn.attr("type","button");
    var saveProject  = $('<td>').addClass('col-lg-1 saveBtn '); 

    // appends button to saveBtn cell
    btn.append(saveProjectBtn);
    saveProject.append(btn);

    // appends to table row and then display
    sss.append(hr, desc, saveProject);
    projectDisplayEl.append(sss);
}
 
function handleSave(event) {
    // gets target of click and the parent timeblock
    var targ = $(event.target);
    var outerTR = targ.closest('tr');
 
    // takes the hour and text from the triggered timeblock
    var hour = outerTR.attr("hr");
    var content = outerTR.children('textarea').val().trim();

    localStorage.setItem("hour-" + hour, content);
}

$("button").on('click', handleSave);