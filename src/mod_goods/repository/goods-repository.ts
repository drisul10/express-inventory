import { GoodsRequest, GoodsResponse } from "@/entity/goods"
import { GoodsDataSource } from "@/mod_goods/data-source/mongodb/good-data-source"

export interface GoodsRepository {
  createOne(goods: GoodsRequest): Promise<void>
  updateOne(id: String, payload: GoodsRequest): Promise<void>
  softDeleteOne(id: String): Promise<void>
  deleteOne(id: String): Promise<void>
  getAll(): Promise<GoodsResponse[]>
  getOne(id: String): Promise<GoodsResponse | null>
}

export class GoodsRepositoryImpl implements GoodsRepository {
  dataSource: GoodsDataSource

  constructor(goodsDataSource: GoodsDataSource) {
    this.dataSource = goodsDataSource
  }

  async createOne(goods: GoodsRequest) {
    await this.dataSource.createOne(goods)
  }

  async updateOne(id: String, payload: GoodsRequest) {
    await this.dataSource.updateOne(id, payload)
  }

  async softDeleteOne(id: String) {
    await this.dataSource.softDeleteOne(id)
  }

  async deleteOne(id: String) {
    await this.dataSource.deleteOne(id)
  }

  async getAll(): Promise<GoodsResponse[]> {
    return await this.dataSource.getAll()
  }

  async getOne(id: String): Promise<GoodsResponse | null> {
    return await this.dataSource.getOne(id)
  }
}
