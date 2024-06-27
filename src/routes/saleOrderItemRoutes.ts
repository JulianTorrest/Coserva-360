import { Router } from 'express'
import {
  getAllSaleOrderItems,
  createSaleOrderItem,
  getSaleOrderItemById,
  updateSaleOrderItem,
  deleteSaleOrderItem,
} from '../controllers/saleOrderItemController'

const router = Router()

router.get('/sale-order-items', getAllSaleOrderItems)
router.post('/sale-order-items', createSaleOrderItem)
router.get('/sale-order-items/:id', getSaleOrderItemById)
router.put('/sale-order-items/:id', updateSaleOrderItem)
router.delete('/sale-order-items/:id', deleteSaleOrderItem)

export default router
