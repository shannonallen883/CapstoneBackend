// 5 Pull in datatypes from sequelize
import { DataTypes } from "sequelize";

// 6 Define a function that gets access to the DB as a param
const ShelterDirectory = (db) => {
    //10 define the post table and model in the database with the following
    //cols and data types
    return db.define("shelterDirectory", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.TEXT,
        phoneNumber: DataTypes.TEXT,
        address: DataTypes.TEXT,
        email: DataTypes.TEXT,
    });
};

// 7 Exports out the post
export default ShelterDirectory;
