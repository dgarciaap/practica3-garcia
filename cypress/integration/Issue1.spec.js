//Issue 1
describe('Issue 1: Agrega al listado principal de personas el campo “Dirección” y quitar el campo “Fecha”', function() {
	it('Visitar sitio', function() {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Buscar campo dirección', function() {
        cy.get('thead > tr > :nth-child(3)').contains('Dirección')
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})