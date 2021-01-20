# * * *
# Geocode.py reads in the PetFinder dataset, parses the address data, and sends the list of addresses through the geopy module.
# As latitudes and longitudes are returned, they are inserted into a dictionary that will be used by map.js to look up lat/longs.
# * * *

# Import dependencies
import geopy
from geopy.geocoders import GoogleV3
import json
from config import Google_API_Key

# Create geopy object that will call Google Maps geocoding API
geolocator = GoogleV3(api_key=Google_API_Key,timeout=10)

# List to hold unique addresses
addresses = []

# Dictionary that will hold a list of unique addresses and their corresponding lat/longs
location_lookup_table = {}

# Function to read in all json files and compile all of their addresses into a single list of unique addresses
def addAddresses(dataset):
    with open(dataset, "r", encoding = "utf8") as f_in:
        data = json.load(f_in)
        i = 0
        for record in data:
            # Parse address components
            street = data[i]["contact"]["address"]["address1"]
            city = data[i]["contact"]["address"]["city"]
            state = data[i]["contact"]["address"]["state"]
            # Format address
            address = f"{street}, {city}, {state}"
            # If not already present and located in California, append to addresses array
            if (address not in addresses) and (state == "CA"):
                addresses.append(address)
            i += 1

# Function to geocode list of addresses
def geocode(addresses):
    for address in addresses:
        try:
            response = geolocator.geocode(address).point
             # Parse coordinates from response and add new key/value pair to dictionary
            location_lookup_table[address] = [response[1], response[0]]
        except Exception as e:
            print(e)
            print("Geocoding failure for address " + address)
    
       

# List of datasets containing address info to be merged
datasets = ["Bird_data.json", "cats_data.json", "dog_data.json", "Fish_data.json", "Horse_data.json", "Rabbit_data.json", "small_data.json"]

# Pass each dataset through addAddresses function to build list of unique addresses
for dataset in datasets:
    addAddresses(dataset)

# Pass addresses list to geocode function to obtain lat/long and fill out location_lookup_table dictionary
geocode(addresses)

# Export dictionary to location_lookup.json.
with open("location_lookup.json", "w") as f_out:
    json.dump(location_lookup_table, f_out)