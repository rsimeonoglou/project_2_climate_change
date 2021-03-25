# Import Flask
from flask import Flask, jsonify, request, url_for, redirect, render_template, Blueprint


# Dependencies and Setup
import numpy as np
import datetime as dt
import json
import pandas as pd
# import numpy as np
# from sqlalchemy.pool import StaticPool

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

#################################################
# Database Setup
#################################################
engine = create_engine('postgresql://postgres:{}@localhost:5432/Global-Warming')
conn = engine.connect()

#################################################
# Flask Setup
#################################################
app = Flask(__name__)




#################################################
# Flask Routes
#################################################


@app.route("/")
def index():             
    return render_template('index.html')

# ==================================================

@app.route("/global-surface-temperature")
def temperatures():
    # Create our session (thread) from Python to the DB
    session = Session(engine)
    temperature = pd.read_sql("SELECT * FROM globaltemperatures", engine)
    session.close()
    appDataResp = {"columns": ["Year","LandAverageTemperature","land_avg_fahrenheit","Period"], "data": [], "years": []}
    years = []
    for index, row in temperature.iterrows():
        temperatureRow = []
        
        temperatureRow.append(row['Year'])
        temperatureRow.append(row['LandAverageTemperature'])
        temperatureRow.append(row['land_avg_fahrenheit'])
        temperatureRow.append(row['Period'])
        years.append(row['Year'])
        appDataResp['data'].append(temperatureRow)

    years = list(set(years))
    years.sort()
    appDataResp['years'].extend(years)
        
    return render_template("global-surface-temperature.html", appData = appDataResp)

# =========================================================================
        

@app.route('/greenhouse-gases', methods=['GET', 'POST'])
def greenhousegases():
    if request.method == 'POST':
        # do stuff when the form is submitted

        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('greenhouse-gases'))

    # show the form, it wasn't submitted
    return render_template("greenhouse-gases.html")
    
# ==============================================================

@app.route("/population-by-country") 
def population():
    # Create our session (thread) from Python to the DB
    # Create our session (thread) from Python to the DB
    session = Session(engine)
    population = pd.read_sql("SELECT * FROM population", engine)    
    session.close()
    appDataResp = {"columns": ["Year","Country","Rate","Population"], "data": [], "years": []}
    years = []
    for index, row in population.iterrows():
        populationRow = []        

        populationRow.append(row['Year'])
        populationRow.append(row['Country'])
        populationRow.append(row['Rate'])
        populationRow.append(row['Population'])

        years.append(row['Year'])
        appDataResp['data'].append(populationRow)

    years    = list(set(years))
    years.sort()
    appDataResp['years'].extend(years)
    resp = jsonify(appDataResp)
    return render_template("population-by-country.html", appData = appDataResp)

# ==============================================================  

@app.route('/Global', methods=['GET', 'POST'])
def Global():
    if request.method == 'POST':
        # do stuff when the form is submitted

        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('Global'))

    # show the form, it wasn't submitted
    return render_template('Global.html')

@app.route('/Country', methods=['GET', 'POST'])
def Country():
    if request.method == 'POST':
        # do stuff when the form is submitted

        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('Country'))

    # show the form, it wasn't submitted
    return render_template('Country.html')    

@app.route('/Causes', methods=['GET', 'POST'])
def Causes():
    if request.method == 'POST':
        # do stuff when the form is submitted

        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('Causes'))

    # show the form, it wasn't submitted
    return render_template('Causes.html')  

@app.route('/help', methods=['GET', 'POST'])
def help():
    if request.method == 'POST':
        # do stuff when the form is submitted

        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('help'))

    # show the form, it wasn't submitted
    return render_template('help.html', text = "NEED HELP???")

if __name__ == '__main__':
    app.run(debug=True)
