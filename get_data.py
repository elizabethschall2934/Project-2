from cookies import cookies, headers, key
from bs4 import BeautifulSoup
import requests
import re
import petpy
import json
import pymongo

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


    client = pymongo.MongoClient("mongodb+srv://TeamCatViz:RockingTeam#1@cluster0.jityt.mongodb.net/pet_db?retryWrites=true&w=majority")
    client.pet_db.pet_data.delete_many({})
    client.pet_db.pet_data.insert_many(animal_list)
