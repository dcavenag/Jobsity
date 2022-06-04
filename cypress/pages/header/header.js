class Header {
    getTitle = () => cy.get('div h1')

    getContactUsBtn = () => cy.contains('div a[href]', 'Contact us')

}

export default Header;
