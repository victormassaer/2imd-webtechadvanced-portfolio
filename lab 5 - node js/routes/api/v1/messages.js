const express = require("express");
const router = express.Router();
const messageController = require("../../../controllers/messages");
const app = express();

router.get("/", messageController.getAll);

router.get("/:id", messageController.getOne);

router.post("/", messageController.upload);

router.put("/:id", messageController.update);

router.delete("/:id", messageController.remove);

router.get("/?user=username", messageController.getUser);

module.exports = router;