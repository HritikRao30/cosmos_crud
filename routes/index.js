import { Router } from 'express';
import ctrl from '../controller/index_controller.js';
var router = Router();

/* GET home page. */
router.get('/', ctrl);

export default router;
