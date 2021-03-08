// import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Headers.css";

const Headers = (props) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");
  const inputTitle = (event) => {
    setValueTitle({ valueTitle: event.target.value });
  };
  const inputContent = (event) => {
    setValueContent({ valueContent: event.target.value });
  };

  const onClick = () => {
    save();
    clerValue();
  };

  const save = () => {
    props.save(valueTitle, valueContent);
  };
  const clerValue = () => {
    setValueTitle("");
    setValueContent("");
  };

  return (
    <div dir="rtl" className="input-notice">
      {/* <form> */}
      <div className="input">
        <input
          className="title"
          type="text"
          placeholder="הכנס כותרת"
          value={valueTitle}
          onChange={inputTitle}
        ></input>
        <textarea
          className="textarea"
          type="text"
          placeholder="כתוב הערה"
          value={valueContent}
          onChange={inputContent}
          cols={valueContent.length}
          rows="5"
        ></textarea>
      </div>
      <div>
        {/* <textarea
            className="textarea"
            type="text"
            placeholder="כתוב הערה"
            value={this.state.valueContent}
            onChange={this.inputContent}
            cols={this.state.valueContent.length}
            rows="5"
          ></textarea> */}

        <button dir="ltr" onClick={() => onClick()}>
          שמור פתק
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};
export default Headers;
