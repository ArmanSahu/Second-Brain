import express from 'express';
import { validateToken } from '../middleware/token-verification.js';
import { getContent, share } from '../controller/share-controller.js';
const router = express.Router();
router.post('/share', validateToken, share);
router.get('/share/:shareId', validateToken, getContent);
export default router;
//# sourceMappingURL=share-routes.js.map