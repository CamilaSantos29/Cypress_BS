/// <reference types="cypress" />

const faker = require('faker')

describe('Navegar pela página da Valtech', () => {
  
  it('confirma que está na página da Valtech', function () {
    cy.visit(Cypress.env('url'))
    
    cy.wait(5000)
     cy.title().should('be.equal', 'Agência digital focada em tecnologia e inovação')
    
     cy.get('#CybotCookiebotDialogBodyButtonAcceptAll').click()
     cy.get('.icon-search').click()
     cy.wait(4000)
     cy.get('#FirstName').scrollIntoView()
    
     

    })
  it('preencher formulário', function () {
    cy.get('#FirstName').type('Camila', {force: true})
    cy.get('#LastName').type('Santos', {force: true})
    cy.get('#Lead_title__c').select('Other', {force: true})
    cy.wait(3000)
    cy.get('#Email').type(`${faker.random.uuid()}-@hotmail.com`, {force: true}) //utilizando faker
    cy.get('#Company').type('Valtech', {force: true})
    cy.get('#Industry').select('Technology', {force: true})
    cy.get('#CountryCode').select('Brazil', {force: true})
    cy.get('#mKTOWhyContact').select('Work at Valtech', {force: true})
    cy.get('#commentCapture').type("Obrigada Valtech!", {force: true})
    cy.wait(3000)
  })
})

  

  

  