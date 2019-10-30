describe('Issue 2: Agrega el campo teléfono en la tabla datos después del campo dirección y que funcione en todas las interfaces del sistema.', function() {
	it('Visitar sitio', function() {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Buscar el campo telefono', function () {
        cy.get('thead > tr > :nth-child(3)').next().contains('Teléfono')
    })

        it('agregar a una persona nueva', function () {
            cy.get('thead > tr > :nth-child(5) > .btn').click();
            cy.get(':nth-child(1) > .col-md-7 > .form-control')
                .type('Diana').should('have.value','Diana')
            cy.get(':nth-child(2) > .col-md-11 > .form-control')
            .type('Laguna').should('have.value','Laguna')
            cy.get(':nth-child(3) > .col-md-11 > .form-control')
                .type('312').should('have.value','312')
                cy.get('.modal-footer > .btn-primary').click()
        })

    it('editar persona', function () {
        cy.get(':nth-child(4) > :nth-child(5) > .btn-primary').click({force: true})
        cy.get(':nth-child(2) > .col-md-11 > .form-control')
        .type('Villa').should('have.value','LagunaVilla')
        cy.get('.modal-footer > .btn-primary').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})