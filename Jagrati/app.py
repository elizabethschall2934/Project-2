from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
import json
from bson import json_util, ObjectId

app = Flask(__name__)

#Use flask_pymongo to set up mongo connection
#app.config["MONGO_URI"] = "mongodb://localhost:27017/pet_db"
app.config["MONGO_URI"] = "mongodb+srv://TeamCatViz:RockingTeam#1@cluster0.jityt.mongodb.net/pet_db?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route("/")
def index():
    pets_coll = mongo.db.pet_data.find()
    pets_json = json.loads(json_util.dumps(pets_coll))
    loc_coll = mongo.db.location_data.find()
    loc_json = json.loads(json_util.dumps(loc_coll))
    return render_template("index.html", pets_data=pets_json, locs_data=loc_json)

""" @app.route("/getPetData")
def getPetData():
    pets_coll = mongo.db.pet_data.find()
    pets_json = json.loads(json_util.dumps(pets_coll))
    return pets_json

@app.route("/getLocationData")
def getLocationData():
    loc_coll = mongo.db.location_data.find()
    loc_json = json.loads(json_util.dumps(loc_coll))
    return loc_json """

if __name__ == "__main__":
    app.run(debug=True)