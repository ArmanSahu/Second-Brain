import express from 'express';
import { validateToken } from '../middleware/token-verification.js';
import { validateContent } from '../middleware/content-data-validation.js';
import { createContent, deleteContent, getContent, updateContent } from '../controller/content-controller.js';

const router = express.Router();

router.use(validateToken);
router.post('/',validateContent,createContent);
router.get('/',getContent);
router.put('/:contentId',updateContent);
router.delete('/:contentId',deleteContent);

export default router;


