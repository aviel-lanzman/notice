import React, { useState } from "react";
import "./contener.css";

<<<<<<< HEAD
const Contener = (props) => {
  const [key, setKey] = useState(0);
  const [listNotice, setListNotice] = useState([]);
  // componentDidMount() {
  //   return this.createKeep();
  // }

  if (props.contener) {
    const newKeep = {
      title: props.saveValueTitle,
      content: props.saveValueContent,
      id: key,
    };
    const add = [...listNotice, newKeep];
    setKey(({ key }) => ({ listNotice: add, key: key + 1 }));
=======
class Contener extends React.Component {
  state = {
    key: 0,
    listNotice: [],
  };
  
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
>>>>>>> e6f55a3e834d261a5a1c568561f01aec6d40d3cb
  }

  const createKeep = () => {
    return listNotice.map((notice) => (
      <div className="save-keep" key={notice.id} id={notice.id}>
        <h3>{notice.title}</h3>
        <div>{notice.content}</div>
      </div>
    ));
  };

  console.log(listNotice);
  return (
    <>
      <div dir="rtl">{createKeep()}</div>
    </>
  );
};
export default Contener;
