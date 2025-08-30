from playwright.sync_api import sync_playwright

def get_temperature():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://szklarniapwr.pl/", wait_until="domcontentloaded")

        page.wait_for_function("document.querySelector('.temp') && document.querySelector('.temp').innerText !== '--'", timeout=5000)
        
        temp = page.inner_text(".temp")
        browser.close()
        return temp

print(get_temperature())