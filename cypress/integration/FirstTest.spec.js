describe('Тестирование некоторых элементов стартовой страницы Goggle', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })
  
    it('Посещение Google и корректное отображение заголовка', () => {
      cy.title().should('contain', 'Google');    
    });
  
    it("Поиск по слову Yandex и клик на первый результат", () => {
      cy.get('input[title="Поиск"]').type('Yandex{enter}')
      cy.title().should('contain', 'Yandex');    
      cy.get('#search a')
        .invoke('attr', 'href')
        .then(href => console.log(href));
    });

    it('Нажатие клавиши "Мне повезёт!"', () => {            
      cy.get('.FPdoLc > center > .RNmpXc').click()
      cy.url().should('include', 'doodles');
    });

    it('Нажатие на логотип "Google"', () => {            
      cy.get('#hplogo').click()      
    });

    it('Нажатие на " Всё о Google"', () => {            
      cy.get('[href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1"]').click()
      cy.title().should('contain', 'Google - Компания');
    });

    /* it('Нажатие на значок "Поделиться"', () => {            
      cy.get('.GVqCqe').click()
      cy.url().should('include', 'ddle=1');
      cy.get('.ddlshare-dialog-title-close').click() 
    }); */

    it ('Нажатие на текст "Реклама"', () => {
      cy.get('[href="https://www.google.com/intl/ru_ru/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"]').click()
      cy.url().should('include', 'https://ads.google')
    });
    
    it ('Нажатие на текст "Для бизнеса"', () => {
      cy.get('[href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"]').click()
      cy.url().should('include', '/services')
    });
    
  })
