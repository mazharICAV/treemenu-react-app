import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
      setSelectedSubOption(null); // reset selected sub-option
    }
  };

  const handleSubOptionClick = (subOption) => {
    if (selectedSubOption === subOption) {
      setSelectedSubOption(null);
    } else {
      setSelectedSubOption(subOption);
    }
  };

  return (
    <div className="dropdown">
      <ul style={{ marginLeft: "3rem" }} className="dropdown__options">
        {options.map((option) => (
          <li key={option.key} className="dropdown__option">
            <div
              className="dropdown__option-label"
              onClick={() => handleOptionClick(option.key)}
            >
              <input
                style={{ margin: 0, marginRight: "1rem" }}
                type="checkbox"
              />
              {option.label} <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {selectedOption === option.key && (
              <ul className="dropdown__sub-options">
                {option.nodes.map((subOption) => (
                  <li
                    key={subOption.key}
                    className={`dropdown__sub-option ${
                      selectedSubOption &&
                      selectedSubOption.key === subOption.key
                        ? "dropdown__sub-option--selected"
                        : ""
                    }`}
                  >
                    <div
                      className="dropdown__sub-option-label"
                      onClick={() => handleSubOptionClick(subOption)}
                    >
                      <input
                        style={{ margin: 0, marginRight: "1rem" }}
                        type="checkbox"
                      />
                      {subOption.label} <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {selectedSubOption &&
                      selectedSubOption.key === subOption.key &&
                      subOption.nodes && (
                        <ul className="dropdown__sub-options">
                          {subOption.nodes.map((subSubOption) => (
                            <li
                              key={subSubOption.key}
                              className="dropdown__sub-option"
                            >
                              <input
                                style={{ margin: 0, marginRight: "1rem" }}
                                type="checkbox"
                              />
                              {subSubOption.label}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
