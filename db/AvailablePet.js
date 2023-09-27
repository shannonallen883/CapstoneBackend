// 5 Pull in datatypes from sequelize
import { DataTypes } from "sequelize";

// 6 Define a function that gets access to the DB as a param
const AvailablePet = (db) => {
    //10 define the post table and model in the database with the following
    //cols and data types
    return db.define("availablePet", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //TODO Change these fields to match the form on the frontend
        name: DataTypes.TEXT,
        age: DataTypes.INTEGER,
        breed: DataTypes.TEXT,
        county: DataTypes.TEXT,
        description: DataTypes.TEXT,
        shelterid: DataTypes.INTEGER,
        image: DataTypes.BLOB,
        imageType: DataTypes.STRING,
    });
};

// 7 Exports out the post
export default AvailablePet;
