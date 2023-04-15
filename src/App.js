import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Dropdown from "./Dropdown";

const App = () => {
    const [options, setOptions] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        axios
            .get("./data.json")
            .then((res) => {
                setOptions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function displayDropdown() {
        toggle ? setToggle(false) : setToggle(true);
        console.log(toggle);
    }
    return ( <
        >
        <
        dl >
        <
        dt >
        <
        ul style = {
            { margin: 0, paddding: 0, listStyle: "none" }
        }
        onClick = { displayDropdown } >
        <
        li >
        <
        input style = {
            { margin: 0, marginRight: "1rem" }
        }
        type = "checkbox" /
        >
        Click to select <
        /li> < /
        ul > <
        /dt> <
        dd > {
            toggle ? ( <
                Dropdown style = {
                    { marginLeft: "2rem" }
                }
                options = { options }
                />
            ) : (
                " "
            )
        } <
        /dd> < /
        dl > <
        />
    );
};

export default App;