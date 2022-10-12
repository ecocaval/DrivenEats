

$('.main_dish').click(
    function() {
        
        // checks if current dish has check mark

        if ( !($('.main_dish .dish_check').attr("class").includes('dish_check_appear'))) {

            $('.main_dish').each(
                function(index, element){
                    $(this).find(".dish_check").addClass('dish_check_appear');
                    $(this).find(".dish_check").removeClass('dish_check_disappear')
                    $(this).addClass('dish_box_check')
                }
            )

        } else {
            // removes check mark and green borders from current dish
           
            $('.main_dish').each(
                function(index, element){
                    $(this).find(".dish_check").removeClass('dish_check_appear');
                    $(this).find(".dish_check").addClass('dish_check_disappear')
                    $(this).removeClass('dish_box_check')
                }
            )

        }
    }
);




