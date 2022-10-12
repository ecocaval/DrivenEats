const dishes = document.querySelectorAll('.dish');

// function starts when users click any dish
$(dishes).click(
    function() {      
        // gets the class of the dish being clicked
        let class_name = this.className.slice(5);
        // used to control if this type of dish was marked before
        let found_check_marks = false;

        // console.log(class_name);

        $(`.${class_name}`).each(
            function(_, element) {
                if(element.classList.value.includes('dish_box_check')) {
                    $(element).find(".dish_check").removeClass('dish_check_appear');
                    $(element).find(".dish_check").addClass('dish_check_disappear');
                    $(element).removeClass('dish_box_check');
                }
            }
        )        

        // check's if selector has check mark
        if(!found_check_marks) {     
            // adds check mark to selector
            $(this).find(".dish_check").addClass('dish_check_appear');
            $(this).find(".dish_check").removeClass('dish_check_disappear');
            $(this).addClass('dish_box_check');     
        } else {
            // removes check mark from selector
            $(this).find(".dish_check").removeClass('dish_check_appear');
            $(this).find(".dish_check").addClass('dish_check_disappear');
            $(this).removeClass('dish_box_check');
        }
    }
);