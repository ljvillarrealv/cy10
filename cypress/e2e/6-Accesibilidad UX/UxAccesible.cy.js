// npm install axe-core --save-dev
//npm install cypress-axe -save-dev
import 'cypress-axe'

describe('Prueba accesibilidada', ()=>{


it('Deberia cumplir estandares de Accesibilidad', () => {
    cy.visit('https://www.freerangetesters.com')
    cy.injectAxe()
    cy.checkA11y()
});

})