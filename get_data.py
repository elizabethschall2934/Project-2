from cookies import cookies, headers, key
from bs4 import BeautifulSoup
import requests
import re
import petpy
import json

session = requests.Session()
response = requests.get('https://www.petfinder.com/user/developer-settings/', headers=headers, cookies=cookies)

soup = BeautifulSoup(response.text, 'html.parser')
secret_html = soup.find("h3", string="Secret").next_sibling.next_sibling.script.string

secret = re.findall(r'"(.*?)"', secret_html)[1]

pf = petpy.Petfinder(key=key, secret=secret)

animal_list = []

try:
    animals_all = pf.animals(location = '35.466895,-122.115810', distance=500, pages=None)
except Exception as x:
    print(x)
else:
    for animal in animals_all['animals']:
        if animal['contact']['address']['state'] == "CA" and (animal not in animal_list):
            animal_list.append(animal)

ca_animals = {'animals': animal_list}

##Change this output path to MongoDB in the future.
json.dump(ca_animals, open("ca_data_0123.json", "w+"))
