import React, { useState } from "react";
import { TbCircleLetterAFilled, TbSmartHome, TbUsers, TbUser } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const Nav = () => {
    const [pressed, setPressed] = useState(false);
    const [select, setSelect] = useState("home");

    return (
        <div className={`nav ${pressed ? "expand" : "collapse"}`}>
            <div className="navItems">
                <div className="icContainer" onClick={() => setPressed(!pressed)}>
                    <TbCircleLetterAFilled className="icon"/>
                    <CgClose className={pressed ? "ic display" : "icon hide"} onClick={() => setPressed(false)}/>
                </div>
                <ul className="navList">
                    <li className={`items ${select === "home" ? "itemSelect":""}`} onClick={() => setSelect("home")}>
                        <TbSmartHome className="ic"/><span className={pressed ? "display" : "hide"}>Home</span>
                    </li>
                    <li className={`items ${select === "students" ? "itemSelect":""}`} onClick={() => setSelect("students")}>
                        <TbUsers className="ic"/><span className={pressed ? "display" : "hide"}>Students</span>
                    </li>
                    <li className={`items ${select === "student" ? "itemSelect":""}`} onClick={() => setSelect("student")}>
                        <TbUser className="ic"/><span className={pressed ? "display" : "hide"}>Student</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
