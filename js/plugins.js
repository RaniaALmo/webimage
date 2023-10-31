$(document).ready(function(){    
    
    // Nice Scroll
    
     $("html").niceScroll();
    
 $('.carousel').carousel({
  interval: 500
});
    
// Show Color Option Div When Click On The Gear

$(".gear-check").click(function()
{
   $(".color-option").fadeToggle(); 
});

    //Change Theme Color On Click
    
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#908afb").end()
    .eq(2).css("backgroundColor","#a463ef").end()
    .eq(3).css("backgroundColor","#c6a614").end()
    .eq(4).css("backgroundColor","#4ac614");
    
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));   
    });
    
    // Cashing The Scroll Top Element
    
    var ScrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 700)
           {
                ScrollButton.show();
           }
           else
           {
                ScrollButton.hide();
           }
    });
    
        // Click On Button To Scroll Top
        
        ScrollButton.click(function()
        {
            $("html,body").animate({scrollTop : 0}, 600);    
        });
});

// Loading Screen

$(window).load(function()
{
    
    // Loading Elements
    
    $(".loading .sk-chase").fadeOut(2000,
    function()
    {
        $(this).parent().fadeOut(2000);
        
        // Show The Scroll
        $("body").css("overflow","auto");    
    });
});











