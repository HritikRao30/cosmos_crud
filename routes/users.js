import { Router } from 'express';
import ctrlGen from '../controller/users_controller.js';

const router = Router();

export default (container) => {
    let ctrl = ctrlGen(container);
    router.get("/all", ctrl.getAllProds);
    router.post("/find", ctrl.find);
    router.post("/create", ctrl.create);
    return router;
}


