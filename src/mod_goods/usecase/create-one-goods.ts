import { GoodsRequest, GoodsResponse } from "@/entity/goods"
import { GoodsRepository } from "@/mod_goods/repository/goods-repository"

export interface CreateOneGoodsUcase {
  execute(goods: GoodsRequest): Promise<void>
}

export class CreateOneGoodsUcaseImpl implements CreateOneGoodsUcase {
  repository: GoodsRepository

  constructor(goodsRepository: GoodsRepository) {
    this.repository = goodsRepository
  }

  async execute(goods: GoodsRequest): Promise<void> {
    return await this.repository.createOne(goods)
  }
}
