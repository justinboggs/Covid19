import datetime as dt
import numpy as np
import pandas as pd
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import Flask, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Country_Stats.sqlite")


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
df= pd.read_sql_query("select * from 'countries'",con=engine)

@app.route("/")
def welcome():

    #Returns text on page for all routes
    return (
        f"Welcome to the Corona Virus API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/all_data<br/>"
        f"/api/v1.0/Countries<br/>"
        f"/api/v1.0/HighIndividualism<br/>"
        f"/api/v1.0/LowIndividualism")


@app.route("/api/v1.0/all_data")
def all_data():

    results = df.to_html()

    return (results)

    
@app.route("/api/v1.0/Countries")
def countries():

    results = pd.read_sql("select * from 'countries'", con=engine)

    #Unravel results into a 1D array and convert to a list
    results = results.to_json(orient = "table")
    return jsonify(json.loads(results))


@app.route("/api/v1.0/HighIndividualism")
def idv():
    
    #Query specific data
    df_idv = pd.read_sql_query(f'''select * from countries where countries."idv" > 75 ''',con=engine)
    
    results = df_idv.to_html()

    return (results)

@app.route("/api/v1.0/LowIndividualism")
def col():
    
    #Query specific data
    df_col = pd.read_sql_query(f'''select * from countries where countries."idv" < 25 ''',con=engine)
    
    results = df_col.to_html()

    return (results)


if __name__ == '__main__':
    app.run(debug=True)
