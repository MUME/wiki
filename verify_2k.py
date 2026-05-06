import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Simulation 2K monitor (2560x1440)
        page = await browser.new_page(viewport={'width': 2560, 'height': 1440})

        os.makedirs('verification', exist_ok=True)

        url = "http://localhost:8890/wiki/pages/Warrior_Guide"
        print(f"Navigating to {url} at 2K resolution...")
        try:
            await page.goto(url)
            await page.wait_for_timeout(3000)

            details = await page.evaluate("""() => {
                const container = document.querySelector('.VPDoc .container');
                const contentContainer = document.querySelector('.VPDoc .content-container');
                const aside = document.querySelector('.aside');

                return {
                    containerWidth: container ? window.getComputedStyle(container).width : 'N/A',
                    contentWidth: contentContainer ? window.getComputedStyle(contentContainer).width : 'N/A',
                    asideRight: aside ? aside.getBoundingClientRect().right : 'N/A',
                    windowWidth: window.innerWidth
                };
            }""")
            print(f"Results: {details}")

            await page.screenshot(path="verification/warrior_guide_2k.png", full_page=False)
            print("Screenshot saved to verification/warrior_guide_2k.png")

        except Exception as e:
            print(f"Error: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
