/// <reference types="Cypress"/>

describe('Funcionalidade Página de Produtos', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da Lista', () => {

        cy.get('[class="product-block grid"]')
            //.first() // Pegar o primeiro item da lista de produtos
            //.last() // Pegar o ultimo item da lista de produtos
            //.eq(3)  // Pegar um item escolhido da lista de produtos (Lembrando que o primeiro começa com 0)
            .contains('Ariel Roll Sleeve Sweatshirt')// Pegar item da lista pelo nome
            .click()

    });

    it.only('Deve adicionar o produto ao carrinho', () => {

        var quantidade = 4

        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short')
        .click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')
        
    });

});