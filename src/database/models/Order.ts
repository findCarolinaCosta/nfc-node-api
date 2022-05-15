import { DataTypes, Model } from 'sequelize'
import db from '.'
import Buyer from './Buyer'
import Provider from './Provider'

interface IOrder {
  id: number
  emissionDate: string
  value: string
  orderStatusBuyer: string
  buyerId: number
  providerId: number
}

class Order extends Model<IOrder> implements IOrder {
  id: number

  emissionDate: string

  value: string

  orderStatusBuyer: string

  buyerId: number

  providerId: number
}

Order.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    emissionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderStatusBuyer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    providerId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: 'orders',
  }
)

Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' })
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' })

Buyer.hasMany(Order, { foreignKey: 'buyerId', as: 'orderBuyer' })
Buyer.hasMany(Order, { foreignKey: 'providerId', as: 'orderProvider' })

export default Order
