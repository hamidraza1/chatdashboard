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
            <div className={classes.userName}>{this.props.name}</div>
            <div className={classes.userStatus}>last online 5 hour ago</div>
          </div>
          <div className={classes.userFile}>§</div>
          <div className={classes.userMore}>:</div>
        </div>

        <div className={classes.received1}>
          <img
            className={classes.profilePic1}
            src={
              "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
            }
          />
          <div className={classes.a1}>
            <div className={classes.receivedMsg1}>
              Hello how are you, I was expecting
            </div>
            <div className={classes.threeDots1}>...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
