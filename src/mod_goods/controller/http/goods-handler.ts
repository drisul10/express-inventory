// import { auth } from "@/middleware"
import { Request, Response, Router } from "express"
import {
  CreateOneGoodsUcase,
  CreateOneGoodsUcaseImpl,
} from "@/mod_goods/usecase/create-one-goods"
import {
  GetAllGoodsUcase,
  GetAllGoodsUcaseImpl,
} from "@/mod_goods/usecase/get-all-goods"
import { GoodsRepositoryImpl } from "@/mod_goods/repository/goods-repository"
import { MongoDBGoodsDataSourceImpl } from "@/mod_goods/data-source/mongodb/good-data-source"
import { Db } from "mongodb"

const router = Router()

function goodsHandler(
  createOneGoodsUcase: CreateOneGoodsUcase,
  getAllGoodsUcase: GetAllGoodsUcase
) {
  router.post("/", async (req: Request, res: Response) => {
    try {
      const goods = await createOneGoodsUcase.execute(req.body)
      res.json(goods)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.get("/", async (req: Request, res: Response) => {
    try {
      const goods = await getAllGoodsUcase.execute()
      res.json(goods)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  return router
}

const repository = (db: Db) =>
  new GoodsRepositoryImpl(new MongoDBGoodsDataSourceImpl(db))

export const goodsHandlerInstance = (db: Db) => {
  return goodsHandler(
    new CreateOneGoodsUcaseImpl(repository(db)),
    new GetAllGoodsUcaseImpl(repository(db))
  )
}
