import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Menu from "./MenuModel.js";

const { DataTypes } = Sequelize;

const FoodDrink = db.define(
  "FoodDrink",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

Menu.hasMany(FoodDrink);

FoodDrink.belongsTo(Menu, {
  foreignKey: "menuId",
});

export default FoodDrink;
