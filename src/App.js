import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Bodyody from "./Bodyody.js";

function App() {
  const [inputtext, setInputtext] = useState("");
  const [searchvalue, setSearchvalue] = useState("los angeles");
  const [categoryvalue, setCategoryvalue] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    functionName();
  }, [searchvalue, categoryvalue]);

  const functionName = async () => {
    setIsLoading(true);
    const API_KEY = "20248740-fb525f10616b5c60ae14de9d6";
    const items = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchvalue}&image_type=photo&category=${categoryvalue}`
    );
    const data = await items.json();
    setItems(data.hits);
    console.log(data.hits);
    setIsLoading(false);

  };
console.log(items);
  return (
    <div>
      <Header
        inputtext={inputtext}
        setInputtext={setInputtext}
        setSearchvalue={setSearchvalue}
        categoryvalue={categoryvalue}
        setCategoryvalue={setCategoryvalue}
        setIsLoading={setIsLoading}
      />{" "}
      {isLoading === true ? (
        <div class="boxLoading"></div>
      ) : (
        <div className="App">
         <Bodyody
            items={items}
            imgs={items.webformatURL}
            tags={items.tags}
            setItems={setItems}
          />

        </div>
      )}
    </div>
  );
}

export default App;
