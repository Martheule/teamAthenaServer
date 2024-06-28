import express from "express";
import eventsRouter from "./events.js";

import authRouter from "./auth.js";

import { dynamicModelMiddleware } from "../middlewares/dynamicModel.js";
import { paginationMiddleware } from "../middlewares/paginationMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";

import {
  findAll,
  findOneById,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/CRUD.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/events", eventsRouter);

router.use("/:model", dynamicModelMiddleware);

router
  .route("/:model")
  .get(paginationMiddleware, findAll)
  .post(validateRequest, createOne);

router
  .route("/:model/:id")
  .get(findOneById)
  .put(validateRequest, updateOne)
  .delete(deleteOne);

export default router;
