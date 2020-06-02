import React, { Component } from "react";
import classes from "./Chat.module.css";

class Chat extends Component {
  render() {
    return (
      <div className={classes.chat}>
        <div className={classes.userInfo}>
          <div className={classes.nameStatus}>
            <img
              className={classes.profilePic}
              src={
                "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
              }
            />
            <div className={classes.userName}>Nika Jerrardo</div>
            <div className={classes.userStatus}>last online 5 hour ago</div>
          </div>
          <div className={classes.userFile}>§</div>
          <div className={classes.userMore}>:</div>
        </div>
      </div>
    );
  }
}

export default Chat;
