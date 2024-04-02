const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity :false,
  video:true,
  reporter: 'cypress-mochawesome-reporter',

  'pageLoadTimeout' : 70000,
  projectId : 'ygewro',
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl :"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

    env: {

     
        ignore: (xhr) => {
            return true;
        }
   
      //hideXhr: true
    }
  },
});
