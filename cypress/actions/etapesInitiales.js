
export function seConnecter() {
    cy.visit('https://www.mavillemonshopping.fr/fr')
    cy.get('[href="/policies/user_terms/cookie/accept"]').click()
    cy.get('#sign-in-button').click({force: true})
    cy.wait(4000)
    cy.get('#user_email_sign_in').type('uyennga.daonguyen@gmail.com', {force: true})
    cy.get('#user_password_sign_in').type('Dtht1910$', {force: true})
    cy.get(':nth-child(7) > .btn').click({force: true})
}

export function monCompte(){
    cy.get('#avatar-cityzen-menu').click()
    cy.get('#my-account').click()
}


