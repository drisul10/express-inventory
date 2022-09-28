import moduleAlias from "module-alias"
moduleAlias.addAliases({
  "@": `${__dirname}/`,
})

import server from "@/server"
import { mongoDbConnect } from "@/infra/db/mongodb/connection"
import { firestoreDbInstance } from "@/infra/db/firestore/connection"
import { logger } from "@/infra/log/console/logger"
import { applyHandlerV1 } from "@/route/v1"
import env from "@/config/env"
;(async () => {
  const mongoDbInstance = await mongoDbConnect()

  applyHandlerV1(server, mongoDbInstance, firestoreDbInstance)

  server.listen(env.ServerPort, () =>
    logger.log(`Running on ${env.ServerURL}:${env.ServerPort}`)
  )
})()
