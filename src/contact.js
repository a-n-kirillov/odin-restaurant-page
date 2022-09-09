function createContactParagraph(content) {
    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = content;
    contactParagraph.classList.add('contact');
    
    return contactParagraph;
}

export default function loadContact() {
    const contentWrapper = document.querySelector('#content');

    const phoneParagraph = createContactParagraph('📞 123 456 789');
    const addressParagraph = createContactParagraph('🏠 Hollywood Boulevard 42, Los Angeles, USA');

    contentWrapper.appendChild(phoneParagraph);
    contentWrapper.appendChild(addressParagraph);
}