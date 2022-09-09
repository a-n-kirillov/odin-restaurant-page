function createMenuList() {
    const menuList = document.createElement('ol');
    menuList.setAttribute('id', 'menu');
    return menuList;
}

function createMenuItem(title, price, description) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    const menuItemTitle = createMenuItemTitle(title);
    const menuItemPrice = createMenuItemPrice(price);
    const menuItemDescription = createMenuItemDescription(description);

    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemDescription);
    
    return menuItem;
}

function createMenuItemTitle(title) {
    const menuItemTitle = document.createElement('h3');
    menuItemTitle.classList.add('menu-item-title');
    menuItemTitle.textContent = title;
    
    return menuItemTitle;
}

function createMenuItemDescription(description) {
    const menuItemDescription = document.createElement('p');
    menuItemDescription.classList.add('menu-item-description');
    menuItemDescription.textContent = description;
    
    return menuItemDescription;
}

function createMenuItemPrice(price) {
    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.textContent = price;
    
    return menuItemPrice;
}

function linkMenuToPage(menu) {
    const pageContent = document.querySelector('#content');
    pageContent.appendChild(menu);
}

export default function loadMenu() {
    const menuList = createMenuList();
    linkMenuToPage(menuList);

    function addMenuItem(title, description, price) {
        const menuItem = createMenuItem(title, price, description);
        menuList.appendChild(menuItem);
    }

    addMenuItem('Salsiccia', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil', '12$');
    addMenuItem('Gamberi', 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil', '9$');
    addMenuItem('Pepe', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil', '8$');
    addMenuItem('Disgustoso', 'Tomato sauce, Bacon, Pineapple, Olives, Basil', '10$');
    addMenuItem('Colorato', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil', '11$');
    addMenuItem('Pomodoro', 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli', '13$');
    addMenuItem('Crema', 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil', '16$');
    addMenuItem('Carne', 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli', '12$');
}