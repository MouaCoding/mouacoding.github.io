
var id = "but";
var button = document.getElementById(id);
button.addEventListener("click", function () {
    var title = document.getElementById("title");
    title.innerHTML = document.getElementById("myTextBox").value;
});

//Setting the Input type to a checkbox
document.getElementById("myTextBox").type = 'checkbox';
document.getElementById("myTextBox").type = 'date'; //Date Picker
document.getElementById("myTextBox").type = 'file'; //choose file
document.getElementById("myTextBox").type = 'range'; //slider
document.getElementById("myTextBox").type = 'password'; //characters are hidden


var selectParagraphs = document.getElementsByTagName('p');
//selectParagraphs[0].style.color = 'blue';

var selectClass = document.getElementsByClassName('picture');

//returns the first selector li
var listTag = document.querySelector('li');
// selector to match the id: myID
listTag = document.querySelector('#myID');
//Select even numbers
listTag = document.querySelectorAll('li:nth-child(even)');

//select all images in footer
var footerImages = document.querySelectorAll('footer img');





