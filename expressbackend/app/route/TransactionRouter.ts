import express from "express";
import { deposit, exchange, history, withdraw } from '../controllers/TransactionController.js';
const router = express.Router();

router.post("/deposit", deposit );
router.post("/withdraw", withdraw );
router.post("/history", history);
router.post("/exchange", exchange);



export default router;
