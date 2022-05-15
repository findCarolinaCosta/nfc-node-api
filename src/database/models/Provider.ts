import { DataTypes, Model } from 'sequelize'
import db from '.'

export interface IProvider {
  id: number
  name: string
}

class Provider extends Model<IProvider> implements IProvider {
  id: number

  name: string
}

Provider.init(
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
    modelName: 'providers',
  }
)

export default Provider
