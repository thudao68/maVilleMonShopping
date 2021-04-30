import 'cypress-file-upload'

Cypress.Commands.add('partagerUnProduit', (ville, boutiqueCode, nomDuProduit, modele, recommandation, image, produitVerifie) => {
    cy.get('.container-illustration > div > .btn').click({force: true})
    cy.get('#address-input').type(ville, {force: true})
    cy.get('#addresses-list > :nth-child(1)').click()
    cy.get('#shop_to_create_product').select(boutiqueCode, {force: true})
    cy.get(':nth-child(6) > .form-control').type(nomDuProduit)
    cy.get('#default_model').type(modele)
    cy.get('#product_advice_attributes_content').type(recommandation)
    if(image != 0) {
        cy.get('#create-image').attachFile(image)
    }
    cy.wait(3000)
    cy.get(':nth-child(13) > .btn').click({ multiple: true })
    cy.url().should('include', '/products/my_products_submitted')
    cy.contains(produitVerifie).should('be.visible')
})

Cypress.Commands.add('syntaxEmail', (email, alerte) => {
    cy.get('#user_email').clear().type(email)
    cy.contains('Mettre à jour mes informations').click()
    cy.get('.alert').should('have.text', alerte)
})

Cypress.Commands.add('syntaxTelephoneMobile', (telephoneMobile, alerte1) => {
    cy.get('#user_mobile_phone_number').clear().type(telephoneMobile)
    cy.contains('Mettre à jour mes informations').click()
    cy.get('.alert').should('have.text', alerte1)
})

Cypress.Commands.add('syntaxTelephoneFixe', (telephoneFixe, alerte2) => {
    cy.get('#user_landline_phone_number').clear().type(telephoneFixe)
    cy.contains('Mettre à jour mes informations').click()
    cy.get('.alert').should('have.text', alerte2)
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
