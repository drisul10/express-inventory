import { Request, Response, Router } from "express"
import {
  SignInAuthUcase,
  SignInAuthUcaseImpl,
} from "@/mod_auth/usecase/sign-in-ucase"
import {
  SignUpAuthUcase,
  SignUpAuthUcaseImpl,
} from "@/mod_auth/usecase/sign-up-ucase"
import { AuthRepositoryImpl } from "@/mod_auth/repository/auth-repository"
import { MongoDBAuthDatasourceImpl } from "@/mod_auth/data-source/mongodb/auth-datasource"
import { Db } from "mongodb"

const router = Router()

function authHandler(
  signUpAuthUcase: SignUpAuthUcase,
  signInAuthUcase: SignInAuthUcase
) {
  router.post("/sign/up", async (req: Request, res: Response) => {
    try {
      const response = await signUpAuthUcase.execute(req.body)
      res.json(response)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.post("/sign/in", async (req: Request, res: Response) => {
    try {
      const response = await signInAuthUcase.execute(req.body)
      res.json(response)
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  return router
}

const repository = (db: Db) =>
  new AuthRepositoryImpl(new MongoDBAuthDatasourceImpl(db))

export const authHandlerInstance = (db: Db) => {
  return authHandler(
    new SignUpAuthUcaseImpl(repository(db)),
    new SignInAuthUcaseImpl(repository(db))
  )
}
