describe('Trabajando con pantalla modales', () =>{

    it('Valido texto de un elemento dentro de un iframe', ()=>{
       cy.visit('https://webdriveruniversity.com/IFrame/index.html')
       cy.get('#frame')
       .iframe('body #button-find-out-more > b')
       .should('include.text','Find Out More!') 
    })




})  