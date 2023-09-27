import Sequelize from "sequelize";
// 4 (through 7) Gets post model
import AvailablePetModel from "./AvailablePet.js";
import ShelterDirectoryModel from "./ShelterDirectory.js";

// 8 Use the sequelize import from #3 to connect to the blog database

let dbURL = "postgres://shannonallen@localhost:5432/capstone";
if (process.env.DATABASE_URL) {
    dbURL = process.env.DATABASE_URL;
    // console.log(dbURL);
}
const db = new Sequelize(dbURL);
// 9 Give the post access to the db from 8 through 4
const AvailablePet = AvailablePetModel(db);
// 9 Give the post access to the db from 8 through 4
const ShelterDirectory = ShelterDirectoryModel(db);
//11 connect to db
const connectToDB = async () => {
    try {
        //12A Try and run a query
        await db.authenticate();
        //13 If it works, print out we're connected
        console.log("Connected to database");

        //14 Sync the models with the tables in the DB
        db.sync();
    } catch (error) {
        //12B If 12A fails, show an error message
        console.error(error);
        console.error("PANIC! DB ISSUE.");
    }
};

//15 Run 11-14 above
connectToDB();

//16 Export out the model and DB so we can access it in server.js
export { db, AvailablePet, ShelterDirectory };

//fly ips release 66.51.122.209
