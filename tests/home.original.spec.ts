import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  //ensure the title is correct #1
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
  
  //ensure the title is  correct #2
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');  

  //ensure the sign in button is visible #2
  await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');

  //show how to write to the console
  console.log("categories: ", await page.getByTestId('nav-categories').textContent());

  //Locator assertion example:get locator by selector (this is a div)
  const productGrid = page.locator('.col-md-9');
  //ensure the product grid has 9 links that fall beneath the col-md-9 div with class
  await expect(productGrid.getByRole('link')).toHaveCount(9);

  //Non-locator assertion example:
  expect(await productGrid.getByRole('link').count()).toBe(9);

  //search for thor hammer and check the result
  const searchResult = productGrid.getByText('Thor Hammer');
  await expect(searchResult).toHaveCount(1);

  //better way for thor hammper, do the screen action first and then assert the result
  await page.getByTestId('search-query').fill('Thor Hammer');
  await page.getByTestId('search-submit').click();
  await expect(productGrid.getByRole('link')).toHaveCount(1);
  await expect(page.getByAltText('Thor Hammer')).toBeVisible();
});