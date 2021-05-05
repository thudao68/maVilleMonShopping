import * as etapesInitiales from '../actions/etapesInitiales'

describe('Syntax des champs importants', () => {

    let modifierEmails = require('../fixtures/emailData')
    let modifierTelMobiles = require('../fixtures/telMobileData')
    let modifierTelFixes = require('../fixtures/telFixeData')

    modifierEmails.forEach((modifierEmail) => {
        it(`Tester le syntax de email ${modifierEmail.email}`, () => {
            etapesInitiales.seConnecter()
            etapesInitiales.monCompte()
            cy.contains('Mes informations').click({ multiple: true })
            cy.syntaxEmail(modifierEmail.email, modifierEmail.alerte)
        })
    })

    /*modifierTelMobiles.forEach((modifierTelMobile) => {
        it(`Tester le syntax de téléphone mobile ${modifierTelMobile.telephoneMobile}`, () => {
            etapesInitiales.seConnecter()
            etapesInitiales.monCompte()
            cy.contains('Mes informations').click({ multiple: true })
            cy.syntaxTelephoneMobile(modifierTelMobile.telephoneMobile, modifierTelMobile.alerte1)
        })
    })

    modifierTelFixes.forEach((modifierTelFixe) => {
        it(`Tester le syntax de téléphone fixe ${modifierTelFixe.telephoneFixe}`, () => {
            etapesInitiales.seConnecter()
            etapesInitiales.monCompte()
            cy.contains('Mes informations').click({ multiple: true })
            cy.syntaxTelephoneFixe(modifierTelFixe.telephoneFixe, modifierTelFixe.alerte2)
        })
    })*/
})