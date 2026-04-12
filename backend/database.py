"""
database.py — MongoDB connection via Motor (async driver)
"""

import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://admin:devcelliitmandi@mongo:27017/kpdevcel?authSource=admin")

# Auto-detect if we should use TLS based on the URI
use_tls = "mongodb+srv://" in MONGO_URI
client = AsyncIOMotorClient(MONGO_URI, tls=use_tls, tlsAllowInvalidCertificates=True)
db = client["kpdevcel"]

team_collection = db["team"]
projects_collection = db["projects"]
events_collection = db["events"]
