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
 
    } else {
        
      res.send({ unreadNotificationCount:0});
    }
  } catch (error) {
    console.error("Error retrieving notification", error);
    res.status(500).send({ message: "Internal Server error" });
  }
};

module.exports = getUnreadNotificationCount;
