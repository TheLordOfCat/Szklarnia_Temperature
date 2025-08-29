from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
import time

options = Options()
options.headless = True
driver = webdriver.Firefox(options=options)
driver.get("https://szklarniapwr.pl/")

time.sleep(2)  # wait for JS to update temperature

soup = BeautifulSoup(driver.page_source, "html.parser")
temp_div = soup.find("div", class_="temp")
print(temp_div.get_text(strip=True))

driver.quit()
