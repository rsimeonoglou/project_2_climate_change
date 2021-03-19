# Import Flask
from flask import Flask, jsonify, request, url_for, redirect, render_template, Blueprint


# Dependencies and Setup
import numpy as np
import datetime as dt

# Python SQL Toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.pool import StaticPool
import json
import pandas as pd

# Database Setup by creating engine to the db path
# engine = create_engine("sqlite:///GlobalWarming.db", echo=False)
engine = create_engine('postgresql://postgres:Aadhya2014@localhost:5432/Global-Warming')
conn = engine.connect()


# # Reflect GlobalWarming database into Base 
# Base = automap_base()
# # Reflect all the tables in hawaii db 
# Base.prepare(engine, reflect=True)

# # Create instances each Table
# population = Base.classes.Population
# # Temperature = Base.classes.globalsurfaceTemp

# Setting-up Flask
# Initialize Flask app
app = Flask(__name__)

# set-up all the routes 
@app.route("/api/v1.0/population")
def population():
    # Create our session (thread) from Python to the DB
    session = Session(engine)
    
    # country = session.query(Population.country).order_by(Population.date.desc())[0][0]
    # population_data = session.query(population.country, population.Lat, population.Lng).all()
    population_data = pd.read_sql("SELECT * FROM population", engine)
    return population_data.to_json()
        

# @app.route("/api/v1.0/greenhousegases")
# def greenhousegases():
#     # Create our session (thread) from Python to the DB
#     session = Session(engine)
    
#     greenhousegases = session.query(Greenhouse_gases.year, Greenhouse_gases.average,  Greenhouse_gases.rate).all()
    
#     session.close()
    
#     results = []
#     for row in greenhousegases:
#         rowyear = {}
#         rowyear["Year"] = row[0]
#         rowyear["Average"] = row[1]
     #  rowyear["Average"] = row[2]
#         results.append(rowyear)
#     return jsonify(results)
    

# @app.route("/api/v1.0/surfacetemperatures") 
# def surfacetemperatures():
#     # Create our session (thread) from Python to the DB
#     session = Session(engine)
    
#     surfacetemps = session.query(Measurement.id, Station.id, Measurement.station).\
#                     filter(Station.station == Measurement.station).\
#                     group_by(Measurement.station).\
#                     order_by(Measurement.id.desc()).all()
#     most_active_station = active_stations[0][1]
    
#     recent_date = session.query(Measurement.date).filter(Station.station == Measurement.station).filter(Station.id == most_active_station).order_by(Measurement.date.desc())[0][0]
#     recent_date = dt.datetime.strptime(recent_date, "%Y-%m-%d").date()
#     recent_year = recent_date - dt.timedelta(days=365)
#     recent_year_temp = session.query(Measurement.date, Measurement.tobs).filter(Measurement.date >= recent_year).order_by(Measurement.date.desc()).all()
    
#     session.close()
    
#     return dict(recent_year_temp)
    

# @app.route("/api/v1.0/questions") 
# def questions():
#     return """<html>
#             <center>
#             <img src="/static/silly.png", alt="There you go!!!", width="700",height="680" />
#             </center>
#             </html>"""

# set-up Home routes
@app.route("/")
def index():
             
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
