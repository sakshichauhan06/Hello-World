import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  render() {
    return (
      // In the below code, I've created a separated component "HelloWorld.js", by doing this I would be able to edit the content & styling of this component quite easily. By creating components, it becomes easier to handle a lot of pages in our website.
      <div className="container">
        <HelloWorld />
      </div>

      // Below code represents a simple way of creating Hello World by just adding the JSX into our code.
      // <div className="container">A simple Hello World</div>
    )
  }
}

export default App
