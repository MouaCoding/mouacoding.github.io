//jQuery('.box').hide();
//$('.box').hide();
//$('.box').show();
/*
// Click event:
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    alert("Hello");
});

//Jquery click
$('.box').click(function () {
    alert('Hello');
});
*/

//Fade in a message, delay it 3s, and fade out
//$('#flashMessage')    .hide()    .fadeIn(1000)    .delay(3000).fadeOut();

//$('#flashMessage').html(); //get the content
//$('#flashMessage').html("Just Changed this yo."); // set the content can also use text()

var title = "My First Post";
var content = "this is my first post man, nice day.";

$('#Jtitle').html(title);
$('#content').html(content);

$('#flashMessage').hide();
$('#previewButton').click(function () {
    $('#contentParagraph').text($('#inputContent').val());
    $('#flashMessage').hide().fadeIn(1000).delay(3000).fadeOut();
});

