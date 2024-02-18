const notificationCollection = require("../../../models/notification");

const getUnreadNotificationCount = async (req, res) => {
  const email = req.query.email;
  console.log(email);

  try {
    const result = await notificationCollection.findOne({ userEmail: email });
    if (result) {
      const unreadNotification = result.notificationData.filter(
        (notification) => notification.notificationStatus === "unread"
      );
      const unreadNotificationCount = unreadNotification.length;
      if (unreadNotificationCount === 0) {
        res.send(null);
      } else {
        res.send({ unreadNotificationCount });
      }
    } else {
      res.status(404).send({ message: "Notifications not found" });
    }
  } catch (error) {
    console.error("Error retrieving notification", error);
    res.status(500).send({ message: "Internal Server error" });
  }
};

module.exports = getUnreadNotificationCount;
