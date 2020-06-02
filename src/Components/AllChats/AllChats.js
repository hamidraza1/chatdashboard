import React, { Component } from "react";
import classes from "./AllChats.module.css";
import ChatBlock from "./ChatBlock/ChatBlock";
import { AiOutlineSearch } from "react-icons/ai";

class AllChats extends Component {
  render() {
    return (
      <div className={classes.allChats}>
        <div className={classes.title}>
          <div className={classes.chats}>Chats</div>
          <div className={classes.filter}>Recent Chats ></div>
          <button className={classes.button}>+ Create New Chat</button>
        </div>
        <div className={classes.search}>
          <div className={classes.searchType}>Messages ></div>
          <div className={classes.searchFilter}>
            <AiOutlineSearch />
            <input className={classes.searchInput} placeholder={"Search"} />
          </div>
        </div>
        <div className={classes.chatBlockContainer}>
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
          <ChatBlock />
        </div>
      </div>
    );
  }
}

export default AllChats;
