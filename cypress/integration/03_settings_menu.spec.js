describe ('Тестирование выпадающего меню "Настройки"', () => {    
    beforeEach(() => {
      cy.visit('https://google.com')
      cy.get('body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe > div.KxwPGc.iTjxkf').contains('Настройки').click()        
    });
    
    it('Нажатие на "Отправить отзыв', ()=>{  
        cy.get('#dEjpnf > li:nth-child(6) > button').click()      
        cy.get('#google-feedback-wizard').should('be.visible')        
      });

    it('Нажатие на "Темная тема', ()=>{  
      cy.get('#dEjpnf > li:nth-child(8)').click()
      cy.get('body')
        .should('have.css', 'background-color', 'rgb(32, 33, 36)')
      });

    it('Нажатие на "Настройки поиска"', ()=>{  
      cy.get('#dEjpnf > li:nth-child(1) > a').contains('Настройки поиска').click()          
      cy.url().should('include', '/preferences')
      });

    it('Нажатие на "Расширенный поиск"', ()=>{  
      cy.get('#dEjpnf > li:nth-child(2) > a').click()
      cy.url().should('include', '/advanced_search')
    });

    it('Нажатие на "Ваши данные в поиске"', ()=>{  
      cy.get('#dEjpnf > li:nth-child(3) > a').click()
      cy.url().should('include', '/yourdata')
    });

    it('Нажатие на "История поиска"', ()=>{  
      cy.get('#dEjpnf > li:nth-child(4) > a').click()
      cy.url().should('include', '/history')
    });

    it('Нажатие на "Поиск в справке', ()=>{  
      cy.get('#dEjpnf > li:nth-child(5) > a').click()
      cy.url().should('include', '/websearch')
    });    

})