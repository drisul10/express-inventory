import { initializeApp, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import env from "@/config/env"

const config = {
  apiKey: env.FirebaseAppKey,
  authDomain: env.FirebaseDomain,
  projectId: env.FirebaseProjectId,
  storageBucket: env.FirebaseStorageBucket,
  messagingSenderId: env.FirebaseMsgSenderId,
  appId: env.FirebaseAppId,
}

const app = initializeApp(config)
export const firestoreDbInstance = getFirestore(app)
