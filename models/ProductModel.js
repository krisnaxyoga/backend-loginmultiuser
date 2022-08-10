import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('product',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4, //digenerate otomatis
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true //supaya tidak ada empty string
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
            len: [3,100] //membatasi jumlah karakter contoh disini minimal 3 dan maksimal 100
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
        }
    }

},{
    freezeTableName: true
});

Users.hasMany(Products);
Products.belongsTo(Users,{foreignKey:'userId'});

export default Products;