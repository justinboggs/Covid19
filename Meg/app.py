import datetime as dt
import numpy as np
#import pandas as pd

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

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Merged_Data_Modified = Base.classes.merged_data_modified


# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    results = session.query(Data.Merged_Data_Modified).all()

    # Unravel results into a 1D array and convert to a list
    country_data = list(np.ravel(results))
    return jsonify(country_data)


if __name__ == '__main__':
    app.run(debug=True)
