import React, { useState } from "react";
import Form from "./components/Form";
import NamesList from "./components/NamesList";
function App() {


  const [names, setNames] = useState([])

  const handleNewName = (_name) => setNames([...names, _name])

  return (
    <>
      <Form handleName={handleNewName} />

      <NamesList names={names} />
    </>
  );
}

export default App;
