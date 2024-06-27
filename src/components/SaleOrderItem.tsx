import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface SaleOrderItem {
  id: number
  productName: string
  quantity: number
  price: number
}

const SaleOrderItemComponent: React.FC = () => {
  const [items, setItems] = useState<SaleOrderItem[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/sale-order-items')
      .then(response => {
        setItems(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      <h1>Sale Order Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.productName} - {item.quantity} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SaleOrderItemComponent
