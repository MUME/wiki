import { test, expect } from '@playwright/test';

test.describe('Search UX', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/wiki/');
  });

  test('opens search modal via search button', async ({ page }) => {
    const searchButton = page.locator('.VPNavBarSearch button, .VPSearchButton');
    await expect(searchButton.first()).toBeVisible();
    await searchButton.first().click();

    const searchInput = page.locator('#localsearch-input');
    await expect(searchInput).toBeVisible();
  });

  test('searches for item title and returns relevant results', async ({ page }) => {
    const searchButton = page.locator('.VPNavBarSearch button, .VPSearchButton');
    await searchButton.first().click();

    const searchInput = page.locator('#localsearch-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();

    await searchInput.fill('Dagger');

    const results = page.locator('.VPLocalSearchBox .result');
    await expect(results.first()).toBeVisible({ timeout: 15000 });

    const firstTitle = results.first().locator('.title');
    await expect(firstTitle).toContainText('dagger', { ignoreCase: true });
  });

  test('searches by alias/meta keywords and returns page', async ({ page }) => {
    const searchButton = page.locator('.VPNavBarSearch button, .VPSearchButton');
    await searchButton.first().click();

    const searchInput = page.locator('#localsearch-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();

    await searchInput.fill('Steel spear');

    const results = page.locator('.VPLocalSearchBox .result');
    await expect(results.first()).toBeVisible({ timeout: 15000 });

    const text = await results.first().innerText();
    expect(text.toLowerCase()).toContain('spear');
  });

  test('searching call lightning ranks Call Lightning #1 and hides See also titles', async ({ page }) => {
    const searchButton = page.locator('.VPNavBarSearch button, .VPSearchButton');
    await searchButton.first().click();

    const searchInput = page.locator('#localsearch-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();

    await searchInput.fill('call lightning');

    const results = page.locator('.VPLocalSearchBox .result');
    await expect(results.first()).toBeVisible({ timeout: 15000 });

    // Verify first result title is Call Lightning
    const firstTitle = results.first().locator('.title.main, .title').last();
    await expect(firstTitle).toHaveText('Call Lightning');

    // Verify no result card has 'See also' or 'See also:' as main title
    const count = await results.count();
    for (let i = 0; i < count; i++) {
      const mainTitle = await results.nth(i).locator('.title.main, .title').last().innerText();
      expect(mainTitle.toLowerCase().trim()).not.toBe('see also:');
      expect(mainTitle.toLowerCase().trim()).not.toBe('see also');
    }
  });
});
