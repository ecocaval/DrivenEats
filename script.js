// function starts when users click any main dish
$(document.querySelectorAll('.dish')).click(
    function() {        
        if(!($(this).find(".dish_check").attr("class").includes('dish_check_appear'))) {
            $(this).find(".dish_check").addClass('dish_check_appear');
            $(this).find(".dish_check").removeClass('dish_check_disappear');
            $(this).addClass('dish_box_check');
        } else {
            $(this).find(".dish_check").removeClass('dish_check_appear');
            $(this).find(".dish_check").addClass('dish_check_disappear');
            $(this).removeClass('dish_box_check');
        }
    }
);