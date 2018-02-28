


function add(x, y)
{
    return x + y;
}

function substitute() {
    var myValue = document.getElementById('myTextBox').value; //Gets the value of the element by its id
    //Get the id named myTextBox below
    if (myValue.length == 0) //if the number of characters equal 0
    {
        alert('Please enter a real value in the text box.'); //Warn user if nothing is entered
        return;
    }
    var myTitle = document.getElementById('title');
    myTitle.innerHTML = myValue;
}



function linkedinConfirm() {
    if (confirm('Do you want to go to Matthew\'s LinkedIn?')) {
        window.location = 'https://www.linkedin.com/in/matthew-moua-545090122/';
    } else {
        return false;
    }
}
function githubConfirm() {
    if (confirm('Do you want to go to Matthew\'s Github?')) {
        window.location = 'https://github.com/mouacoding';
    } else {
        return false;
    }
}

function getYear(id) {
    var year = new Date().getFullYear();
    document.getElementById(id).innerHTML = Date();
}





//useful array methods: .indexOf - returns -1 if not in else returns index
//.join .concat

//for (var value in objectName){console.log(value, ": ", objectName[value]} Prints out the whole object and their values

//$().eq(index). next or prev or chain it

//$(:odd) select all odd numbers
//$('a').attr("target", "_blank") set all links to open in a new tab
const $pdfs = $('a[href$=".pdf"]'); //find all pdfs
$pdfs.attr('download', true); //download ALL pdf links
//$pdfs.on('click', function (e) {e.preventDefault();});
//get paragraph index: $(p).each(function(index){ })



//Jquery calls

/*
//Hide skills content until image is clicked
$('#efficientContent').hide();
$('#efficient').hover(function () {
    $('#efficientContent').fadeIn(1000);
});
$('#hardContent').hide();
$('#hardworker').hover(function () {
    $('#hardContent').fadeIn(1000);
});

$('#reliableContent').hide();
$('#reliable').hover(function () {
    $('#reliableContent').fadeIn(1000);
});

$('#responsiveContent').hide();
$('#responsive').hover(function () {
    $('#responsiveContent').fadeIn(1000);
});
*/

//Animate skills
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2600) {
        $('#skillGroup').ready(function () {
            $('.js').css('width', '75%');
            $('.css').css('width', '65%');
            $('.html').css('width', '80%');
            $('.jquery').css('width', '75%');
            $('.android').css('width', '90%');
            $('.python').css('width', '75%');
            $('.c').css('width', '55%');
            $('.r').css('width', '70%');
            $('.firebase').css('width', '90%');
            $('.gma').css('width', '90%');
            $('.gmga').css('width', '75%');
            $('.gmpa').css('width', '75%');
            $('.dsa').css('width', '85%')
        });
    }
});


$('#project-title-list').hover(function (e) {
    var offset = $(this).offset();
    var x = (e.pageX - offset.left);
    $('#project-title-list div').css('background-position',x+'px');
    $('#project-title-list').css('background-color','blue');
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 6850) {
        $('.animation-element').ready(function () {
            $('.animation-element.a1')
                .css({'transition': 'all .5s linear',
                'transform': 'translateY(5%)',
                'margin-right': '20px',
                'opacity': '1'
                });
            $('.animation-element')
                .css({
                    'margin-top': '20px'
                });
                
        });
    } else {
        $('.animation-element')
                .css({
                    'transform': 'translateY(-500px)',
                    'opacity': '0'
                });
    }

    if ($('.animation-element.a1').css('opacity') == 1) {
        $('.animation-element.a2')
                .css({
                    'transition': 'all .5s linear',
                    'margin-right': '20px',
                    'transform': 'translateY(5%)',
                    'opacity': '1'
                });
    }
    if ($('.animation-element.a2').css('opacity') == 1) {
        $('.animation-element.a3')
                .css({
                    'transition': 'all .5s linear',
                    'margin-right': '20px',
                    'transform': 'translateY(5%)',
                    'opacity': '1'
                });
    }
    if ($('.animation-element.a3').css('opacity') == 1) {
        $('.animation-element.a4')
                .css({
                    'transition': 'all .5s linear',
                    'margin-right': '20px',
                    'transform': 'translateY(5%)',
                    'opacity': '1'
                });
    }
    if ($('.animation-element.a4').css('opacity') == 1) {
        $('.animation-element.a5')
                .css({
                    'transition': 'all .5s linear',
                    'margin-right': '20px',
                    'transform': 'translateY(5%)',
                    'opacity': '1'
                });
    }
    if ($('.animation-element.a5').css('opacity') == 1) {
        $('.animation-element.a6')
                .css({
                    'transition': 'all .5s linear',
                    'transform': 'translateY(5%)',
                    'opacity': '1'
                });
    }
    if ($('.animation-element.a6').css('opacity') == 1) {
        $('#stormi-description')
                .css({
                    'transition': 'all .5s linear',
                    'transform': 'translateY(200%)',
                    'opacity': '1'
                });
    }


});


$('.quotes').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
});














