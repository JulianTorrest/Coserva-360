import { Request, Response } from 'express'
import SaleOrderItem from '../models/saleOrderItem'
import { saleOrderItemSchema } from '../services/validationService'

export const getAllSaleOrderItems = async (req: Request, res: Response) => {
  try {
    const items = await SaleOrderItem.findAll()
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sale order items' })
  }
}

export const createSaleOrderItem = async (req: Request, res: Response) => {
  try {
    const { error } = saleOrderItemSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const item = await SaleOrderItem.create(req.body)
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create sale order item' })
  }
}

export const getSaleOrderItemById = async (req: Request, res: Response) => {
  try {
    const item = await SaleOrderItem.findByPk(req.params.id)
    if (item) {
      res.status(200).json(item)
    } else {
      res.status(404).json({ error: 'Sale order item not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sale order item' })
  }
}

export const updateSaleOrderItem = async (req: Request, res: Response) => {
  try {
    const { error } = saleOrderItemSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const [updated] = await SaleOrderItem.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated) {
      const updatedItem = await SaleOrderItem.findByPk(req.params.id)
      res.status(200).json(updatedItem)
    } else {
      res.status(404).json({ error: 'Sale order item not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update sale order item' })
  }
}

export const deleteSaleOrderItem = async (req: Request, res: Response) => {
  try {
    const deleted = await SaleOrderItem.destroy({ where: { id: req.params.id } })
    if (deleted) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: 'Sale order item not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete sale order item' })
  }
}
