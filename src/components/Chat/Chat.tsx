import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { EmojiEmotions } from "@mui/icons-material";
import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="chat">
      {/* チャットヘッダー */}
      <ChatHeader />

      {/* メッセージ */}
      <div className="chatMessage">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      </div>

      {/* チャットフッター */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="チャンネルへの送信メッセージ" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcon">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  );
}

export default Chat;
