import json

with open("location_lookup.json", "r") as f_in:
        data = json.load(f_in)
        for x in data:
            print(data[x])