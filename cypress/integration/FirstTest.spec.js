describe('Тестирование некоторых элементов стартовой страницы Goggle', () => {
    it('Посещение Google и корректное отображение заголовка', () => {
      cy.visit('https://google.com')
      cy.title().should('contain', 'Google');    
    });
  
    it("Поиск по слову Yandex", () => {
      cy.get('input[title="Поиск"]').type('Yandex{enter}')
      cy.title().should('contain', 'Yandex');
    });

    it('Клик на первый результат', () => {
      cy.get('#search a')
        .invoke('attr', 'href')
        .then(href => console.log(href));
    });

    it('Переход назад. Нажатие клавиши "Мне повезёт!"', () => {
      cy.go(-1)      
      cy.get('.FPdoLc > center > .RNmpXc').click()
      cy.title().should('contain', 'Дудлы Google');
    });

    it('Переход назад. Нажатие на логотип "Google"', () => {
      cy.go(-1)      
      cy.get('#hplogo').click()      
    });

    it('Переход назад. Нажатие на " Всё о Google"', () => {
      cy.go(-1)      
      cy.get('[href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1"]').click()
      cy.title().should('contain', 'Google - Компания');
    });

    it('Переход назад. Нажатие на значок "Поделиться"', () => {
      cy.go(-1)      
      cy.get('.GVqCqe').click()
      cy.url().should('include', 'ddle=1');
      cy.get('.ddlshare-dialog-title-close').click()
    });
    
  })
