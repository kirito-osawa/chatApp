import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

function ChatMessage() {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          kiri<span className="messageTimeStamp">2024/12/10</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  );
}

export default ChatMessage;
