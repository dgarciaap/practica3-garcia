//Issue 3
describe ('Issue 3: No permite eliminar registros de personas', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('eliminar registros', function () {
        cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})