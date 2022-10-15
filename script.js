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
    // checks the names and prices of the meals that are selected 
    // [0] names, [1] prices
    const meals_names_selected = check_for_meals_selected()[0];
    const meals_prices_selected = check_for_meals_selected()[1];

    // arrays containing all html tags elements
    const meals_names = Array.from(document.querySelectorAll('.last_meal_name'));
    const meals_prices = Array.from(document.querySelectorAll('.last_meal_price')); 
    const meal_total_price_select = document.querySelector('.last_meal_total_price');
    const order_button = document.querySelector('.order_button');
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    // changes the last screen parameters based on the meals selected
    change_confirm_section_param(meals_names_selected, meals_names, meals_prices_selected, meals_prices);

     // changes the total price value in the HTML
    meal_total_price_select.innerHTML = calculate_order_total_price(meals_prices_selected, );

    if(order_button.classList.contains('order_button_ready')){
        confirm_section.classList.remove('display_none');
        transparent_background.classList.remove('display_none');
    }
}

function change_confirm_section_param(meals_names_selected, meals_names, meals_prices_selected, meals_prices){
    change_meals_names(meals_names_selected, meals_names);
    change_meals_prices(meals_prices_selected, meals_prices)
}

function change_meals_names(meals_names_selected, meals_names){
    for(let i = 0; i < meals_names_selected.length; i++) {
        meals_names[i].innerHTML = meals_names_selected[i];
    }
}

function change_meals_prices(meals_prices_selected, meals_prices){
    for(let i = 0; i < meals_prices_selected.length; i++) {
        meals_prices[i].innerHTML = meals_prices_selected[i];
    }
}

function calculate_order_total_price(meals_prices_selected){
        // calculate the total price of the meal
        let total_price = 0;
        for(let i = 0; i < meals_prices_selected.length; i++) {
            total_price += Number(meals_prices_selected[i]);
        }
        total_price = total_price.toFixed(2); 
        
        return total_price;        
}

function cancel_order(){
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    confirm_section.classList.add('display_none');
    transparent_background.classList.add('display_none');
}

function ask_name_and_adress(){
    // checks the names of the meals that are selected [0] names, [1] prices
    const meals_names_selected = check_for_meals_selected()[0];
    
    const name = prompt("Por favor digite o seu nome: ");    
    const addres = prompt("Por favor digite o seu endereço: ");

    let text_to_send = `Olá, gostaria de fazer o pedido:
    - Prato: ${meals_names_selected[0]}
    - Bebida: ${meals_names_selected[1]}
    - Sobremesa: ${meals_names_selected[2]}
    Total: R$ 27.70
    
    Nome: ${name}
    Endereço: ${addres}`;

    text_to_send = encodeURIComponent(text_to_send);

    window.open(`https://wa.me/554891427605?text=${text_to_send}`);
}

// checks the names of the meals that are selected
function check_for_meals_selected() {
    let meals_selected_names = [];
    let meals_selected_prices = [];

    for(let i = 0; i < dishes.length; i++) {
        if(dishes[i].classList.contains('dish_box_check')) {
            meals_selected_names.push(dishes[i].childNodes[3].innerHTML);
            meals_selected_prices.push((dishes[i].childNodes[7].innerHTML.slice(3)).replace(",","."));
            
        }
    }    
    // creates a matrix with all meals selected info
    const meals_info = [meals_selected_names, meals_selected_prices];   

    return meals_info;
}


