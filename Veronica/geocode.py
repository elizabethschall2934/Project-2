# * * *
# Geocode.py reads in the PetFinder dataset, parses the address data, and sends the list of addresses through the geopy module.
# As latitudes and longitudes are returned, they are inserted into a dictionary that will be used by map.js to look up lat/longs.
# * * *

# Import dependencies
from geopy.geocoders import GoogleV3
import json
from config import Google_API_Key

# Create geopy object that will call Google Maps geocoding API
geolocator = GoogleV3(api_key = Google_API_Key)

# Array that will hold intermediate formatted addresses
addresses = []
# Dictionary that will hold addresses and their corresponding lat/longs
location_lookup_table = {}

# Import PetFinder data
with open("testcats.json") as f_in:
    data = json.load(f_in)
    i = 0
    for cat in data:
        # Parse address components
        street = data[i]["contact"]["address"]["address1"]
        city = data[i]["contact"]["address"]["city"]
        state = data[i]["contact"]["address"]["state"]
        # Format address
        address = f"{street}, {city}, {state}"
        # If not already present, append to addresses array
        if address not in addresses:
            print(address)
            addresses.append(address)
        i += 1

    # Use Python's geocoder module to get coordinates from OpenStreetMap
    for address in addresses:
        response = geolocator.geocode("1401 E Wesleyan Dr, Tempe, AZ")
        print(response)
        print(response[1])
        print(response[2])
        # Parse coordinates from response and add new key/value pair to dictionary
        location_lookup_table[address] = [response[1], response[0]]

# Export dictionary to location_lookup.js.
with open("location_lookup.json", "w") as f_out:
    json.dump(location_lookup_table, f_out)