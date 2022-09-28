import { GoodsResponse } from "@/entity/goods"
import { GoodsRepository } from "@/mod_goods/repository/goods-repository"

export interface GetAllGoodsUcase {
  execute(): Promise<GoodsResponse[]>
}

export class GetAllGoodsUcaseImpl implements GetAllGoodsUcase {
  repository: GoodsRepository

  constructor(goodsRepository: GoodsRepository) {
    this.repository = goodsRepository
  }

  async execute(): Promise<GoodsResponse[]> {
    return await this.repository.getAll()
  }
}
