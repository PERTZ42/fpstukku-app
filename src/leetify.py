from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options


class WebScraper:
    def __init__(self):
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 5)


    def navigate_to_url(self, url):
        try:
            self.driver.get(url)
            return True
        except Exception as e:
            print(f"Error navigating to URL {url}: {str(e)}")
            return False


    def playername(self, account_link, file):
        if self.driver.current_url != account_link:
            if not self.navigate_to_url(account_link):
                return None
        try:
            rank_and_name = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, 'rank-and-name'))
            )
            player_name = rank_and_name.find_element(By.CLASS_NAME, 'text-truncate').text
            file.write(player_name + "\n")
            return player_name
        except Exception as e:
            print(f"Error getting player name: {str(e)}")
            return None


    def clubwinrate(self, account_link):
        if self.driver.current_url != account_link:
            if not self.navigate_to_url(account_link):
                return None
        try:
            win_rate = self.wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, 'win-rate'))
            )
            WebDriverWait(win_rate, 10).until(EC.presence_of_element_located((By.CLASS_NAME, 'score-text')))
            winrate_percentage = win_rate.find_element(By.CLASS_NAME, 'score-text').text
            return winrate_percentage
        except Exception as e:
            print(f"Error getting player winrate: {str(e)}")
            return None


    def steamprofile(self, account_link):
        if self.driver.current_url != account_link:
            if not self.navigate_to_url(account_link):
                return None
        try:
            steam_profile_link = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'div.profiles a[ngbtooltip="Steam Profile"]'))
            )
            return steam_profile_link.get_attribute('href')
        except Exception as e:
            print(f"Error getting Steam Profile link: {str(e)}")
            return None



    def get_player_steam_level(self, steam_profile_link):
        if self.driver.current_url != steam_profile_link:
            if not self.navigate_to_url(steam_profile_link):
                return None

        try:
            private_info_check = self.driver.find_elements(By.CLASS_NAME, 'profile_private_info')
            if private_info_check:
                return "pvt"
            persona_info = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'div.persona_name.persona_level'))
            )
            level_element = persona_info.find_element(By.CLASS_NAME, 'friendPlayerLevelNum')
            steam_level = level_element.text
            return steam_level
        except Exception as e:
            print(f"Error getting player's Steam level: {str(e)}")
            return None


    def stats(self, leetify_profile_link, file):
        if self.driver.current_url != leetify_profile_link:
            if not self.navigate_to_url(leetify_profile_link):
                return None
        try:
            elements = self.wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'stats')))
            text = []
            i = 0
            for element in elements:
                if i == 2:
                    break
                text.append(element.text)
                file.write(element.text + "\n")
                i = i + 1
            return text
        except Exception as e:
            return e


    def winrate(self, leetify_profile_link, file):
        if self.driver.current_url != leetify_profile_link:
            if not self.navigate_to_url(leetify_profile_link):
                return None
        try:
            parent_div = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'meta')))
            valuediv = parent_div.text
            file.write(valuediv + "\n\n")
            return valuediv
        except Exception as e:
            return e


    def close_browser(self):
        self.driver.quit()




scraper = WebScraper()

tukku_accounts = [
"https://leetify.com/app/profile/76561198071068054", # pertz
"https://leetify.com/app/profile/76561198065342054", # slouger
"https://leetify.com/app/profile/76561198071512102", # kimble
"https://leetify.com/app/profile/76561198009037129", # one
"https://leetify.com/app/profile/76561198250923548", # anianus
"https://leetify.com/app/profile/76561198442009374", # znattu
"https://leetify.com/app/profile/76561198066021020", # syvo
"https://leetify.com/app/profile/76561198151952809", # temz
"https://leetify.com/app/profile/76561198071450889", # jonit2
"https://leetify.com/app/profile/76561199390049021", # hattiwataa
"https://leetify.com/app/profile/76561198981780576", # flora
"https://leetify.com/app/profile/76561198085013853", # musa
"https://leetify.com/app/profile/76561198314484586", # tompstommi
]

file = open('leetify.txt', 'w')

for account in tukku_accounts:
    scraper.playername(account, file)
    scraper.stats(account, file)
    scraper.winrate(account, file)



file.close()
