import FreeRangeHome from "../../pages/FreeRangeHome";

const home = new FreeRangeHome

describe('ejemplo con POM', () => {

    it('Prueba con POM', () => {
        home.navigateToHome()
        home.paginaCurso().click()
        cy.wait(4000)
        home.cantidadCursosenCursos().should('have.length', 10, { timeout: 10000 });


    });



})