import { Button } from "antd";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
      <div
        class="input"
        style={{
          // display: "flex",
          margin: "5px 25%",
        }}
      >
        {/* <form className={classes.root} noValidate autoComplete="off"> */}
        <div class="inpuot-title">
          <TextField
            id="1"
            label="title"
            placeholder="הכנס כותרת"
            value={valueTitle}
            onChange={inputTitle}
          />
        </div>
        <div class="inpuot-text">
          <TextField
            id="2"
            label="text"
            placeholder="הכנס תוכן"
            value={valueContent}
            onChange={inputContent}
            cols={valueContent.length}
          />
        </div>
        <div class="save-new-note">
          <button
            dir="ltr"
            onClick={() => SaveKeep()}
            style={{ margin: "auto", margin: "2% 11%" }}
          >
            שמור פתק
          </button>
        </div>
        {/* </form> */}
      </div>

      {createNote.map((note) => (
        <>
          <div
            class="this-note"
            style={{
              padding: "10px",
              background: "#fff",
              borderStyle: "solid",
              borderColor: "coral",
              margin: "10px",
              display: "inline-grid",
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
          </div>
        </>
      ))}
    </div>
  );
};
export default Home;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

// export function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Standard" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }
