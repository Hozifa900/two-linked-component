import React from "react";
import { createContext, useState } from "react";
import App from "../App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [img, setImg] = useState("1.png");
  const [title, setTitle] = useState("Title");
  const [body, setBody] = useState("The Body");

  return (
    <DataContext.Provider value={[img, setImg, title, setTitle, body, setBody]}>
      <App />
    </DataContext.Provider>
  );
};
