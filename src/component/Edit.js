import { EditOutlined, TagOutlined } from "@ant-design/icons";
import { TextField } from "@material-ui/core";
import { Modal, Button } from "antd";
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";

const Edit = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [value, setvalue] = useState();


  const onChangeValue = (event) => {
    setvalue( event.target.value)
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
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
        title="עריכת תוויות"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <TextField
          id="1"
          label="שם התוית"
          placeholder="הוספת תוית חדשה"
          // value={}
          onChange={onChangeValue}
        />
      </Modal>
    </>
  );
};
export default Edit;
