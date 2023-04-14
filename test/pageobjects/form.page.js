import Page from './page.js';

class FormPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
     // Email Selector
     get inputEmail() {
          return $("#mail"); //uses CSS query selector
     }
    get submit() {
        //return (${'input.btn:nth-child(10)'}); - Not working changed to below
        return $('#validation-example > input.btn.btn-primary')
       
    }
    get errorText() {
        //return (${'#errors-validation-example > h2:nth-child(1)'}); - NOT working
        return $('#errors-validation-example > h2'); 
        // return $('#errors-validation-example');
        
    }

    get title(){
        //return Title dropdown box
        return $('#title1');
    }

    get titleEsq (){
        //return the Esquire option from dropdown
        return $('//*[@id="title1"]/option[3]');
    }    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter in a valid email
     */
    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }
     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
}
export default new FormPage();