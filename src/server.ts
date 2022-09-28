import express from "express"
import { parseJSON, parseWWW, cors } from "@/middleware"
const server = express()

server.use(parseJSON)
server.use(parseWWW)
server.use(cors)

export default server
