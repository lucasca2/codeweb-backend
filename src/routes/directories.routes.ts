import { Router } from "express";
import { GetDirectoriesController } from "modules/directories/useCases/getDirectories/GetDirectoriesController";
import { GetDirectoryByIdController } from "modules/directories/useCases/getDirectoryById/GetDirectoryByIdController";
import { CreateDirectoryController } from "modules/directories/useCases/createDirectory/CreateDirectoryController";
import { UpdateDirectoryController } from "modules/directories/useCases/updateDirectory/UpdateDirectoryController";
import { RemoveDirectoryController } from "modules/directories/useCases/removeDirectory/RemoveDirectoryController";

const directoriesRoutes = Router();

const getDirectoriesController = new GetDirectoriesController();
const getDirectoryByIdController = new GetDirectoryByIdController();
const createDirectoryController = new CreateDirectoryController();
const updateDirectoryController = new UpdateDirectoryController();
const removeDirectoryController = new RemoveDirectoryController();

directoriesRoutes.get("/", getDirectoriesController.handle);
directoriesRoutes.get("/:id", getDirectoryByIdController.handle);
directoriesRoutes.post("/", createDirectoryController.handle);
directoriesRoutes.put("/:id", updateDirectoryController.handle);
directoriesRoutes.delete("/:id", removeDirectoryController.handle);

export { directoriesRoutes };
