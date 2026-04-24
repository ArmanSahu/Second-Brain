import express from 'express';
import { me } from '../controller/me-controller.js';
const router = express.Router();
router.get("/", me);
export default router;
//# sourceMappingURL=me-routes.js.map