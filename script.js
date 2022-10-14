const dishes = Array.from(document.querySelectorAll('.dish\n\n\n'));

function meal_clicked(meal) {
    const dish_option = meal.classList[1];
    const meal_is_clicked = meal.classList.contains('dish_box_check');

    const option_dishes = Array.from(document.querySelectorAll(`.${dish_option}`));

    if(!meal_is_clicked) {
        look_for_selected_meals(option_dishes);
    }
    
    add_remove_check(meal);
}

function look_for_selected_meals(dishes_to_look) {
    for(let i = 0; i < dishes_to_look.length; i++) {
        if(dishes_to_look[i].classList.contains('dish_box_check')) {
            dishes_to_look[i].classList.toggle('dish_box_check');
            dishes_to_look[i].childNodes[9].classList.toggle('display_none');
            break;
        }
    }
}

function add_remove_check(meal) {
    meal.classList.toggle('dish_box_check');
    meal.childNodes[9].classList.toggle('display_none');
}


// JQUERY SOLUTION -- NOT VALID FOR DELIVERING THE PROJECT
// // function starts when users click any dish
// $(dishes).click(
//     function() {      
//         // gets the class of the dish being clicked
//         let class_name = this.className.slice(5);
//         // used to control if this type of dish was marked before
//         let found_check_marks = false;

//         // console.log(class_name);

//         $(`.${class_name}`).each(
//             function(_, element) {
//                 if(element.classList.value.includes('dish_box_check')) {
//                     $(element).find(".dish_check").removeClass('dish_check_appear');
//                     $(element).find(".dish_check").addClass('display_none');
//                     $(element).removeClass('dish_box_check');
//                 }
//             }
//         )        

//         // check's if selector has check mark
//         if(!found_check_marks) {     
//             // adds check mark to selector
//             $(this).find(".dish_check").addClass('dish_check_appear');
//             $(this).find(".dish_check").removeClass('display_none');
//             $(this).addClass('dish_box_check');     
//         } else {
//             // removes check mark from selector
//             $(this).find(".dish_check").removeClass('dish_check_appear');
//             $(this).find(".dish_check").addClass('display_none');
//             $(this).removeClass('dish_box_check');
//         }

//         //check if last button can be completed
//         console.log(check_for_final_button());

//         if(check_for_final_button()) {
//             $('.button_not_ready').addClass("display_none");
//             $('.button_ready').removeClass("display_none");
//         }
//     }
// );

// function check_for_final_button() {

//     let class_has_check_mark = [false,false,false];
//     let can_change_button = true;

//     const all_classes_to_check = ['main_dish', 'drink_dish', 'dessert_dish'];

//     for (let i = 0; i < all_classes_to_check.length; i++) {
//         $(`.${all_classes_to_check[i]}`).each(
//             function(_, element) {
//                 if(element.classList.value.includes('dish_box_check')) {
//                     class_has_check_mark[i] = true;
//                     return;
//                 }
//             }
//         )
//     }

//     for(let i = 0; i < class_has_check_mark.length; i++) {
//         if(class_has_check_mark[i] === false) can_change_button = false;
//     }

//     return can_change_button;
// }