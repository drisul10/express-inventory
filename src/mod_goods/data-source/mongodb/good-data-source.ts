import { Db, Collection, Document } from "mongodb"
import { GoodsRequest, GoodsResponse } from "@/entity/goods"

export interface GoodsDataSource {
  collName: string

  createOne(goods: GoodsRequest): Promise<void>

  updateOne(id: String, payload: GoodsResponse): Promise<void>

  softDeleteOne(id: String): Promise<void>

  deleteOne(id: String): Promise<void>

  getAll(): Promise<GoodsResponse[]>

  getOne(id: String): Promise<GoodsResponse | null>
}

export class MongoDBGoodsDataSourceImpl implements GoodsDataSource {
  private query: Collection<Document>

  constructor(mongodbInstance: Db) {
    this.query = mongodbInstance.collection(this.collName)
  }

  collName: string = "inv_goods"

  async createOne(goods: GoodsRequest) {
    await this.query.insertOne(goods)
  }

  async softDeleteOne(id: String) {
    await this.query.deleteOne(id)
  }

  async deleteOne(id: String) {
    await this.query.deleteOne(id)
  }

  async updateOne(id: String, data: GoodsRequest) {
    await this.query.updateOne(id, data)
  }

  async getAll(): Promise<GoodsResponse[]> {
    const result = await this.query.find({}).toArray()
    return result.map((it) => ({
      id_goods: it.id_goods,
      name: it.name,
    }))
  }

  async getOne(id: String): Promise<GoodsResponse | null> {
    const result = await this.query.findOne({ _id: id })

    if (!result) return null

    return {
      id_goods: result.id_goods,
      name: result.name,
    }
  }
}
