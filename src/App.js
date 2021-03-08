// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Headers from "./component/Headers";
import Contener from "./component/contener";
import { useState } from "react";
const App = () => {
  const [contener, setContener] = useState(false);
  const [saveValueContent, setSaveValueContent] = useState("");
  const [saveValueTitle, setSaveValueTitle] = useState("");

  const SaveKeep = (saveValueTitle, saveValueContent) => {
    setContener(true);
    setSaveValueContent(saveValueContent);
    setSaveValueTitle(saveValueTitle);
  };

  const upContener = () => {
    setContener({ contener: false });
  };

  if (contener) {
    upContener();
  }

  console.log(contener);
  return (
    <>
      <Headers save={SaveKeep} />
      <Contener
        saveValueContent={saveValueContent}
        saveValueTitle={saveValueTitle}
      />
    </>
  );
};
export default App;
