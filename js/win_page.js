
$(document).ready(function(){

    // Menu icon btn
    $('#menu-icon-btn').click(function(){
          $('#menu-bg').addClass('fadeIn');
          $('h1').addClass('fadeIn');
          $('h2').addClass('fadeIn');
          $('h3').addClass('fadeIn');
          $('h4').addClass('fadeIn');
          $('h5').addClass('fadeIn');
          $('#menu-icon-btn').addClass('fadeOut');
    });

    $("h1").click(function(){
        $('#menu-bg').addClass('fadeOut');
        $('h1').addClass('fadeOut');
        $('h2').addClass('fadeOut');
        $('h3').addClass('fadeOut');
        $('h4').addClass('fadeOut');
        $('h5').addClass('fadeOut');
        $('#menu-icon-btn').addClass('fadeIn');
    })

    $("h5").click(function(){
        $('#menu-bg').addClass('fadeOut');
        $('h1').addClass('fadeOut');
        $('h2').addClass('fadeOut');
        $('h3').addClass('fadeOut');
        $('h4').addClass('fadeOut');
        $('h5').addClass('fadeOut');
        $('#menu-icon-btn').addClass('fadeIn');
        $("#about").addClass('fadeIn');
    })


    $('#about').click(function(){
        $("#about").addClass('fadeOut');
    })
});
