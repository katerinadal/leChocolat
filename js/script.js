//alert("working");

$(document).ready(function(){

    $("#mycarousel").carousel( { interval: 500 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });

});