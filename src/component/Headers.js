// import { render } from "@testing-library/react";
import React from "react";
import "./Headers.css";

class Headers extends React.Component {
  state = {
    valueTitle: "",
    valueContent: "",
  };

  inputTitle = (event) => {
    this.setState({ valueTitle: event.target.value });
  };
  inputContent = (event) => {
    this.setState({ valueContent: event.target.value });
  };

  onClick() {
    this.save();
    this.clerValue();
  }

  save = () => {
    this.props.save(this.state.valueTitle, this.state.valueContent);
  };
  clerValue = () => {
    this.setState({ valueTitle: "", valueContent: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div dir="rtl" className="input-notice">
        {/* <form> */}
        <div>
          <input
            className="input"
            type="text"
            placeholder="הכנס כותרת"
            value={this.state.valueTitle}
            onChange={this.inputTitle}
          ></input>
        </div>
        <div>
          <textarea
            className="textarea"
            type="text"
            placeholder="כתוב הערה"
            value={this.state.valueContent}
            onChange={this.inputContent}
            cols={this.state.valueContent.length}
            rows="5"
          ></textarea>

          <button dir="ltr" onClick={() => this.onClick()}>
            שמור פתק
          </button>
        </div>
        {/* </form> */}
      </div>
    );
  }
}
export default Headers;
