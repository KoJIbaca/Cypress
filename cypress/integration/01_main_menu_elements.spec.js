describe('Тестирование некоторых элементов стартовой страницы Goggle', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })
  
    it('Посещение Google и корректное отображение заголовка', () => {
      cy.title().should('contain', 'Google');    
    });

    it ('Нажатие на кнопку "Почта"', () => {
      cy.get('#gb > div > div:nth-child(1) > div > div:nth-child(1) > a').click()
      cy.url().should('include', '/gmail')
    });

    it ('Нажатие на кнопку "Картинки"', () => {
      cy.get('#gb > div > div:nth-child(1) > div > div:nth-child(2) > a').click()
      cy.url().should('include', '/imghp')
    });

    it('Нажатие клавиши "Мне повезёт!"', () => {            
        cy.get('.FPdoLc > center > .RNmpXc').click()
        cy.url().should('include', 'doodles');
    });
  
    it('Нажатие на логотип "Google"', () => {            
        cy.get('#hplogo').click()      
    });
  
    it('Нажатие на гиперссылку "Всё о Google"', () => {            
        cy.get('[href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1"]').click()
        cy.title().should('contain', 'Google - Компания');
    });

    it('Нажатие клавиши "Мне повезёт!"', () => {            
        cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc').click()
        cy.url().should('include', 'doodles');
    });
  
    it('Нажатие на логотип "Google"', () => {            
        cy.get('#hplogo').click()      
    });
  
    it('Нажатие на гиперссылку "Всё о Google"', () => {            
        cy.get('[href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1"]').click()
        cy.title().should('contain', 'Google - Компания');
    });
  
/*     it('Нажатие на значок "Поделиться"', () => {            
        cy.get('.GVqCqe').click()
        cy.url().should('include', 'ddle=1');
        cy.get('.ddlshare-dialog-title-close').click() 
    }); */
  
    it ('Нажатие на гиперссылку "Реклама"', () => {
        cy.get('[href="https://www.google.com/intl/ru_ru/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"]').click()
        cy.url().should('include', 'https://ads.google')
    });
      
    it ('Нажатие на гиперссылку "Для бизнеса"', () => {
        cy.get('[href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"]').click()
        cy.url().should('include', '/services')
    });
      
    it ('Нажатие на гиперссылку "Как работает Google Поиск"', () => {
        cy.get('body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe > div.KxwPGc.AghGtd > a:nth-child(4)').click()
        cy.url().should('include', '/search')
    });
  
    it ('Нажатие на гиперссылку "Конфидециальность"', () => {
        cy.get('body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe > div.KxwPGc.iTjxkf > a:nth-child(1)').click()
        cy.url().should('include', '/privacy')
    });
  
    it ('Нажатие на гиперссылку "Условия"', () => {
        cy.get('body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe > div.KxwPGc.iTjxkf > a:nth-child(2)').click()
        cy.url().should('include', '/terms')
    });
    
    it ('Нажатие на кнопку "Войти"', () => {
        cy.get('#gb > div > div.gb_Me > a').click()        
    });
})