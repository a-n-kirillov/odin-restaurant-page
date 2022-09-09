import './style.css';
import './oven.jpg';
import { default as loadInitialStructure, makeTabActive } from './loadup';
import { default as loadMainText } from './main';
import {default as loadMenu } from './menu';
import {default as loadContact} from './contact'

function initWebsite() {
    loadInitialStructure();
    loadMainText();
}

function clearContent() {
    const contentWrapper = document.querySelector('#content');
    contentWrapper.innerHTML = '';
}

function clearActiveTabUnderline() {
    const underlinedTab = document.querySelector('.active');
    underlinedTab.classList.remove('active');
}

function resetWebsiteContext() {
    clearContent();
    clearActiveTabUnderline();
}

function switchTabHandler(e) {
    resetWebsiteContext();

    const selectedTab = e.target;
    makeTabActive(selectedTab);

    switch(selectedTab.textContent) {
        case 'Home':
            loadMainText();
            break;
        case 'Menu':
            loadMenu();
            break;
        case 'Contact':
            loadContact();
            break;
    }
}

function addListenersToSiteTabs() {
    const tabs = document.querySelectorAll('#header li');
    tabs.forEach(tab => tab.addEventListener('click', switchTabHandler));
}

initWebsite();
addListenersToSiteTabs();