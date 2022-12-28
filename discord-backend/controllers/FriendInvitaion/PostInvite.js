const User = require("../../models/user");
const FriendInvitaion = require("../../models/FriendInvitaion");
const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, mail } = req.user;

  //check if friend that we would like to invite is  not user

  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res.status(409).send("The mail is same is yours");
  }

  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res.status(404).send("The mail has not been found");
  }

  const invitaionAlreadyReceived = await FriendInvitaion.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitaionAlreadyReceived) {
    return res.status(409).send("The Invitaion has already been sent");
  }

  const usersAlreadyFriend = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (usersAlreadyFriend) {
    return res.status(409).send("Already Friend. Please Check Friend List");
  }

  const newInvitation = await FriendInvitaion.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  return res.status(401).send("Invitaion has been sent");
};

module.exports = postInvite;
