import express from "express";
import cors from "cors";
import { AvailablePet, ShelterDirectory } from "./db/db.js";
import multer from "multer";

const server = express();
server.use(express.json());
server.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });
server.use(upload.single("photo"));

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.get("/availablePets", async (req, res) => {
    res.send({
        availablePets: await AvailablePet.findAll(),
    });
});

server.post("/availablePets", async (req, res) => {
    await AvailablePet.create({
        ...req.body,
        image: req.file?.buffer,
        imageType: req.file?.mimetype,
    });
    res.send({ Hey: "Look what I can do" });
});

server.get("/shelterDirectory", async (req, res) => {
    res.send({
        shelterDirectory: await ShelterDirectory.findAll(),
    });
});

server.post("/shelterDirectory", async (req, res) => {
    await ShelterDirectory.create(req.body);
});

server.post("/petShelter", async (req, res) => {
    res.send({
        availablePets: await AvailablePet.findAll({
            where: {
                shelterid: req.body.shelterID,
            },
        }),
        shelter: await ShelterDirectory.findOne({
            where: {
                id: req.body.shelterID,
            },
        }),
    });
});

server.listen(3005, () => {
    console.log("server is running on 3005");
});
