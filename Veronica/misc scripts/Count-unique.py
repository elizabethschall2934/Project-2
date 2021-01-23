import json

unique = []

with open("small_data.json", encoding="utf-8") as f:
    data = json.load(f)
    i = 0
    for x in data:

        # Parse address components
        street = data[i]["contact"]["address"]["address1"]
        city = data[i]["contact"]["address"]["city"]
        state = data[i]["contact"]["address"]["state"]
        address = f"{street}, {city}, {state}"

        if address not in unique_addresses:
            unique_addresses.append(address)

        i += 1

unique_address_count = len(unique_addresses)

print(unique_address_count)
