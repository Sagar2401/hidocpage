import axios from "axios";
import { createContext, useContext, useState } from "react";
import Folder from "../Assets/Folder.svg";
import Cam from "../Assets/Folder.svg";
import File from "../Assets/file.svg";
import trophy from "../Assets/trophy.svg";
import Notpad from "../Assets/notepad.svg";

import Calculator from "../Assets/calculator.svg";
const ctx = createContext();

export const useApp = () => useContext(ctx);
export const AppProvider = ({ children }) => {
  const [drugData, setDrugData] = useState([]);
  const [adds, setAdds] = useState([]);
  const [state, setState] = useState([]);
  const headerdata = [
    "Drugs",
    "Articles",
    "News",
    "Quizzes",
    "Surveys",
    "Webinars",
    "Guidelines",
    "Podcasts",
    "Conferences",
  ];
  const btnData = [
    "Anesthesia",

    "Cardiology",

    "Critical Care",
    "Dentistry",

    "Dermatology",

    "Diabetology",
  ];
  const otherData = [
    {
      icon: Folder,
      name: "Drug Database",
      background: "#DCF3FA",
      color: "#3AB8D4",
    },
    {
      background: "#FCDBD7",
      color: "#F44436",
      icon: Cam,
      name: "Webinars",
    },
    {
      icon: File,
      name: "Drug Interaction",
      background: "#DBE8FF",
      color: "#3A8BFF",
    },
    {
      icon: Calculator,
      name: "Madical calculator",
      color: "#4CAF50",
      background: "#E8F4E8",
    },
    {
      icon: File,

      name: "Articles",
      background: "#FEEEDB",
      color: "#F9B52C",
    },
    {
      icon: trophy,
      name: "Quizzes",
      background: "#DBE8FF",
      color: "#3A8BFF",
    },
    {
      icon: File,

      background: "#DCF3FA",
      color: "#3AB8D4",
      name: "Diseases Database",
    },
    {
      icon: Notpad,
      name: "Survays",
      background: "#FCDBD7",
      color: "#F44436",
    },
  ];
  const fetchData = async () => {
    axios
      .post("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList")
      .then((response) => {
        const data = response.data.data;
        setDrugData(data?.drugData);
        setState(data?.drugData[0]);
        setAdds(data?.adds);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ctx.Provider
      value={{
        state,
        otherData,
        btnData,
        adds,
        drugData,
        fetchData,
        headerdata,
        setState,
      }}
    >
      {children}
    </ctx.Provider>
  );
};
