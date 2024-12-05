
$(document).ready(function() 
{
    $("#toolbtnn").click(function() 
    {
        if ($(".toolbr").css("left") === "0px") {
            $(".toolbr").animate({ left: '-300px' }, 250);

            $("#toolbtnn").text("Close");
        } else {

            $(".toolbr").animate({ left: '0px' }, 250);
            $("#toolbtnn").text("More");
        }
    });
});
