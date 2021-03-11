import { Button } from "antd";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [createNote, setCreateNote] = useState([]);
  // const [createNote, setCreateNote] = useState([]);
  const [contener, setContener] = useState(false);
  const [valueContent, setValueContent] = useState("");
  const [valueTitle, setValueTitle] = useState("");

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
  const deleteThisNote = (thisNote) => {
    const indexNote = createNote.indexOf(thisNote);
    createNote.splice(indexNote, 1);
    setContener(true);
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
  const NoteDisplay = createNote.map((note) => (
    <>
      <div
        key={note.id}
        className="this-note"
        style={{
          padding: "10px",
          background: "#fff",
          borderStyle: "solid",
          borderColor: "coral",
          margin: "10px",
          display: "inline-grid",
          borderRadius: "5px",
        }}
      >
        <span>
          <div>title:</div>
          {note.ValueTitle}
        </span>
        <br />
        <span>
          <div>text:</div>
          {note.ValueContent}
        </span>
        <div className="notes-icons" style={{ display: "flex" }}>
          <Button onClick={() => SaveKeep()}>
            <EditOutlined />
          </Button>
          <Button onClick={() => deleteThisNote(note)}>
            <DeleteOutlined />
          </Button>
        </div>
      </div>
    </>
  ));
  // console.log(contener);
  return (
    <div dir="ltr">
      <div
        className="input"
        style={{
          // display: "flex",
          margin: "5px 25%",
        }}
      >
        {/* <form className={classes.root} noValidate autoComplete="off"> */}
        <div className="inpuot-title">
          <TextField
            id="1"
            label="title"
            placeholder="הכנס כותרת"
            value={valueTitle}
            onChange={inputTitle}
          />
        </div>
        <div className="inpuot-text">
          <TextField
            id="2"
            label="text"
            placeholder="הכנס תוכן"
            value={valueContent}
            onChange={inputContent}
            cols={valueContent.length}
          />
        </div>
        <div className="save-new-note">
          <Button
            dir="ltr"
            onClick={() => SaveKeep()}
            style={{ margin: "auto", margin: "2% 11%" }}
          >
            שמור פתק
          </Button>
        </div>
        {/* </form> */}
      </div>

      {NoteDisplay}
    </div>
  );
};
export default Home;
