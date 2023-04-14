import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('Should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open()
        await browser.pause(2000); 
        await expect(FormPage.header).toHaveTextContaining(
            'Form validation');
    })

    it('Should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await FormPage.submit.click();
        await browser.pause(2000); 
        //console.log("Why undefined?", await (FormPage.errorText).getText());
        await expect(FormPage.errorText).toHaveTextContaining(
            'The form could not be submitted because 9 errors were found.');
    })
    it ('Select Esquire from Title Drop down', async () =>{
        //Click on the Title dropdown box
        await FormPage.title.click();
        await browser.pause(2000);
        //Select Esquire option
        await FormPage.titleEsq.click();
        //Check if that option is "Esq."" 
        await expect(FormPage.titleEsq).toHaveTextContaining(
            'Esq.');
        await browser.pause(2000);    
    })
    
})

