/// <reference types="cypress" />

const faker = require('faker')
const data = require("../fixtures/mobiledevices.json") //chamando mobile devices

describe('Navegar pela página da Valtech', () => {
    beforeEach(() => {   
       
})
for (let mobileDeviceValue in data.mobiledevicesname) {  
  it(
    "Navegar pela página da Valtech com diferentes mobile devices, como por exemplo: " + " " +   // Frase inicial do teste, acrescentando o tipo de mobile 
       data.mobiledevicesname [mobileDeviceValue] + " . " +                                      // a ser testado a cada vez
        " Confirmar que está na página da Valtech e preencher o formulário de contato",
  function () {
    
    cy.viewport(data.mobiledevicesname[mobileDeviceValue]) 
    cy.visit(Cypress.env('url'))   
    
    cy.wait(4000)
    cy.title().should('be.equal', 'Agência digital focada em tecnologia e inovação')
    
    cy.get('#CybotCookiebotDialogBodyButtonAcceptAll').click({force: true})
    cy.get('.icon-search').click()
    
    cy.wait(4000)
    cy.get('.contact-us-form__accordion-button > svg').click({force: true})
    
    //preenchendo formulário de contato
    cy.wait(500)
    cy.get('#FirstName').type('Camila', {force: true})
    cy.get('#LastName').type('Santos', {force: true})
    cy.get('#Lead_title__c').select('Other', {force: true})
    cy.get('#Email').type(`${faker.random.uuid()}-@hotmail.com`, {force: true})  //utilizando faker
    cy.get('#Company').type('Valtech', {force: true})
    cy.get('#Email').scrollIntoView()
    cy.get('#Industry').select('Technology', {force: true})
    cy.get('#CountryCode').select('Brazil', {force: true})
    cy.get('#mKTOWhyContact').select('Work at Valtech', {force: true})
    cy.get('#commentCapture').type("Obrigada Valtech!!!!!", {force: true})
    cy.wait(3000)
   
      })   
    }
  })  


  



