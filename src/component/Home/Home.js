import { Button, Alert, Space, Card } from "antd";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditNote from "../EditNote";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// <div className="site-card-border-less-wrapper">
//   <Card title="Card title" bordered={false} style={{ width: 300 }}>
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// </div>,

const Home = () => {
  const classes = useStyles();
  const [createNote, setCreateNote] = useState([]);
  // const [createNote, setCreateNote] = useState([]);
  const [contener, setContener] = useState(false);
  const [valueTitle, setValueTitle] = useState("");
  const [ValueText, setValueText] = useState("");
  console.log(ValueText, valueTitle);
  const SaveKeep = () => {
    clerValue();
    setContener(true);
    setCreateNote([
      ...createNote,
      {
        id: createNote.length,
        ValueTitle: valueTitle,
        ValueText: ValueText,
      },
    ]);
  };

  const deleteThisNote = (thisNote) => {
    const indexNote = createNote.indexOf(thisNote);
    createNote.splice(indexNote, 1);
    setContener(true);
  };

  const editNotes = (thisNote, editNote) => {
    console.log(editNote);
    const indexNote = createNote.indexOf(thisNote);
    createNote.splice(indexNote, 1, editNote);
    clerValue();
    setContener(true);
  };
  const inputTitle = (event) => {
    console.log(event.target.value);
    setValueTitle(event.target.value);
  };
  const inputContent = (event) => {
    console.log(event.target.value);

    setValueText(event.target.value);
  };
  if (contener) {
    setContener(false);
  }

  const clerValue = () => {
    setValueTitle("");
    setValueText("");
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
          {note.ValueText}
        </span>
        <div className="notes-icons" style={{ display: "flex" }}>
          <EditNote
            note={note}
            // inputTitle={inputTitle}
            // inputContent={inputContent}
            editNotes={editNotes}
            valueTitle={valueTitle}
            ValueText={ValueText}
          />
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
            value={ValueText}
            onChange={inputContent}
            cols={ValueText.length}
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
