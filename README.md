# california_pets
Interactive California Pet Finder Dashboard

Project 2: Pet Adoption Dashboard
Ran Wei, Veronica Nixon, Elizabeth Schall, Jagrati Joshi, Natalie Smith

Goal: To publish an interactive dashboard that allows a user to search for recently adoptable pets. We will represent adoptable pet populations that will be searchable by zip code, a table that may be filtered based off user preferences, as well as sunburst graph that helps to break down popular pet species and breeds. 

Interactive Resources:

The GeoPet Map: The pet map will show the top 10 types of adoptable pets across the country (dog, cat, rabbit, sugar glider, etc.). A unique icon will be used for each type of pet. To improve the drawing speed of the map, the cluster marker functionality will be used. Pop-ups will display individual information available for the pet such as their photo, name, and the link to the adoption organization. A search field will allow the user to enter their zip code and zoom/center the map over their region. The map shown below, and accessible at this link, illustrates the cluster marker functionality: http://bl.ocks.org/awoodruff/5de3553bb1f1b0c5f90d.

 

Animal Info Table: The animal information table will be a responsive table that will provide direct links to the main Petfinder profile and adoption organization info. This table will have the functionality to filter based off of some of the base data info from the API

Pet Species Sunburst Graph: https://observablehq.com/@d3/zoomable-sunburst we would like to utilize this interactive tool to show popular pet types and primary breeds based off their location. This allows users who are comparing breed types to see what other residents have in relation to their interests. 

Tech Resources:

•	Petfinder API: https://www.petfinder.com/developers/v2/docs/#api-calls
o	Allows calls to be made in relation to www.petfinder.com
•	Petpy: https://github.com/aschleg/petpy 
o	A custom API python compatible package that allows the JSON data to be parsed for better manipulation
•	SB Admin 2: https://github.com/startbootstrap/startbootstrap-sb-admin-2
o	A general skeleton for our interactive user dashboard that will integrate the custom features of our project

Other tools:

•	MongoDB
•	Flask
•	HTML/CSS/JS Data Tables
