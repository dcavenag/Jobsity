/// <reference types="cypress-tags" />
import ContactUsPage from '../../pages/contactUS/contactUs';

context('Contact form validation', () => {
  const contactUs = new ContactUsPage();

  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    contactUs.getContactUsBtn().click()
    contactUs.isPageLoaded()
  })

  describe('Verfiy form mandatory fields', () => {
    it('Verfiy that the email field is mandatory', () => {

      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('Invalid email address.')
    })

    it('Verfiy that the message field is mandatory', () => {
      contactUs.getEmailAddressFld().clear().type('test@gmail.com')
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('The message cannot be blank.')
    })

    it('Verfiy that the subject field is mandatory', () => {
      contactUs.getEmailAddressFld().clear().type('test@gmail.com')
      contactUs.getMessageFld().clear().type('This is for testing')
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('Please select a subject from the list provided.')
    })
  })

  describe('Verfiy that form can be submitted successfully', () => {
    it('Verfiy that only email, subject and message fields are needed to submit the form', () => {
      contactUs.fillForm(
        'Webmaster',
        'test@gmail.com',
        'This is for testing'
      )
      contactUs.getSendBtn().click()
      cy.contains('Your message has been successfully sent to our team.')
    })

    it('Verify that a "Webmaster" form is successfully submitted with all field completed', () => {
      contactUs.fillForm(
        'Webmaster',
        'test@gmail.com',
        'This is for testing',
        '1234',
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('Your message has been successfully sent to our team.')
    })

    it('Verify that a "Customer Service" form is successfully submitted with all field completed', () => {
      contactUs.fillForm(
        'Customer service',
        'test@gmail.com',
        'This is for testing',
        '1234',
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('Your message has been successfully sent to our team.')
    })
  })
})
