//$('.dish').fadeOut("2000");
    
$('.dish').click(
    function() {
        // checks if current dish has check mark
        if ( !($('.dish_check').attr("class").includes('dish_check_appear'))) {
            // adds check mark to current dish
            $('.dish_check').addClass('dish_check_appear');
            $('.dish_check').removeClass('dish_check_disappear');
            $('.dish').addClass('main_dish');
        } else {
            // removes check mark from current dish
            $('.dish_check').removeClass('dish_check_appear');
            $('.dish_check').addClass('dish_check_disappear');
            $('.dish').removeClass('main_dish');
        }

    }
);


