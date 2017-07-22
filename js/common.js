$(function() {

    $("#callback").submit(function() {
        var answer = document.getElementById('past');
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("#callback").serialize(),
            statusCode: {
                400: function() {
                    answer.innerHTML = "Bad Request";
                },
                403: function() {
                    answer.innerHTML = "Forbidden";
                },
                404: function() {
                    answer.innerHTML = "Page not found";
                },
                200: function() {
                    answer.innerHTML = "Спасибо!<br/>Ваша заявка отправлена!";
                },
                500: function() {
                    answer.innerHTML = "Server Error";
                },
                501: function() {
                    answer.innerHTML = "Not Implemented";
                },
                502: function() {
                    answer.innerHTML = "Bad Gateway";
                },
                503: function() {
                    answer.innerHTML = "Service Unavailable";
                },
                504: function() {
                    answer.innerHTML = "Gateway Timeout";
                }
            }
        }).done(function() {
            alert('Отправлено!')
            $("#callback").trigger("reset");
        });
        return false;
    });

});

$(document).ready(function(){
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolledY = $(window).scrollTop();
        $('body').css('background-position','center -'+((scrolledY*0.2))+'px');
        $('.parallax-bg1').css('top','-'+((scrolledY*0.5))+'px');
        $('.parallax-bg2').css('top','-'+((scrolledY*0.8))+'px');
    }

});