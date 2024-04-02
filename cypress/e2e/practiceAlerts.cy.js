/// <reference types ="cypress"/>

describe(" Alerts",()=>{

    it("Window Alert ",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(":nth-child(29) > a").click()

         cy.get(":nth-child(1)>button").click()
         cy.on('window:alert',(t)=>{
             expect(t).to.contains('I am a JS Alert')
         })

         cy.get('#result').should('have.text','You successfully clicked an alert')

        
    })

    it("Window Confirm Alert Ok Button ",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(":nth-child(29) > a").click()

         cy.get(":nth-child(2)>button").click()
         cy.on('window:confirm',(t)=>{
             expect(t).to.contains('I am a JS Confirm')
         })

         cy.get('#result').should('have.text','You clicked: Ok')

        
    })


    it("Window Confirm Alert Cancel ",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(":nth-child(29) > a").click()

         cy.get(":nth-child(2)>button").click()
         cy.on('window:confirm',()=>false)

         cy.get('#result').should('have.text','You clicked: Cancel')

        
    })

    it("Window Confirm Alert Cancel ",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(":nth-child(29) > a").click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get(":nth-child(3)>button").click()
        cy.get('#result').should('have.text','You entered: welcome')

        
    })

    it.only(" Authendication Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",
       {auth:
            {
                username: "admin",
                password :"admin"
            }
    })

    cy.get('.example p').should('contain','Congratulations!')
    })

    
    it.only(" Authendication Alert",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    cy.get('.example p').should('contain','Congratulations!')
    })



    
    



})