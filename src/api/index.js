// api/index.js
const ws = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
  console.log("Attempting Connection...");

  ws.onopen = () => {
    console.log("Successfully Connected");

    ws.onmessage = event => {
      const msg = JSON.parse(event.data);
      console.log("Message from server:", msg);
      cb(msg);
    };

    ws.onclose = event => {
      console.log("Socket Closed Connection: ", event);
    };

    ws.onerror = error => {
      console.log("Socket Error: ", error);
    };
  };
};

let sendMsg = (msg) => {
  console.log("sending msg:", msg);

  // Check if the WebSocket is in the OPEN state before sending the message
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(msg));
  } else {
    console.log("WebSocket is not in the OPEN state. Unable to send the message.");
  }
};




export { connect, sendMsg };
