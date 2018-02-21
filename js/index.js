$(window).on("load",function()
{
    $("#text_shadow1").css("transform", "translateX(5%)");
    $("#text_shadow2").css("transform", "translateX(-5%)");
    setTimeout(function () 
    {
        $("#text_shadow1").css("transform", "translateX(-2%)");
        $("#text_shadow2").css("transform", "translateX(2%)");
        setTimeout(function ()
        {
            $("#text_shadow1").css("transform", "translateX(0)");
            $("#text_shadow2").css("transform", "translateX(0)");
        },2100);
    }, 2100);
});