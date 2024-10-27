from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import the routes
from routes import *

# Create the tables (if they don't already exist) with application context
with app.app_context():
    db.create_all()
    
if __name__ == '__main__':
    app.run(debug=True)