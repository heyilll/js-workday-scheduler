// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var projectDisplayEl = $('.container');
   
var currDate = moment().format("dddd, MMMM Do");
timeDisplayEl.text(currDate);
  
// for (let i = 0; i < 9; i++) {
//     var thisHr = i + 9;
//     var sss = $("<tr>").addClass("row time-block");

//     var desc = $("<textarea>").addClass("col-lg-10");

//     if (moment().format("H") > thisHr) {
//         sss.addClass("past");
//     } else if (moment().format("H") <  thisHr) {
//         sss.addClass("future");
//     } else {
//         sss.addClass("present");
//     }

//     // if in localstorage then show
//     if (localStorage.getItem("hour-" + thisHr) ) {
//         desc.text(localStorage.getItem("hour-" + thisHr));
//     } else {
//         desc.text("");
//     }

//     var hr = $('<td>').addClass('col-lg-1 hour').text(thisHr);
//     hr.attr("hr", thisHr);

//     var saveProjectBtn = $('<i>').addClass('fa-solid fa-floppy-disk ');
//     var btn  = $('<button>').addClass("block");
//     btn.attr("type","button");
//     var saveProject  = $('<td>').addClass('saveBtn col-lg-1');  

//     btn.append(saveProjectBtn);
//     saveProject.append(btn);
//     sss.append(hr, desc, saveProject);
//     projectDisplayEl.append(sss);
// }
 
// function handleSave(event) {
//     var targ = event.target;
 
//     var hour = targ.attr("hr");
//     var content = targ.val().trim();
//     localStorage.setItem("hour-" + hour, content);
  
 
// }

// $("button").on('click', handleSave);