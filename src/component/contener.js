// import React, { useState } from "react";
// import "./contener.css";

// const Contener = (props) => {
//   const [key, setKey] = useState(0);
//   const [listNotice, setListNotice] = useState([]);
//   // componentDidMount() {
//   //   return this.createKeep();
//   // }

//   if (props.contener) {
//     const newKeep = {
//       title: props.saveValueTitle,
//       content: props.saveValueContent,
//       id: key,
//     };
//     const add = [...listNotice, newKeep];
//     setKey(({ key }) => ({ listNotice: add, key: key + 1 }));
//   }

//   const createKeep = () => {
//     return listNotice.map((notice) => (
//       <div className="save-keep" key={notice.id} id={notice.id}>
//         <h3>{notice.title}</h3>
//         <div>{notice.content}</div>
//       </div>
//     ));
//   };

//   console.log(listNotice);
//   return (
//     <>
//       <div dir="rtl">{createKeep()}</div>
//     </>
//   );
// };
// export default Contener;
