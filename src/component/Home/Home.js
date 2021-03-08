import { useRef, useState } from "react";

const Home = () => {
  const [createNote, setCreateNote] = useState([
    {
      id: Number,
      ValueTitle: "",
      ValueContent: "",
    },
  ]);
  const [contener, setContener] = useState(false);
  const [valueContent, setValueContent] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  console.log(createNote);
  const SaveKeep = () => {
    clerValue();
    setContener(true);
    setCreateNote([
      ...createNote,
      {
        id: createNote.length,
        ValueTitle: valueTitle,
        ValueContent: valueContent,
      },
    ]);
  };
  const inputTitle = (event) => {
    setValueTitle(event.target.value);
  };
  const inputContent = (event) => {
    setValueContent(event.target.value);
  };
  if (contener) {
    setContener(false);
  }

  const clerValue = () => {
    setValueTitle("");
    setValueContent("");
  };
  console.log(contener);
  return (
    <div>
      <div>Home</div>
      <div dir="rtl" className="input-notice">
        <form>
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
            <button dir="ltr" onClick={() => SaveKeep()}>
              שמור פתק
            </button>
          </div>
        </form>
      </div>
      {/* {allNote} */}
    </div>
  );
};
export default Home;
