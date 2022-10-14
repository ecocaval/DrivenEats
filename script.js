// array variable containing all meals
const dishes = Array.from(document.querySelectorAll('.dish\n\n\n'));

// this function is called when the user clicks a meal
function meal_clicked(meal) {
    const dish_option = meal.classList[1];
    const meal_is_clicked = meal.classList.contains('dish_box_check');

    const option_dishes = Array.from(document.querySelectorAll(`.${dish_option}`));

    // checks if current meal is already clicked, if not enters
    if(!meal_is_clicked) {
        // looks for other meals of the same type that are selected
        look_for_selected_meals(option_dishes);
    }
    
    add_remove_check(meal);

    // checks if order is over, in order to control final order button
    if(check_if_order_is_over()) {
        release_order_button();
    } else {
        hold_order_button();
    }
}

// looks for meals of the same type that are selected, then unselect them
function look_for_selected_meals(dishes_to_look) {
    for(let i = 0; i < dishes_to_look.length; i++) {
        // checks if dish is selected looking for the selected class
        if(dishes_to_look[i].classList.contains('dish_box_check')) {
            add_remove_check(dishes_to_look[i]);
            break;
        }
    }
}

// adds or removes green check box and green check image
function add_remove_check(meal) {
    meal.classList.toggle('dish_box_check');
    meal.childNodes[9].classList.toggle('display_none');
}

// checks if there are 3 meals selected
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

// releases final orden button
function release_order_button() {
    const order_button = document.querySelector('.order_button');
    order_button.classList.add('order_button_ready');
}

// holds final orden button
function hold_order_button() {
    const order_button = document.querySelector('.order_button');
    
    if(order_button.classList.contains('order_button_ready')) {
        order_button.classList.remove('order_button_ready');
    }
}

// releases last screen from order
function release_confirm_section(){
    const order_button = document.querySelector('.order_button');
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    if(order_button.classList.contains('order_button_ready')){
        confirm_section.classList.remove('display_none');
        transparent_background.classList.remove('display_none');
    }
}

function cancel_order(){
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    confirm_section.classList.add('display_none');
    transparent_background.classList.add('display_none');
}

function ask_name_and_adress(){
    let name = prompt("Por favor digite o seu nome: ");
    let addres = prompt("Por favor digite o seu endereço: ");

    console.log(`nome: ${name}\nendereço: ${addres}`);
}


