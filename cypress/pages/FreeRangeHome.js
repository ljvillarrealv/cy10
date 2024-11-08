class FreeRangeHome {
    //Navegaciones
    navigateToHome() {
        cy.visit('https://www.freerangetesters.com')
    }

    //Locator´s

    paginaCurso() {
        return cy.get('[data-testid="header-container"] > .sc-bAEjGW > .sc-cHqXqK > :nth-child(1) > .sc-iuUfFv')
    }



    cantidadCursosenCursos() {
        return cy.get('.sc-UblHX > .sc-fufdwm > .sc-eDHQDy > .sc-giBObj > .sc-epnzzT')
    }

    //Acciones sobre botones
    clickPaginaCurso() {
        this.paginaCurso()
    }
}

export default FreeRangeHome