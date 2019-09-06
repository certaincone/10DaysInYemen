
$(document).ready(function () {

    var currentValue = 25000;

    function subtractThis(price) {
        currentValue = currentValue - price;


        //this is for updating value in DOM
        $('.digits').text(currentValue);

    }

    $('.clean-water').click(function () {
        subtractThis(9000); // value can be changed to any number

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';
        }

    });

    $('#food').click(function () {
        subtractThis(1700); // value can be changed to any number

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';


        }
    });

    $('#boat').click(function () {
        subtractThis(4500); // value can be changed to any number

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';


        }
    });

    $('.buy1').click(function () {
        subtractThis(1000);

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';


        }
    });

    $('.buy2').click(function () {
        subtractThis(1000);

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';


        }
    });

    $('.buy3').click(function () {
        subtractThis(1000);

        if (currentValue <= 0) {
            window.location.href = 'lose_page.html';


        }
    });


    // Note
    $('.dirty-water').click(function () {
        $('#note1').addClass('fadeIn');
        $('.next1').addClass('fadeIn');
        $('#heading3').addClass('fadeOut');
        $('#text3').addClass('fadeOut');
        $('.dirty-water').addClass('fadeOut');
        $('.clean-water').addClass('fadeOut');
    });

    $('.clean-water').click(function () {
        $('#note1').addClass('fadeIn');
        $('.next1').addClass('fadeIn');
        $('#heading3').addClass('fadeOut');
        $('#text3').addClass('fadeOut');
        $('.dirty-water').addClass('fadeOut');
        $('.clean-water').addClass('fadeOut');
    });

    $('.next1').click(function () {
        $('#buy-food1').addClass('fadeIn');
        $('.buy1').addClass('fadeIn');
        $('.no_buy1').addClass('fadeIn');
        $('#note1').addClass('fadeOut');
        $('.next1').addClass('fadeOut');

    })

    $('.buy1').click(function () {
        $('#buy-food1').addClass('fadeOut');
        $('.buy1').addClass('fadeOut');
        $('.no_buy1').addClass('fadeOut');
        $('.container_4').addClass('fadeIn');
        $(".container_5").css("z-index", -2);

    })

    $('.no_buy1').click(function () {
        $('#buy-food1').addClass('fadeOut');
        $('.buy1').addClass('fadeOut');
        $('.no_buy1').addClass('fadeOut');
        $('.container_4').addClass('fadeIn');
        $(".container_5").css("z-index", -2);
    })

    $('#food').click(function () {
        $('#heading4').addClass('fadeOut');
        $('#text4').addClass('fadeOut');
        $('.food').addClass('fadeOut');
        $('.no-food').addClass('fadeOut');
        $('#note2').addClass('fadeIn');
        $('.next2').addClass('fadeIn');
        $(".container_5").css("z-index", +2);
    
    });

    $('#no-food').click(function () {
        $('#heading4').addClass('fadeOut');
        $('#text4').addClass('fadeOut');
        $('.food').addClass('fadeOut');
        $('.no-food').addClass('fadeOut');
        $('#note2').addClass('fadeIn');
        $('.next2').addClass('fadeIn');
        $(".container_5").css("z-index", +2);
      
    });

    $('.next2').click(function () {
        $('#buy-food2').addClass('fadeIn');
        $('.buy2').addClass('fadeIn');
        $('.no_buy2').addClass('fadeIn');
        $('#note2').addClass('fadeOut');
        $('.next2').addClass('fadeOut');

    })

    $('.buy2').click(function () {
        $('#buy-food2').addClass('fadeOut');
        $('.buy2').addClass('fadeOut');
        $('.no_buy2').addClass('fadeOut');
        $('.container_5').addClass('fadeIn');
    })

    $('.no_buy2').click(function () {
        $('#buy-food2').addClass('fadeOut');
        $('.buy2').addClass('fadeOut');
        $('.no_buy2').addClass('fadeOut');
        $('.container_5').addClass('fadeIn');

    })
      
    $('#boat').click(function () {
        $('#heading5').addClass('fadeOut');
        $('#text5').addClass('fadeOut');
        $('.footprints').addClass('fadeOut');
        $('.boat').addClass('fadeOut');

        window.location.href = 'win_page.html';
       
    });
   
    $('.buy3').click(function () {
        $('#buy-food3').addClass('fadeOut');
        $('.buy3').addClass('fadeOut');
        $('.no_buy3').addClass('fadeOut');
        $('.container_6').addClass('fadeIn');
        
        window.location.href = 'win_page.html';
    })

    $('.no_buy3').click(function () {
        $('#buy-food3').addClass('fadeOut');
        $('.buy3').addClass('fadeOut');
        $('.no_buy3').addClass('fadeOut');
        
        window.location.href = 'win_page.html';
    }) 
    
    

});