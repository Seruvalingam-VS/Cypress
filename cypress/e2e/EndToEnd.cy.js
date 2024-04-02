///<reference types ="Cypress"/>
import orangeHRM from "./orangeHRM"

describe(" Make My trip End to End Testing",()=>{
   it.only(" Test case 1",()=>{
        let HRM =new orangeHRM()
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(5000)

        HRM.userName("Admin",{log:false})
        HRM.password("admin123",{log:false})
        HRM.login()

        HRM.Admin()
        HRM.addUser()
    })

        
   

})
