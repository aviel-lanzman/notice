// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Headers from "./component/Headers";
import Contener from "./component/contener";
class App extends React.Component {
  state = {
    contener: false,
    saveValueTitle: "",
    saveValueContent: "",
  };
  SaveKeep = (saveValueTitle, saveValueContent) => {
    this.setState({ saveValueTitle, saveValueContent, contener: true });
  };
  upContener() {
    this.setState({ contener: false });
  }
  render() {
    if (this.state.contener) {
      this.upContener();
    }
    console.log(this.state.contener);
    return (
      <>
        <Headers save={this.SaveKeep} />
        <Contener state={this.state} />
      </>
    );
  }
}
export default App;
