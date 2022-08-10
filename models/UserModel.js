import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
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
    email:{
        type: DataTypes.STRING,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false, //supaya tidak null
        validate:{
            notEmpty: true, //supaya tidak ada empty string
        }
    }

},{
    freezeTableName: true
});

export default Users;