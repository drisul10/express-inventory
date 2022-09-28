import { Db, Collection, Document } from "mongodb"
import { AuthRequest } from "@/entity/auth"

export interface AuthDatasource {
  signUp(payload: AuthRequest): Promise<void>

  signIn(payload: AuthRequest): Promise<void>
}

export class MongoDBAuthDatasourceImpl implements AuthDatasource {
  private query: Collection<Document>
  private collectionName: string

  constructor(mongodbInstance: Db) {
    this.collectionName = "inv_auths"
    this.query = mongodbInstance.collection(this.collectionName)
  }

  async signUp(payload: AuthRequest) {
    await this.query.insertOne(payload)
  }

  async signIn(payload: AuthRequest) {
    // await this.query.insertOne(payload)
  }
}
