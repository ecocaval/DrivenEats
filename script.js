const dishes = Array.from(document.querySelectorAll('.dish\n\n\n'));

function meal_clicked(meal) {
    const dish_option = meal.classList[1];
    const meal_is_clicked = meal.classList.contains('dish_box_check');

    const option_dishes = Array.from(document.querySelectorAll(`.${dish_option}`));

    if(!meal_is_clicked) {
        look_for_selected_meals(option_dishes);
    }
    
    add_remove_check(meal);

    if(check_if_order_is_over()) {
        release_order_button();
    } else {
        hold_order_button();
    }
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

function check_if_order_is_over() {
    let meals_selected = 0;
    for(let i = 0; i < dishes.length; i++) {
        if(dishes[i].classList.contains('dish_box_check')) {
            meals_selected++;
        }
    }
    if(meals_selected === 3) {
        return true;
    }
    return false;
}

function release_order_button() {
    const order_button = document.querySelector('.order_button');
    order_button.classList.add('order_button_ready');
}

function hold_order_button() {
    const order_button = document.querySelector('.order_button');
    
    if(order_button.classList.contains('order_button_ready')) {
        order_button.classList.remove('order_button_ready');
    }
}



