// Test Steps & Expected Results 
// 1. Launch the browser and open https://www.pvrcinemas.com/
//  2. Select the city as “Chennai”
//  3. Choose cinema from the available list 4. Select movie date 5. Choose any available movie 6. Select available show time 7. Click on Book button 8. Click on Accept for Terms & Conditions 9. Select the available seat 10. Verify seat information and total ticket amount using assertions 11. Verify the Title of the page 12. Proceed to booking 



import {test,expect} from "@playwright/test"
test('Book Movie Ticket in PVR Cinemas', async({page})=>
{
    await page.goto('https://www.pvrcinemas.com/')
    await page.locator('//h6[text()="Chennai"]').click()
    await page.locator('//span[@class="cinemas-inactive"]').click()
    await page.locator('//span[text ( ) = "Select Cinema"]').click()
    await page.locator('//span[text ( ) = "INOX The Marina Mall, OMR, Chennai"]').click()
//await page.locator('//span[text()="Select Date"]').click()
await page.locator('//li[@class="p-dropdown-item"][1]').click()
await page.locator('#movie').click()
await page.getByText('IMMORTAL').last().click()
await page.locator('#time').click()
await page.getByText('10:15 PM').click()
await page.locator('//button[@aria-label="Submit"]').click()
await page.getByText('Accept').click()
await page.locator('//span[@id="EX.EXECUTIVE|K:20"]').click()

// to verify page url
await expect(page).toHaveURL('https://www.pvrcinemas.com/seatlayout/3mAUWhYCjijs5KwqHV4vlQ==')

// TO Verify page title
await expect(page).toHaveTitle('PVR Cinemas')
await expect (page.getByText('Booking Summary')).toHaveText('Booking Summary')
// to verify movie title
await expect(page.locator('//h5[text()="IMMORTAL"]')).toHaveText("IMMORTAL")
// to verify booking information
await expect(page.locator('//p[text()="INOX The Marina Mall, OMR, Chennai"]')).toBeTruthy()

// to verify the selected seat

await expect(page.locator('//div[@class="seat-number"]')).toContainText("K20")

// to verify logo

await expect(page.locator('//img[@class="logos-pvr"]')).toBeVisible()

// to verify color assertion for selected seat color changes to yellow

//await expect(page.locator('//span[@class="seat-selected-pvr"]')).toHaveCSS('background color','rgb(255 203 5)')

// to verify selected date and time in booking summary page

await expect(page.locator('//span[text()="5 Sep, Saturday"]')).toBeVisible()

await expect(page.locator('//b[text()="10:15 PM"]')).toBeVisible()
// ticket amount calculation

const grandTotal = await page.locator('//h6[text()="70.87"]')

expect(grandTotal).toContainText('70.87');

// to verify proceed button is enabled

await expect(page.locator('//button[text()="Proceed"]')).toBeEnabled()

})
