 const {test, expect} = require ('@playwright/test');
// const{expect} = require ('../playwright.config');


 test( 'Browser context playwright test',  async ({browser})=>
 {


     
      const context = await browser.newContext();
      const page = await context.newPage();
      const userName = page.locator('#username');
     const signIn = page.locator('#signInBtn');
        const cardTitles = page.locator(".card-body a");

     
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       //Get title-assertion
      console.log(await page.title());
      //css
       await userName.fill("rahulshetty");
          await page.locator('[type="password"]').fill("learning");
         await signIn.click();
         //wait
         console.log(await page.locator("[style*='block']").textContent());
         await expect(page.locator("[style*='block']")).toContainText('Incorrect');
         // wipes out old data

         await userName.fill("");
         await userName.fill("rahulshettyacademy");
         await signIn.click();

          console.log(await cardTitles.first().textContent());
          console.log(await cardTitles.nth(1).textContent());
           const allTitles = await cardTitles.allTextContents();
           console.log(allTitles);


 });

  test( 'Page playwright test',  async ({page})=>
 {
      
      await page.goto("https://google.com");
      //Get title-assertion
      console.log(await page.title());
      await expect (page).toHaveTitle("Google");

 });


 test( 'UI Controls',  async ({page})=>
 {

     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const userName = page.locator('#username');
     const signIn = page.locator('#signInBtn');
     const dropDown = page.locator("select.form-control");
     const documentLink = page.locator("[href*= 'documents-request']");
     await dropDown.selectOption("consult");
      await page.locator(".radiotextsty").last().click();
      await page.locator("#okayBtn").click();
      //await page.pause();

     //assertions

console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();

await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();

await expect(documentLink).toHaveAttribute("class","blinkingText");
 });

 test( 'Child windows handle',  async ({browser})=>

 {
    
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").valueInput());
 

 })

 

test.only('E2E', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('neha@test.com');
  await page.getByRole('textbox', { name: 'email@example.com' }).press('Enter');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
});