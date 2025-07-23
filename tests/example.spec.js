const { test, expect } = require('@playwright/test');

test('scroll to specific element', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");

    let dJanagoMovieLink = await page.locator("//h3[contains(text(),'129. Hamilton')]");

    //before click you scroll like requirement
    await dJanagoMovieLink.scrollIntoViewIfNeeded();

    await dJanagoMovieLink.click();
    //validation
    expect(await page.locator('h1 span').textContent()).toEqual('Hamilton')

});

//no need to scroll just click directly
// Playwright automatically scrolls before click()
test('click on Hamilton movie', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");

    await page.locator("//h3[contains(text(),'129. Hamilton')]").click()
    //validation
    expect(await page.locator('h1 span').textContent()).toEqual('Hamilton')

});