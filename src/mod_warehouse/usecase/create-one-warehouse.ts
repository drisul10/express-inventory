import { WareHouseRequest, WareHouseResponse } from "@/entity/warehouse"
import { WareHouseRepository } from "@/mod_warehouse/repository/warehouse-repository"

export interface CreateOneWareHouseUcase {
  execute(warehouse: WareHouseRequest): Promise<void>
}

export class CreateOneWareHouseUcaseImpl implements CreateOneWareHouseUcase {
  repository: WareHouseRepository

  constructor(warehouseRepository: WareHouseRepository) {
    this.repository = warehouseRepository
  }

  async execute(warehouse: WareHouseRequest): Promise<void> {
    return await this.repository.createOne(warehouse)
  }
}
