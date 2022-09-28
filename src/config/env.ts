import dotenv from "dotenv"
dotenv.config()

export default {
  ServerURL: process.env.SERVER_URL || "http://localhost",
  ServerPort: process.env.SERVER_PORT || 3000,
  MongoDbURL: process.env.MONGODB_URL || "mongodb://localhost:27017/db_inv",
  FirebaseDomain: process.env.FIRESTORE_DOMAIN || "",
  FirebaseProjectId: process.env.FIRESTORE_PROJECT_ID || "",
  FirebaseAppId: process.env.FIRESTORE_APP_ID || "",
  FirebaseAppKey: process.env.FIRESTORE_APP_KEY || "",
  FirebaseStorageBucket: process.env.FIRESTORE_STORAGE_BUCKET || "",
  FirebaseMsgSenderId: process.env.FIRESTORE_MSG_SENDER_ID || "",
}
