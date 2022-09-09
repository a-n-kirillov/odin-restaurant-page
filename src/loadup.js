function createHeaderContainer() {
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'header');
    headerContainer.classList.add('text-box');
    return headerContainer;
}

function createLogo() {
    const logo = document.createElement('h1');
    logo.textContent = "Luigi's";
    return logo;
}

function createNavigationWrapper() {
    const navigationWrapper = document.createElement('div');
    navigationWrapper.setAttribute('id', 'nav');
    return navigationWrapper;
}

function createNavigationList() {
    const navigationList = document.createElement('ul');

    const homeButton = document.createElement('li');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('li');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('li');
    contactButton.textContent = 'Contact';

    navigationList.appendChild(homeButton);
    navigationList.appendChild(menuButton);
    navigationList.appendChild(contactButton);
    return navigationList;
}

function createNavigation() {
    const navigationWrapper = createNavigationWrapper();
    const navigationList = createNavigationList();

    navigationWrapper.appendChild(navigationList);
    return navigationWrapper;
}

function createContentWrapper() {
    const contentWrapper = document.createElement('div');
    contentWrapper.setAttribute('id', 'content')
    return contentWrapper;
}

function createHeader() {
    const headerWrapper = createHeaderContainer();
    const logo = createLogo();
    const navigation = createNavigation();

    headerWrapper.appendChild(logo);
    headerWrapper.appendChild(navigation);
    return headerWrapper;
}

export default function loadInitialStructure() {
    const body = document.querySelector('body');
    const header = createHeader();
    const contentWrapper = createContentWrapper();

    body.appendChild(header);
    body.appendChild(contentWrapper);
}