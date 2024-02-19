const notificationCollection = require("../../../models/notification");

const getUnreadNotificationCount = async (req, res) => {
  const email = req.params.email;
//   console.log(email);

  try {
    const result = await notificationCollection.findOne({ userEmail: email });
    if (result) {
      const unreadNotification = result.notificationData.filter(
        (notification) => notification.notificationStatus === "unread"
      );
      const unreadNotificationCount = unreadNotification?.length;
      res.send({ unreadNotificationCount });
    //   if (unreadNotificationCount === 0) {
    //     res.send(0);
    //   } else {
    //     res.send({ unreadNotificationCount });
    //   }
    } else {
        const unreadNotificationCount =0;
      res.send({ unreadNotificationCount});
    }
  } catch (error) {
    console.error("Error retrieving notification", error);
    res.status(500).send({ message: "Internal Server error" });
  }
};

module.exports = getUnreadNotificationCount;
