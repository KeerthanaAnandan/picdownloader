import React from "react";
import "./Header.css";
//import GetAppIcon from "@material-ui/icons/GetApp";
import SearchIcon from "@material-ui/icons/Search";
import ImageSearch from "@material-ui/icons/ImageSearch";
import { IconButton } from "@material-ui/core";

function Header({
  inputtext,
  setInputtext,
  setSearchvalue,
  setCategoryvalue,
  categoryvalue,
  setIsLoading,
}) {
  const inputtextHandler = (e) => {
    e.preventDefault();
    setInputtext(e.target.value);
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchvalue(inputtext);
   
  };

  const categoryvalueHandler = (e) => {
    setCategoryvalue(e.target.value);
  };
  return (
    <div className="header">
      {/*--------- logo--------- */}
      <div className="header-logo">
        <ImageSearch fontSize="large" /> <h2>PickYourPic</h2>
      </div>
      {/*------- logo---------- */}

      {/*------- input form---------- */}
      <div className="header-input">
        <form
          action="input"
          spellCheck="false"
          class="form"
          onSubmit={submitHandler}
        >
          <div className="header-search-logo">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for images.."
              onChange={inputtextHandler}
              value={inputtext}
            />
          </div>
        </form>
      </div>
      {/*----------input form----- */}

      {/*----------Category----- */}
      <div className="header-category">
        <select
          name="category"
          id="category"
          defaultValue=""
          onChange={categoryvalueHandler}
        >
          <option value="">-- Category --</option>
          <option value="backgrounds">Backgrounds</option>
          <option value="fashion">Fashion</option>
          <option value="nature">Nature</option>
          <option value="science">Science</option>
          <option value="education">Education</option>
          <option value="feelings">Feelings</option>
          <option value="health">Health</option>
          <option value="people">People</option>
          <option value="religion">Religion</option>
          <option value="places">Places</option>
          <option value="animals">Animals</option>
          <option value="industry">Industry</option>
          <option value="computer">Computer</option>
          <option value="food">Food</option>
          <option value="sports">Sports</option>
          <option value="transportation">Transportation</option>
          <option value="travel">Travel</option>
          <option value="buildings">Buildings</option>
          <option value="business">Business</option>
          <option value="music">Music</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
