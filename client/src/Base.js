import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import ClipLoader from "react-spinners/HashLoader";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Base() {
  const [code, setCode] = useState("");
  const [language] = useState("txt");
  const history = useHistory();
  const handleSubmit = async (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
      e.preventDefault();

      console.log(code);
      if(code.trim() === "") return;
      await axios
        .post("/", { code: code })
        .then((res) => {
          console.log(res);
          setCode("");
          const link = res.data.link;
          console.log(link);
          // window.red
          history.push("/" + link);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  useEffect(() => {
    // console.log(code);
    window.addEventListener("keydown", handleSubmit);
    return () => {
      window.removeEventListener("keydown", handleSubmit);
    };
  }, [code]);
  return (
    <Editor
      className="app_editor"
      defaultValue={code}
      defaultLanguage={language}
      onChange={(e) => {
        setCode(e);
      }}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        scroolBar: { smoothScrolling: true },
      }}
      loading={<ClipLoader color="#000" loading={true} size={50} />}
    />
  );
}

export default Base;
