/// <reference types = 'Cypress'/>

describe(" Bg Color",()=>{

     
        it(" Test case",()=>{

            cy.visit("https://www.amazon.in/")

            cy.get('#nav-main').should('have.css','','rgb(15,17,17)')
        })


})