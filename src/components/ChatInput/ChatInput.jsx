import React, { Component } from 'react';


class ChatInput extends Component {
    render() { 
    return (
        <div className = 'ChatInput'>
        <input onKeyDown={this.props.send} placeholder="Type a message... Hit Enter to Send"></input>
        </div>
    )
    }
}

export default ChatInput;