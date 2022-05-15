import { DataTypes, Model } from 'sequelize'
import db from '.'

export interface IBuyer {
  id: number
  name: string
}

class Buyer extends Model<IBuyer> implements IBuyer {
  id: number

  name: string
}

Buyer.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'buyers',
  }
)

export default Buyer
