

$(document).ready(function () {

    var modal = $('#draw').modal('show');
    setTimeout(function () { modal.modal('hide'); }, 2000);
});

$('.carousel').carousel({
    interval: 5000
});

$('#toggle-animation').on('click', function () {
    if ($('#circle').css('opacity') == 1) {
        $('#circle').css('opacity', '0');
        $('#circle2').css('opacity', '0');
        $('#circle3').css('opacity', '0');
        $('#circle4').css('opacity', '0');
    } else {
        $('#circle').css('opacity', '1');
        $('#circle2').css('opacity', '1');
        $('#circle3').css('opacity', '1');
        $('#circle4').css('opacity', '1');
    }
});

$('#back-to-top').on('click', function () {
    window.location.href = '#home';
});


    //Animate skills
    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 250) {
            $('#back-to-top').css({ 'opacity': '1' });
        }

        if (height > 4200) {
            $('.projects-animation').css({
                "opacity": "1",
                "animation": "project-title-anim 5s linear forwards"
            });
        }

        if (height > 2300) {
            $('#skill-group').ready(function () {
                $('.js').css('width', '75%');
                $('.css').css('width', '80%');
                $('.html').css('width', '80%');
                $('.jquery').css('width', '75%');
                $('.bootstrap').css('width', '75%');
                $('.ajax').css('width', '70%');
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

    /*
    console.log("HI");
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height);
        $('#back-to-top').ready(function () {
    
        });
        if (height > 250) {
    
            $('#back-to-top').css({'opacity':'1'});
        }
    });
    */



    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 250) {
            $('#stormi-image1').ready(function () {
                $('#stormi-image1')
                    .css({
                        'transition': 'all 3.5s linear',
                        'transform': 'translateY(500px)',
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


    $('#button-draw').click(function () {
        //get animation frame

    });





    $(document).ready(function ($) {

        // set the variables
        var timer;
        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;
        var circle = $("#circle");
        circle.css({ "background-color": "red"});

        var circle2 = $("#circle2");
        circle2.css({ "background-color": "chartreuse" });

        var circle3 = $("#circle3");
        circle3.css({ "background-color": "blue" });

        var circle4 = $("#circle4");
        circle4.css({ "background-color": "cyan" });
    
        function mouseStopped() {
            // if mouse stop moving remove class moving 
            // it will hide the circle with opacity transition                           
            circle.removeClass('moving');
            circle2.removeClass('moving');
            circle3.removeClass('moving');
            circle4.removeClass('moving');
        }

        $(document).mousemove(function (e) {
            // if mouse start moving add class moving
            // it will show the circle with opacity transition 
            circle.addClass('moving');
            circle2.addClass('moving');
            circle3.addClass('moving');
            circle4.addClass('moving');
            // get the mouse position minus 160px to center the circle
            mouseX = e.pageX  ;
            mouseY = e.pageY;
            console.log(mouseY);
            // if mouse stop moving clear timer and call mouseStopped function
            //clearTimeout(timer);
            //timer = setTimeout(mouseStopped, 3000);

        });

        // set the momentum with setInterval function
        var loop = setInterval(function () {
            // change 12 to alter damping higher is slower
            xp += ((mouseX - xp) / 100);
            yp += ((mouseY - yp) / 100);
            circle.css({ left: xp + 'px', top: yp + 'px' });  // 
            circle2.css({ left: xp + 'px', top: yp + 'px', "animation": "orbit 2.52s linear infinite" });
            circle3.css({ left: xp + 'px', top: yp + 'px', "animation": "orbit 2.53s linear infinite" });
            circle4.css({ left: xp + 'px', top: yp + 'px', "animation": "orbit 2.54s linear infinite" });
        }, 10);



    });


