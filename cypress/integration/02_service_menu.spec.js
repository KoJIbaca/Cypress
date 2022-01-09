describe ('Тестирование выпадающего меню "Настройки"', () => {    
    beforeEach(() => {
      cy.visit('https://google.com')
      cy.get('#gbwa > div > a').click()      

      const getIframeDocument = () => {
        return cy
          .get('iframe') 
          .its('0.contentDocument.body').should('not.be.undefined')        
          .then(cy.wrap)
      }      
    });

    it('Нажатие на сервис "Карты', () => {
      getIframeBody().find('#yDmH0d > c-wiz > div > div > c-wiz > div > div > ul.LVal7b.u4RcUd > li:nth-child(3) > a').should('have.text', 'Try it').click() 
      cy.url().should('include', '/maps')
      })

        })        
      //});
    //})
  //})
//})