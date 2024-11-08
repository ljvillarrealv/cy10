describe('E2E', () => {

    it('Sin loguear', () => {
       // cy.visit('https://the-internet.herokuapp.com/basic_auth')
        //cy.get('p').should('include.text', 'Congratulation')
    })

    it('Logeando usando auth de Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text', 'Congratulation')
    })

    it('Logear con las credenciales en la url', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulation')
    })

    it('Logear con un form, usando un request del tipo POST', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text', 'Welcome')
    })

    it('Mismo test anterior, pero con comando personalizado', () => {
        cy.login()
        cy.get('.subheader').should('include.text', 'Welcome')
    });
})