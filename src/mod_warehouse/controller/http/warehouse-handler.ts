// import { auth } from "@/middleware"
import { Request, Response, Router } from "express"
import {
  CreateOneWareHouseUcase,
  CreateOneWareHouseUcaseImpl,
} from "@/mod_warehouse/usecase/create-one-warehouse"
import {
  GetAllWareHouseUcase,
  GetAllWareHouseUcaseImpl,
} from "@/mod_warehouse/usecase/get-all-warehouse"
import { WareHouseRepositoryImpl } from "@/mod_warehouse/repository/warehouse-repository"
import { FirestoreDbWareHouseDataSourceImpl } from "@/mod_warehouse/data-source/firestore/warehouse-data-source"
import { Firestore } from "firebase/firestore/lite"

const router = Router()

function warehouseHandler(
  createOneWareHouseUcase: CreateOneWareHouseUcase,
  getAllWareHouseUcase: GetAllWareHouseUcase
) {
  router.post("/", async (req: Request, res: Response) => {
    try {
      const result = await createOneWareHouseUcase.execute(req.body)
      res.json(result)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.get("/", async (req: Request, res: Response) => {
    try {
      const result = await getAllWareHouseUcase.execute()
      res.json(result)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  return router
}

const repository = (db: Firestore) =>
  new WareHouseRepositoryImpl(new FirestoreDbWareHouseDataSourceImpl(db))

export const warehouseHandlerInstance = (db: Firestore) => {
  return warehouseHandler(
    new CreateOneWareHouseUcaseImpl(repository(db)),
    new GetAllWareHouseUcaseImpl(repository(db))
  )
}
