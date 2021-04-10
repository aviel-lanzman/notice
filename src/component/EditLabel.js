import { EditOutlined, TagOutlined } from "@ant-design/icons";
import { TextField } from "@material-ui/core";
import { Modal, Button } from "antd";
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";

const EditNote = ({
  listButton,
  button,
  setListButton,
  setRender,
  styleButtonLargSiz,
  styleButtonSmolSiz,
  showSidebar,
}) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [value, setvalue] = useState({});
  const [listLabel, setListLabel] = useState([]);
  const onChangeValue = (event) => {
    console.log(event.target);
    if (event.key === "Enter") {
      handleOk();
    }
    setvalue({
      func: { header: event.target.value, contener: "" },
      icon: <TagOutlined />,
      text: event.target.value,
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const thisIndex = listButton.indexOf(button);
    listButton.splice(thisIndex, 0, value);
    setListLabel([...listLabel, value]);
    setListButton(listButton);
    setRender(true);
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
      <div>
        <Button
          onClick={showModal}
          style={showSidebar ? styleButtonLargSiz : styleButtonSmolSiz}
        >
          <EditOutlined
            editing="true"
            style={{ alignSelf: "center", padding: "2px" }}
          />
          {showSidebar ? (
            <div style={{ padding: "7px" }}>עריכת תוויות</div>
          ) : null}
        </Button>
        <Modal
          style={{ direction: "rtl" }}
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
            onEnter={handleOk}
            onChange={onChangeValue}
          />
          {listLabel.map((label) => (
            <div key={label.id}>
              <TagOutlined />
              <InputBase value={label.text}>{label.text}</InputBase>
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};
export default EditNote;
