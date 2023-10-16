# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from airflow.scripts.near_etl import run_etl as run_near_etl

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run-etl', methods=['POST'])
def trigger_etl():
    run_near_etl()
    return jsonify({'message': 'ETL process triggered successfully'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
