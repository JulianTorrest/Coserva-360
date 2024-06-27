import express from 'express'
import bodyParser from 'body-parser'
import saleOrderItemRoutes from './routes/saleOrderItemRoutes'
import sequelize from './config/database'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/api', saleOrderItemRoutes)

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`)
  await sequelize.sync()
})
