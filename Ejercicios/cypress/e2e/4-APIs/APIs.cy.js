describe('Pruebas APIs con Cypress', () => {
   /* beforeEach(()=>{
        cy.task('db:teardown')
        cy.task('db:seeding')
    })*/

    //https://jsonplaceholder.typicode.com

    it('El endpoint POST responde con status 200', () => {
        cy.request({

            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })


    })

    it('El endopoint "POST" tiene 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
            .its('body')
            .should('have.length', 100)
    })

    it('Validar un atributo(titulo) del Response 1', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
            .its('body')
            .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

    })

    it('El POST request funciona correctamente para el endpoind', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            id: 205,
            title: 'Relatos',
            body: 'Pruebaaa'
        }).then((resp) => {
            expect(resp.body).to.have.property('title', 'Relatos')
            expect(resp.status).to.eq(201)
        })
    })
})