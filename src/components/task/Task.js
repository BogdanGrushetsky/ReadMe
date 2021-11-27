import { Component } from "react";
import "./Task.css";

class task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="task"></div>
        <div className="workspace">
          <textarea className="work" />
          <textarea className="work" />
        </div>
        <div className="monitor"></div>
        <div className="console"></div>
      </div>
    );
  }
}
export default task;
