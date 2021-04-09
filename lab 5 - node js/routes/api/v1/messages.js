const express = require("express");
const router = express.Router();
const messageController = require("../../../controllers/messages");
const app = express();

router.get("/", messageController.getAll);

router.get("/:id", messageController.getOne);

module.exports = router;