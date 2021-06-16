import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import ClipLoader from "react-spinners/HashLoader";
import axios from "axios";
import { useHistory } from "react-router";

function Output(props) {
  const link = props.match.params.id;
  const history = useHistory();
  const [code, setCode] = useState("");
  const [language] = useState("txt");
  useEffect(async () => {
    const uri = window.location.protocol + "//" + window.location.host;
    console.log(uri);
    await axios
      .post(`/${link}`)
      .then(async (res) => {
        // console.log(res);
        console.log(res);
        const c = await res.data.code;
        console.log(c);
        if (res.status !== 200) {
          history.push("/");
        } else {
          setCode(c);
        }
      })
      .catch((err) => {
        history.push('/');
      });
  }, []);
  return (
    <Editor
      defaultLanguage={language}
      value={code}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        scroolBar: { smoothScrolling: true },
        readOnly: true,
      }}
      loading={<ClipLoader color="#000" loading={true} size={50} />}
    />
  );
}

export default Output;
