import { Router } from "express"; 
import security from "../middleware/security.js";

let router = Router(); 

router.get("/", security,(req, res) => {
    res.status(200).send(req.body); 
});

export default router;