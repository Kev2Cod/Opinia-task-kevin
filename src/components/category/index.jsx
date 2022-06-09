import React, { useState } from "react";
import "./category.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb, faNewspaper, faSquarePollVertical, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <form className="radio-button shadow" onChange={(e) => handleChange(e)}>
        <div className="switch-field">
          <div>
            <input type="radio" id="semua" name="category" value="semua" />
            <label for="semua" className="switch-menu ">
              <FontAwesomeIcon ontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
              <span className="text-var-gray">Semua</span>
            </label>
          </div>
          <div>
            <input type="radio" id="idea" name="category" value="idea" />
            <label for="idea" className="switch-menu" id="test">
              <FontAwesomeIcon icon={faLightbulb} className="icon"></FontAwesomeIcon>
              <span className="text-var-gray">Idea</span>
            </label>
          </div>
          <div>
            <input type="radio" id="artikel" name="category" value="artikel" />
            <label for="artikel" className="switch-menu ">
              <FontAwesomeIcon icon={faNewspaper} className="icon"></FontAwesomeIcon>
              <span className="text-var-gray">Artikel</span>
            </label>
          </div>
          <div>
            <input type="radio" id="poling" name="category" value="polling" />
            <label for="poling" className="switch-menu ">
              <FontAwesomeIcon icon={faSquarePollVertical} className="icon"></FontAwesomeIcon>
              <span className="text-var-gray">Poling</span>
            </label>
          </div>
          <div>
            <input type="radio" id="petisi" name="category" value="petisi" />
            <label for="petisi" className="switch-menu ">
              <FontAwesomeIcon icon={faUsersRectangle} className="icon"></FontAwesomeIcon>
              <span className="text-var-gray">Petisi</span>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sidebar;
