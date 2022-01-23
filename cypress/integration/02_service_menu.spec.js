/// <reference types="Cypress-xpath" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

beforeEach(() => {
  cy.visit('https://google.com')
  cy.get(".gb_A").click()
  cy.frameLoaded("iframe[role='presentation']")           
});

describe ('Тестирование выпадающего dropdown-меню "Приложения Google"', () => {    
    
    it('Нажатие на сервис "YouTube', () => {
      cy.iframe().xpath("//span[text()='YouTube']").click() 
      cy.url().should('include', 'youtube')
      cy.go(-1)
    })

    it('Нажатие на сервис "Карты', () => {
      cy.iframe().xpath("//span[text()='Карты']").click() 
      cy.url().should('include', '/maps')
    })
    
    it('Нажатие на сервис "PlayMarket', () => {
      cy.iframe().xpath("//span[text()='Play']").click() 
      cy.url().should('include', '/store')
    }) 

})        
  
