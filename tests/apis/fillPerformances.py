import requests
import random
import datetime
from faker import Faker

# Initialize Faker for generating random timestamps
fake = Faker()

# Constants
BUYER_APP_ID = "668d36a7a704d4a37e52bef9"
SAVE_ENDPOINT = "http://localhost:3001/api/routes/analytics/performance/add"

def generate_random_timestamp(start_date, end_date):
    return fake.date_time_between_dates(datetime_start=start_date, datetime_end=end_date)

def generate_random_metric():
    return {
        "impressions": random.randint(1, 20),
        "clicks": random.randint(0, 10),
        "orders": random.randint(0, 5)
    }


def save_metrics(num_days):
    today = datetime.datetime.now()
    start_date = today - datetime.timedelta(days=num_days)

    num_entries = 50  # Number of dummy entries to generate

    for _ in range(num_entries):
        timestamp = generate_random_timestamp(start_date, today)
        metric = generate_random_metric()

        data = {
            "buyerAppId": BUYER_APP_ID,
            "timestamp": timestamp.isoformat(),
            "metric": metric
        }

        response = requests.post(SAVE_ENDPOINT, json=data)

        if response.status_code == 201:
            print(f"Saved metric at {timestamp}: {metric}")
        else:
            print(f"Failed to save metric at {timestamp}: {response.content}")

if __name__ == "__main__":
    num_days = int(input("Enter the number of days from today to generate metrics: "))
    save_metrics(num_days)
