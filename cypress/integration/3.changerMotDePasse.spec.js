import { it } from 'mocha'
import * as etapesInitiales from '../actions/etapesInitiales'

describe('Mot de passe', () => {

    it('Changer le mot de passe', () => {
        etapesInitiales.seConnecter()
        etapesInitiales.monCompte()
        cy.contains('Mes informations').click({ multiple: true })
        cy.contains('Changer mon mot de passe').click({ multiple: true })
        cy.get('#user_current_password').type('Dtht1910$')
        cy.get('#user_password').type('Dtht1910*')
        cy.get('#user_password_confirmation').type('Dtht1910$')
        cy.contains('Enregistrer').click({ multiple: true })
        cy.wait(4000)
        cy.contains('CONNEXION').should('be.visible')
        cy.get('.alert').should('have.text', "\n        ×Close\n        Votre compte a été modifié avec succès.\n")
    })
})