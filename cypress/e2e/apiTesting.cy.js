describe(" API TEsting",()=>{

    it(" GET",()=>{

        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers:
            {
                Authorization :'ea80a3d5498541b0cf5483ba405a381edeb3053356de5967b760d328b50c0a02'
            }
        }).then((res) =>{

            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)

        })
    })    
})