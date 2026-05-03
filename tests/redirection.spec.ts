import { test, expect } from '@playwright/test';

test('redirection from index.php legacy link', async ({ page }) => {
  // Simulate a visit to the legacy URL
  // Since we are using vitepress preview, the 404 page is what we want to hit
  // Vitepress preview serves the /wiki/ base
  await page.goto('http://localhost:3000/wiki/index.php?title=General_guide_with_rare_useful_information#Meta_PK_Stats');

  // It should redirect to the correct page and fragment
  // We wait for the URL to change
  await page.waitForURL('**/wiki/pages/General_guide_with_rare_useful_information#meta-pk-stats');

  expect(page.url()).toContain('/wiki/pages/General_guide_with_rare_useful_information#meta-pk-stats');

  // Verify heading is visible
  const heading = page.locator('h3#meta-pk-stats');
  await expect(heading).toBeVisible();
});

test('redirection from index.php with underscores', async ({ page }) => {
  await page.goto('http://localhost:3000/wiki/index.php?title=A_traveller%27s_diary');
  await page.waitForURL(url => url.pathname.includes('/wiki/pages/A_traveller\'s_diary') || url.pathname.includes('/wiki/pages/A_traveller%27s_diary'));
  expect(decodeURIComponent(page.url())).toContain('/wiki/pages/A_traveller\'s_diary');
});

test('redirection for short title', async ({ page }) => {
  await page.goto('http://localhost:3000/wiki/index.php?title=Map');
  await page.waitForURL('**/wiki/pages/Map');
  expect(page.url()).toContain('/wiki/pages/Map');
});

test('no redirection for non-existent title', async ({ page }) => {
  await page.goto('http://localhost:3000/wiki/index.php?title=NonExistentPage123');
  // It should stay on the 404 page (which might have index.php in the URL if it didn't redirect)
  // Our logic in NotFound.vue will show "NonExistentPage123" in the page name
  const pageName = page.locator('.not-found-page em');
  await expect(pageName).toHaveText('"NonExistentPage123"');
});
