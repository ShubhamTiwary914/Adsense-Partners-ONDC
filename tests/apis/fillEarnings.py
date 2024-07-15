import requests
import datetime
import random
from bson import ObjectId

def generate_object_id():
    return str(ObjectId())

base_url = "http://localhost:3001/api/routes/analytics/earnings/add"

def generate_data(days):
    dummy_data = []
    start_date = datetime.datetime.now() - datetime.timedelta(days=days)
    buyer_app_id = "668d36a7a704d4a37e52bef9"  # Yardtstick buyerAppID

    earnings_total = 0

    for i in range(days * 24):  # Hourly data for the specified number of days
        timestamp = start_date + datetime.timedelta(hours=i)
        
        # Small increment for earnings
        earnings_increment = random.uniform(0.5, 2.5)
        
        earnings_total += earnings_increment
        
        data = {
            "buyerAppID": buyer_app_id,
            "timestamp": timestamp.isoformat(),
            "metrics": {
                "earnings": round(earnings_total, 2),
                "seller": "Seller A",  # You might want to randomize this
                "action": "Sale"  # You might want to randomize this
            }
        }
        dummy_data.append(data)
    
    return dummy_data

# Get user input for number of days
days = int(input("Enter the number of days to generate earnings data for: "))

# Generate and send data
dummy_data = generate_data(days)

print(f"Generating earnings data for the last {days} days...")

for data in dummy_data:
    response = requests.post(base_url, json=data)
    if response.status_code == 200 or response.status_code == 201:
        print(f"Earnings data added successfully for timestamp: {data['timestamp']}")
    else:
        print(f"Failed to add earnings data for timestamp {data['timestamp']}: {response.status_code}, {response.text}")

print("Earnings data generation and sending complete.")