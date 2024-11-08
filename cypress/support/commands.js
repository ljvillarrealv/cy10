Cypress.Commands.add('iframe',{prevSubject:'element'},($iframe,selector)=>{
    Cypress.log({
        name:'iframe',
        consoleProps(){
            return{
                iframe:$iframe,
            }
        }
    })
    return new Cypress.Promise(resolve =>{
        resolve($iframe.contents().find(selector))
    })

})

Cypress.Commands.add('login', () =>{
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

})
//Funcion que toma las nuevas ventanas y las visualiza dentro de la misma ventana
Cypress.Commands.add('visitInSameTab', (url) =>{
    cy.on('window:before:load',(win)=>{
        cy.stub(win, 'open').as('windowOpen').callsFake(()=>{
            cy.visit(url)
        })
    })
})
