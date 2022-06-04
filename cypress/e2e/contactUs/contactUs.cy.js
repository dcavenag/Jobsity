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
    it('Verfiy that the subject field is mandatory', () => {
      contactUs.fillForm(
        "",
        'test@gmail.com',
        'This is for testing',
        '12345',
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('Please select a subject from the list provided.')
    })

    it('Verfiy that the email field is mandatory', () => {

      contactUs.fillForm(
        'Webmaster',
        "",
        'This is for testing',
        '12345',
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('Invalid email address.')
    })

    it('Verfiy that the message field is mandatory', () => {
      contactUs.fillForm(
        'Webmaster',
        'test@gmail.com',
        "",
        '12345',
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
      cy.contains('The message cannot be blank.')
    })

    it('Verfiy that the order reference field is mandatory', () => {
      contactUs.fillForm(
        'Webmaster',
        'test@gmail.com',
        'This is for testing',
        "",
        'fileToAttach.pdf'
      )
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
    })

    it('Verfiy that the file field is mandatory', () => {
      contactUs.fillForm(
        'Webmaster',
        'test@gmail.com',
        'This is for testing',
        '12345',
        ""
      )
      contactUs.getSendBtn().click()
      cy.contains('There is 1 error')
    })
  })

  describe('Verfiy that form can be submitted successfully', () => {
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
