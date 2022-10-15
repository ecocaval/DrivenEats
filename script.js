// array variable containing all meals
const dishes = Array.from(document.querySelectorAll('.dish\n\n\n'));

// called when the user clicks a meal
function meal_clicked(meal) {
    // gets the second class of the meal being clicked, in this case it can be main, drink or dessert
    const dish_option = meal.classList[1];
    const meal_is_clicked = meal.classList.contains('dish_box_check');

    const option_dishes = Array.from(document.querySelectorAll(`.${dish_option}`));

    // checks if current meal is already clicked, if not, enters the condition
    if(!meal_is_clicked) {
        // looks for other meals of the same type that are selected
        look_for_selected_meals(option_dishes);
    }
    
    // adds or removes green check in dish div and green check image
    add_remove_check(meal);

    // checks if order is over to control final order button
    if(check_if_order_is_over()) {
        // changes button classes so it turns green, also changes it's text  
        release_order_button();
    } else {
        hold_order_button();
    }
}

// looks for meals of the same type that are selected, then unselect them
function look_for_selected_meals(dishes_to_look) {
    for(let i in dishes_to_look) {
        // checks if dish is selected looking for the selected box class
        if(dishes_to_look[i].classList.contains('dish_box_check')) {
            // adds or removes green check in dish div and green check image
            add_remove_check(dishes_to_look[i]);
            // breaks the function since just only one meal can be selected
            break;
        }
    }
}

// adds or removes green check in dish div and green check image
function add_remove_check(meal) {
    meal.classList.toggle('dish_box_check'); // green box in meal div
    meal.childNodes[9].classList.toggle('display_none'); // green check
}

// checks if there are 3 meals selected
function check_if_order_is_over() {
    let meals_selected = 0;
    for(let i in dishes) {
        if(dishes[i].classList.contains('dish_box_check')) {
            meals_selected++;
        }
    }
    // the order is only considered finished if 3 meals are selected
    return (meals_selected === 3);
}

// 'releases' final orden button, turning it green and changing it's text
function release_order_button() {
    const order_button = document.querySelector('.order_button');

    order_button.classList.add('order_button_ready');
    order_button.innerHTML = 'Fechar o pedido';
}

// 'holds' final orden button
function hold_order_button() {
    const order_button = document.querySelector('.order_button');
    
    // if necessary removes the button's ready class if a meal was deselected 
    if(order_button.classList.contains('order_button_ready')) {
        order_button.classList.remove('order_button_ready');
        order_button.innerHTML = 'Selecione os 3 itens \n para fechar o pedido';
    }
}

// displays the last screen from the meals order, entering the confirmation section
function release_confirm_section(){
    // checks the names and prices of the meals that are selected 
    // check_for_meals_selected is a matrix that returns: [0] names, [1] prices
    const meals_names_selected = check_for_meals_selected()[0];
    const meals_prices_selected = check_for_meals_selected()[1];

    // constants containing all html elements necessary for confirmation screen logic
    const meals_names = Array.from(document.querySelectorAll('.final_order_meal_name'));
    const meals_prices = Array.from(document.querySelectorAll('.final_order_meal_price')); 
    const meal_total_price = document.querySelector('.final_order_meal_total_price');
    const order_button = document.querySelector('.order_button');
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    // changes the last screen parameters based on the meals selected
    change_confirm_section_param(meals_names_selected, meals_names, meals_prices_selected, meals_prices);

     // changes the total price value in the HTML
    meal_total_price.innerHTML = calculate_final_order_total_price(meals_prices_selected);

    // removes the display_none class from the confirmation screen, also adds opacity to the background
    if(order_button.classList.contains('order_button_ready')){
        confirm_section.classList.remove('display_none');
        transparent_background.classList.remove('display_none');
    }
}

/*
    Changes the inner text from the html elements from the last confirmation 
    screen the parameters are taken from the meals that were selected
*/
function change_confirm_section_param(meals_names_selected, meals_names, meals_prices_selected, meals_prices){
    change_meals_names(meals_names_selected, meals_names);
    change_meals_prices(meals_prices_selected, meals_prices);
}

// changes the inner text from the html elements containing the meals names in the last confirmation screen
function change_meals_names(meals_names_selected, meals_names){
    for(let i in meals_names_selected) {
        meals_names[i].innerHTML = meals_names_selected[i];
    }
}

// changes the inner text from the html elements containing the meals prices in the last confirmation screen
function change_meals_prices(meals_prices_selected, meals_prices){
    for(let i in meals_prices_selected) {
        meals_prices[i].innerHTML = meals_prices_selected[i];
    }
}

// calculates the order total price by adding the dishes selected prices
function calculate_final_order_total_price(meals_prices_selected){
        // calculate the total price of the meal
        let total_price = 0;

        for(let i in meals_prices_selected) {
            // the meals_prices array has string elements, so we must convert it
            total_price += Number(meals_prices_selected[i]);
        }
        // controls the quantity of decimal numbers being displayed
        total_price = total_price.toFixed(2); 
        
        return total_price;        
}

// called when user clicks the 'Cancelar' button in the last confirmation screen
function cancel_order(){
    const confirm_section = document.querySelector('.confirm_section');
    const transparent_background = document.querySelector('.transparent_background');

    // adds the display_none class to confirmation screen and transparent background, erasing them
    confirm_section.classList.add('display_none');
    transparent_background.classList.add('display_none');
}

function ask_name_and_adress(){
    // checks the names and prices of the meals that are selected 
    // check_for_meals_selected returns [0] names, [1] prices
    const meals_names_selected = check_for_meals_selected()[0];
    const meals_prices_selected = check_for_meals_selected()[1];
    
    // gets user name and adress
    const name = prompt("Por favor digite o seu nome: ");    
    const addres = prompt("Por favor digite o seu endereço: ");

    // creates a string containing all order info
    let text_to_send = `Olá, gostaria de fazer o pedido:
    - Prato: ${meals_names_selected[0]}
    - Bebida: ${meals_names_selected[1]}
    - Sobremesa: ${meals_names_selected[2]}
    Total: R$ ${calculate_final_order_total_price(meals_prices_selected)}
    
    Nome: ${name}
    Endereço: ${addres}`;

    // converts the string to a text that can be sent through a whastapp link
    text_to_send = encodeURIComponent(text_to_send);

    // opens the whatsapp website with the message containing all order info
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


