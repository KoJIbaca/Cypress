describe ('Тестирование поискового окна Google на слово Yandex', () => {    
    beforeEach(() => {
      cy.visit('https://google.com')              
    });

    it("Поиск по слову Yandex и клик на первый результат", () => {
      cy.get('input[title="Поиск"]').type('Yandex{enter}')
      cy.title().should('contain', 'Yandex');    
      cy.get('#search a')
        .invoke('attr', 'href')
        .then(href => console.log(href));
    });
    
})