import "dotenv/config"
import express from "express";
import {createBullBoard} from "bull-board";
import { BullAdapter} from "bull-board/bullAdapter"
import Queue from "./app/lib/Queue";
import UserController from "./app/controllers/UserController";


const app = express();

const queues = Queue.queues.map((queue) => new BullAdapter(queue.bull));

const bullBoard = createBullBoard(queues);


app.use(express.json());

app.use("/admin/queues", bullBoard.router);

app.post("/users" , UserController.store )


app.listen(3333 , () => {
    console.log("Server running on localhost:3333")
})