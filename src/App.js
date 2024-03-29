// App.js
import React, { Component } from "react";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import "./App.css";
import { connect, sendMsg } from './api/';

class App extends Component {
  constructor(props) {
    super(props);
    connect();
    this.state = {
      ChatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        ChatHistory: [...prevState.ChatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  // Define the send function
  send = (msg) => {
    sendMsg(msg);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory ChatHistory={this.state.ChatHistory} />
        {/* Pass the send function to ChatInput */}
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
