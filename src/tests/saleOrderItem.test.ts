import request from 'supertest'
import app from '../src/index'

describe('Sale Order Items API', () => {
  it('should get all sale order items', async () => {
    const res = await request(app).get('/api/sale-order-items')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('length')
  })

  it('should create a new sale order item', async () => {
    const res = await request(app)
      .post('/api/sale-order-items')
      .send({
        productName: 'Test Product',
        quantity: 10,
        price: 99.99,
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('should get a sale order item by id', async () => {
    const res = await request(app).get('/api/sale-order-items/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
  })

  it('should update a sale order item', async () => {
    const res = await request(app)
      .put('/api/sale-order-items/1')
      .send({
        productName: 'Updated Product',
        quantity: 20,
        price: 199.99,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
  })

  it('should delete a sale order item', async () => {
    const res = await request(app).delete('/api/sale-order-items/1')
    expect(res.statusCode).toEqual(204)
  })
})
