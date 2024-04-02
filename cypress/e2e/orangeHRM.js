class orangeHRM {

     userName(userName){

        cy.get('[name="username"]').type('Admin',{log:false})
        
    }

    password(password){

        cy.get('[name="password"]').type('admin123',{log:false})
    }

    login()
    {
       cy.get('[type="submit"]').click()
    }

    Admin()
    {
        cy.get('.oxd-main-menu>li:nth-child(1)>a').click()
        cy.get('.oxd-button.oxd-button i').click()
    }

    addUser()
    {
        cy.get('.oxd-select-text--after>i').first().click()
        cy.get('.oxd-select-dropdown>div:nth-child(2').click()
        cy.get('.oxd-select-text--after>i').last().click()
        cy.get('div[role="listbox"]>div:nth-child(2)').click()


    }
}

export default orangeHRM