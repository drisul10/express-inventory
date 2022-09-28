import { API_PREFIX_V1 } from "@/config/api"
import { Router } from "express"
import { Db } from "mongodb"
import { goodsHandlerInstance } from "@/mod_goods/controller/http/goods-handler"
import { warehouseHandlerInstance } from "@/mod_warehouse/controller/http/warehouse-handler"
import { authHandlerInstance } from "@/mod_auth/controller/http/auth-handler"
import { Firestore } from "firebase/firestore/lite"

export function applyHandlerV1(
  router: Router,
  mongoDbInstance: Db,
  firestoreDbInstance: Firestore
) {
  router.use(API_PREFIX_V1 + "/goods", goodsHandlerInstance(mongoDbInstance))

  router.use(
    API_PREFIX_V1 + "/warehouse",
    warehouseHandlerInstance(firestoreDbInstance)
  )

  router.use(API_PREFIX_V1 + "/auth", authHandlerInstance(mongoDbInstance))
}
