import { WareHouseRequest, WareHouseResponse } from "@/entity/warehouse"
import { FirestoreDbWareHouseDataSource } from "@/mod_warehouse/data-source/firestore/warehouse-data-source"

export interface WareHouseRepository {
  createOne(goods: WareHouseRequest): Promise<void>
  updateOne(id: String, payload: WareHouseRequest): Promise<void>
  softDeleteOne(id: String): Promise<void>
  deleteOne(id: String): Promise<void>
  getAll(): Promise<WareHouseResponse[]>
  getOne(id: String): Promise<WareHouseResponse | null>
}

export class WareHouseRepositoryImpl implements WareHouseRepository {
  dataSource: FirestoreDbWareHouseDataSource

  constructor(goodsDataSource: FirestoreDbWareHouseDataSource) {
    this.dataSource = goodsDataSource
  }

  async createOne(payload: WareHouseRequest) {
    await this.dataSource.createOne(payload)
  }

  async updateOne(id: string, payload: WareHouseRequest) {
    await this.dataSource.updateOne(id, payload)
  }

  async softDeleteOne(id: string) {
    await this.dataSource.softDeleteOne(id)
  }

  async deleteOne(id: string) {
    await this.dataSource.deleteOne(id)
  }

  async getAll(): Promise<WareHouseResponse[]> {
    return await this.dataSource.getAll()
  }

  async getOne(id: string): Promise<WareHouseResponse | null> {
    return await this.dataSource.getOne(id)
  }
}
