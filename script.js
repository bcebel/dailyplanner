$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd MMMM Do hh:mm"));
  var time = dayjs().format("hh:mm:ss");

});
$(".saveBtn").on("click", function () {
  console.log(this);
  var descrip = $(this).siblings(".description").val();
  var clicktime = $(this).parent().attr("id");
  console.log(descrip +'9');
  console.log(clicktime+'9');
  localStorage.setItem(clicktime, descrip)
})
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
function hourTracker() {
  var currentHour = dayjs().format("HH")*-1;
  console.log(currentHour +'25');
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentHour, "these things");
    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }

  })


}
hourTracker();