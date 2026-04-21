import { Router } from "express";
import { siteController } from "../controllers/site.controller";
import router from "next/dist/shared/lib/router/router";

const siteRouter = Router();

siteRouter.get('/', siteController.getAll);
// router.get('/:id',);
siteRouter.post('/', siteController.createSite);
// router.patch('/:id',);
// router.delete('/:id',);

export default siteRouter;