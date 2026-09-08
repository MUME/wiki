import { test, expect } from '@playwright/test'

test.describe('Cookie Consent Banner', () => {
  test('displays banner on desktop and allows accepting', async ({ page }) => {
    await page.goto('http://localhost:3000/wiki/')
    const banner = page.locator('.cookie-consent-banner')
    await expect(banner).toBeVisible()

    const acceptBtn = page.locator('.cookie-btn-accept')
    await expect(acceptBtn).toBeVisible()
    await acceptBtn.click()

    await expect(banner).not.toBeVisible()

    const consent = await page.evaluate(() => localStorage.getItem('mume_cookie_consent'))
    expect(consent).toBe('granted')
  })

  test('displays correctly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000/wiki/')
    const banner = page.locator('.cookie-consent-banner')
    await expect(banner).toBeVisible()

    const declineBtn = page.locator('.cookie-btn-decline')
    await expect(declineBtn).toBeVisible()
    await declineBtn.click()

    await expect(banner).not.toBeVisible()

    const consent = await page.evaluate(() => localStorage.getItem('mume_cookie_consent'))
    expect(consent).toBe('denied')
  })
})
