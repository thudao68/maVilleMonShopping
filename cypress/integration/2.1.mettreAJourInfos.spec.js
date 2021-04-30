import * as etapesInitiales from '../actions/etapesInitiales'

describe('Mettre à jour mes informations', () => {

    it('Changer toutes les informations', () => {
        etapesInitiales.seConnecter()
        etapesInitiales.monCompte()
        cy.contains('Mes informations').click({ multiple: true })
        cy.get('#user_firstname').clear().type('Manou')
        cy.get('#user_lastname').clear().type('Lepen')
        // cy.get('#user_email').clear().type(testing@gmail.com)
        cy.get('#user_mobile_phone_number').clear().type('0612345678')
        cy.get('#user_landline_phone_number').clear().type('0512345678')
        cy.contains('Mettre à jour mes informations').click()
        cy.get('.alert').should('have.text', '\n        ×Close\n        Utilisateur modifié avec succès\n')
        cy.get('#user_firstname').should('have.value', 'Manou')
        cy.get('#user_lastname').should('have.value', 'Lepen')
        cy.get('#user_mobile_phone_number').should('have.value', '0612345678')
        cy.get('#user_landline_phone_number').should('have.value', '0512345678')
    })

    it('Changer une des informations', () => {
        etapesInitiales.seConnecter()
        etapesInitiales.monCompte()
        cy.contains('Mes informations').click({ multiple: true })
        cy.get('#user_firstname').clear().type('Manou')
        cy.contains('Mettre à jour mes informations').click()
        cy.get('.alert').should('have.text', '\n        ×Close\n        Utilisateur modifié avec succès\n')
        cy.get('#user_firstname').should('have.value', 'Manou')
        cy.get('#user_lastname').should('have.value', 'Lepen')
    })
     
})
