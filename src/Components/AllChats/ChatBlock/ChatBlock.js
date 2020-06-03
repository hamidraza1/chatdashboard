import React, { Component } from "react";
import classes from "./ChatBlock.module.css";

class ChatBlock extends Component {
  render() {
    return (
      <div className={classes.chatBlock} onClick={this.props.chatHandler}>
        <img
          className={classes.profilePic}
          src={
            "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          }
        />
        <div className={classes.onlineDot}></div>
        <div className={classes.userInfo}>
          <div className={classes.userName}>LuyRobin</div>
          <div className={classes.userWrites}>:: writes</div>
          <div className={classes.userOnlineStatus}>1 minute ago</div>
        </div>

        <div className={classes.text}>
          If you want to build a ship, don't drum up people to collect wood and
          don't assign them tasks and work, but rather teach them to long for
          the endless immensity of the sea.
        </div>
        <div className={classes.unRead}>2</div>
      </div>
    );
  }
}

export default ChatBlock;
