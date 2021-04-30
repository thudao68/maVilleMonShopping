import * as etapesInitiales from '../actions/etapesInitiales'

describe('Partager un produit', () => {

    let partages = require('../fixtures/produitsData')

    partages.forEach((partage) => {
        it(`Partager le produit ${partage.nomDuProduit}`, () => {
            etapesInitiales.seConnecter()
            etapesInitiales.monCompte()
            cy.partagerUnProduit(partage.ville, partage.boutiqueCode, partage.nomDuProduit, partage.modele, partage.recommandation, partage.image, partage.produitVerifie)
        })
    })  
})