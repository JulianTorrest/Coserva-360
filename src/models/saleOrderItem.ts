import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/database'

interface SaleOrderItemAttributes {
  id: number
  productName: string
  quantity: number
  price: number
}

interface SaleOrderItemCreationAttributes
  extends Optional<SaleOrderItemAttributes, 'id'> {}

class SaleOrderItem
  extends Model<SaleOrderItemAttributes, SaleOrderItemCreationAttributes>
  implements SaleOrderItemAttributes {
  public id!: number
  public productName!: string
  public quantity!: number
  public price!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

SaleOrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sale_order_items',
  }
)

export default SaleOrderItem
