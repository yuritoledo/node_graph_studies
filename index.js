import express from "express"
import expressGraphQL from "express-graphql"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import schema from './graphql/'

const app = express()
const PORT = process.env.PORT || "4000"
const db = "mongodb://admin:admin123@ds155516.mlab.com:55516/graphqlnode"

mongoose
  .connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({ schema, graphiql: true })
)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
