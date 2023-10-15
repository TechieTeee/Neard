import requests
import sqlite3

# Near Testnet API endpoint
api_url = "https://near-testnet.api.pagoda.co/eapi/v1"

# SQLite database setup
db_connection = sqlite3.connect("near_data.db")
db_cursor = db_connection.cursor()

# Create a table for storing Near data
db_cursor.execute('''
    CREATE TABLE IF NOT EXISTS near_data (
        block_height INTEGER PRIMARY KEY,
        timestamp INTEGER,
        transactions_count INTEGER
    )
''')

# Function to fetch data from Near Testnet API
def fetch_near_data():
    response = requests.get(f"{api_url}/blocks?finality=final")
    data = response.json()
    return data.get("data", [])

# Function to transform and load data into SQLite
def process_and_load_data(near_data):
    for block in near_data:
        block_height = block["header"]["height"]
        timestamp = block["header"]["timestamp"]
        transactions_count = len(block["transactions"])

        # Insert or update data in the SQLite database
        db_cursor.execute('''
            INSERT OR REPLACE INTO near_data
            (block_height, timestamp, transactions_count)
            VALUES (?, ?, ?)
        ''', (block_height, timestamp, transactions_count))

    # Commit the changes to the database
    db_connection.commit()

# Main ETL process
def main():
    near_data = fetch_near_data()
    process_and_load_data(near_data)

# Run the ETL process
if __name__ == "__main__":
    main()

# Close the database connection
db_connection.close()
