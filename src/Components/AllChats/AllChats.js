import React, { Component } from "react";
import classes from "./AllChats.module.css";
import ChatBlock from "./ChatBlock/ChatBlock";
import Chat from "../Chat/Chat";
import { AiOutlineSearch } from "react-icons/ai";

class AllChats extends Component {
  state = {
    chat1: false,
    chat2: false,
  };
  chatHandler1 = () => {
    this.setState({ chat1: true, chat2: false });
  };
  chatHandler2 = () => {
    this.setState({ chat2: true, chat1: false });
  };
  render() {
    return (
      <span>
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
            <ChatBlock chatHandler={this.chatHandler1} />
            <ChatBlock chatHandler={this.chatHandler2} />
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
        {this.state.chat1 ? <Chat name={"Hamid"} /> : <Chat name={"Hamid"} />}
        {this.state.chat2 ? <Chat name={"Ali"} /> : null}
      </span>
    );
  }
}

export default AllChats;
