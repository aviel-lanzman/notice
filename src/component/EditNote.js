import { EditOutlined } from "@ant-design/icons";
import { TextField } from "@material-ui/core";
import { Modal, Button } from "antd";
import React, { useState } from "react";

const EditNote = ({ note, editNotes }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [value, setvalue] = useState({
    title: note.ValueTitle,
    text: note.ValueText,
  });

  const onChangeValueTitle = (event) => {
    setvalue({ title: event.target.value, text: value.text });
  };
  const onChangeValueTxte = (event) => {
    setvalue({ title: value.title, text: event.target.value });
  };
  const showModal = () => {
    console.log(note);
    setVisible(true);
  };

  const handleOk = () => {
    console.log({
      id: note.id,
      ValueTitle: value.title,
      ValueText: value.text,
    });
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    editNotes(note, {
      id: note.id,
      ValueTitle: value.title,
      ValueText: value.text,
    });
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 0);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <>
      <Button onClick={showModal}>
        <EditOutlined editing="true" />
      </Button>
      <Modal
        title="edit note"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <TextField
          id="1"
          label="title"
          placeholder="שנה את הכותרת"
          value={value.title}
          onChange={onChangeValueTitle}
        />
        <TextField
          id="2"
          label="text"
          placeholder="שנה את הטקסט"
          value={value.text}
          onChange={onChangeValueTxte}
        />
      </Modal>
    </>
  );
};
export default EditNote;
