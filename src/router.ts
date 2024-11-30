import { Router } from "express";
import { ObjectId } from "mongodb";

import { AppDataSource } from "@config/database";
import { Freya } from "entities/Freya";

const router = Router();

router.get("/city/:city", async (req, res) => {
  const { city } = req.params;

  const pointRepository = AppDataSource.getRepository(Freya);
  const points = await pointRepository.find({
    where: {
      city,
    }
  });

  res.json(points);
});

router.get("/id/:id", async (req, res) => {
  const { id } = req.params;

  const objectId = new ObjectId(id);
  const pointRepository = AppDataSource.getRepository(Freya);
  const point = await pointRepository.findOneBy({ _id: objectId});

  res.json(point);
});

export default router;