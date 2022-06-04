import Header from "../header/header";

class ContactUsPage extends Header {

  getSubjectFld = () => cy.get('select#id_contact')
  getEmailAddressFld = () => cy.get('#email')
  getOrderReferenceFld = () => cy.get('#id_order')
  getAttachFld = () => cy.get('#fileUpload')
  getMessageFld = () => cy.get('#message')
  getSendBtn = () => cy.get('button#submitMessage')


  isPageLoaded() {
      this.getTitle().should('contain', 'Customer service - Contact us').should('be.visible');
      cy.contains('send a message')
      cy.contains('Subject Heading')
      cy.contains('Email address')
      cy.contains('Order reference')
      cy.contains('Attach File')
      cy.contains('Message')
  }

  fillForm(subject, email, message, order_reference="", file="") {
    this.getSubjectFld().select(subject)
    if (subject == 'Customer service'){
      cy.contains('For any question about a product, an order')
    } else if (subject == 'Webmaster'){
      cy.contains('If a technical problem occurs on this website')
    }

    this.getEmailAddressFld().clear().type(email)
    this.getMessageFld().clear().type(message)

    if (order_reference != ""){
      this.getOrderReferenceFld().clear().type(order_reference)
    }
    if (file != ""){
      this.getAttachFld().attachFile(file);
    }
  }

}

export default ContactUsPage;
