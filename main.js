'use strict';

let foodArray = ['Skillet Stew', 'Potatoes', 'Spaghetti Burgers', 'Rice', 'Cat Food Casserole', 'Parrot Panini', 'Fetal Pig Fetuccini']

const foodMenu = (n) => {
    let menuArray = [];
    for (let i=0; i < n.length; i++) {
        menuArray[i] = `<span style = "font-size: 24px;">` + n[i] + `</span><br/>`

    }
    return menuArray;
}
let textHtml = '';
let menu = foodMenu(foodArray);
for (let i = 0; i < menu.length; i++) {
    textHtml += menu[i];
}
document.getElementById('menu').innerHTML = textHtml;

const foodSum = () => {
    let foodOrders = 
        {
            'Skillet Stew': 2,
            'Potatoes': 3,
            'Spaghetti Burgers': 1,
            'Rice': 3,
            'Cat Food Casserole': 5,
            'Parrot Panini': 4,
            'Fetal Pig Fetuccini': 3
        }
    
    let total = 0;
    
    for (let [key, value] of Object.entries(foodOrders)) {
        total += value
        console.log(foodOrders[key].value)
    
    }
    return total;
}
document.getElementById('menu').innerHTML += foodSum();


