export class HomePage {
 
    searchTextBox= () => cy.get('.Search')
    searchButton= () => cy.get('button').contains('Search')
    feelingLuckyButton= () => cy.get('button').contains('Lucky')
     
    navigate = () => {
        cy.visit("https://www.google.co.uk/")
    }
     
    performSearch = (searchTerm) => {
    searchTextBox().type(searchTerm)
    searchButton('Поиск в Google').click()
    }
    }
    