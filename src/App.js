import { useState } from "react";
import "./App.css";
import ChatBody from "./components/chatBody/ChatBody";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
