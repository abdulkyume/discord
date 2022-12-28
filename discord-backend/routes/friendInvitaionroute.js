const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");
const friendInvitationController = require("../controllers/FriendInvitaion/friendInvitationController");

const postFriendInvitaionSchema = Joi.object({
  targetMailAdderss: Joi.string().email().required(),
});

router.post(
  "/invite",
  auth,
  validator.body(postFriendInvitaionSchema),
  friendInvitationController.controllers.postInvite
);

module.exports = router;
