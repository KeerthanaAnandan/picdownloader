import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Bodyody from "./Bodyody.js";

function App() {
  const [inputtext, setInputtext] = useState("");
  const [searchvalue, setSearchvalue] = useState("los angeles");
  const [categoryvalue, setCategoryvalue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => functionName(), [searchvalue, categoryvalue]);

  const functionName = async () => {
    const API_KEY = "20248740-fb525f10616b5c60ae14de9d6";
    const items = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchvalue}&image_type=photo&category=${categoryvalue}`
    );
    const data = await items.json();
    setItems(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <Header
        inputtext={inputtext}
        setInputtext={setInputtext}
        setSearchvalue={setSearchvalue}
        categoryvalue={categoryvalue}
        setCategoryvalue={setCategoryvalue}
      />
      <Bodyody items={items} setItems={setItems} />
    </div>
  );
}

export default App;
