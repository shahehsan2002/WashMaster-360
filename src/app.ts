import express, { Request, Response } from'express'
const app = express()

// middleware
app.use(express.json())

// routes
app.use("/api/user",userRoutes)

app.get('/', (req :Request, res:Response) => {
  res.send('Hello World!')
})

export default app