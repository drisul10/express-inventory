import { MongoClient, Db } from "mongodb"
import env from "@/config/env"

export async function mongoDbConnect(): Promise<Db> {
  const client = await MongoClient.connect(env.MongoDbURL)

  return client.db()
}
