import React from "react";
import "./contener.css";

class Contener extends React.Component {
  state = {
    key: 0,
    listNotice: [],
  };
  componentDidMount() {
    return this.createKeep();
  }
  componentDidUpdate() {
    if (this.props.state.contener) {
      const newKeep = {
        title: this.props.state.saveValueTitle,
        content: this.props.state.saveValueContent,
        id: this.state.key,
      };
      const add = [...this.state.listNotice, newKeep];
      this.setState(({ key }) => ({ listNotice: add, key: key + 1 }));
    }
  }

  createKeep = () => {
    return this.state.listNotice.map((notice) => (
      <div className="save-keep" key={notice.id} id={notice.id}>
        <h3>{notice.title}</h3>
        <div>{notice.content}</div>
      </div>
    ));
  };
  render() {
    console.log(this.state.listNotice);
    return (
      <>
        {" "}
        <div dir="rtl">{this.createKeep()}</div>
      </>
    );
  }
}
export default Contener;
