// Main dishes section
const dishes = document.querySelectorAll('.dish');

// function starts when users click any main dish
$(dishes).click(
    function() {      
        // look_for_check_mark_in(this.className[0]) 
        let class_name = this.className.slice(5);
        let found_check_marks = false;

        console.log(class_name);

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
z