// Main dishes section
const main_dishes = document.querySelectorAll('.main_dish');

// function starts when users click any main dish
$(main_dishes).click(
    function() {      
        // look_for_check_mark_in(this.className[0]) 
        let class_name = this.className;
        let found_check_marks = false;

        $(`.${class_name}`).each(
            function(index, element) {
                if(element.classList.value.includes('dish_box_check')) {
                    found_check_marks = true;
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

// Main dishes section
const drink_dishes = document.querySelectorAll('.drink_dish');

// function starts when users click any main dish
$(drink_dishes).click(
    function() {      
        // check's if selector has check mark
        if(!($(this).find(".dish_check").attr("class").includes('dish_check_appear'))) {     
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



// Main dishes section
const dessert_dishes = document.querySelectorAll('.dessert_dish');

// function starts when users click any main dish
$(dessert_dishes).click(
    function() {      
        // check's if selector has check mark
        if(!($(this).find(".dish_check").attr("class").includes('dish_check_appear'))) {     
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

