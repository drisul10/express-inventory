import { WareHouseResponse } from "@/entity/warehouse"
import { WareHouseRepository } from "@/mod_warehouse/repository/warehouse-repository"

export interface GetAllWareHouseUcase {
  execute(): Promise<WareHouseResponse[]>
}

export class GetAllWareHouseUcaseImpl implements GetAllWareHouseUcase {
  repository: WareHouseRepository

  constructor(warehouseRepository: WareHouseRepository) {
    this.repository = warehouseRepository
  }

  async execute(): Promise<WareHouseResponse[]> {
    return await this.repository.getAll()
  }
}
