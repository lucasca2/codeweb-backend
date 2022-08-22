import { Router } from "express";
import { directoriesRoutes } from "routes/directories.routes";

const router = Router();

router.use("/directories", directoriesRoutes);

export { router };
