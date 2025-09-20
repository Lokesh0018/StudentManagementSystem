import React, { useState } from "react";
import { TbCircleLetterAFilled, TbSmartHome, TbUsers, TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const Nav = () => {
    const [pressed, setPressed] = useState(true);
    const [select, setSelect] = useState("home");

    return (
        <div className={`nav ${pressed ? "expand" : "collapse"}`}>
            <div className="navItems">
                <div className="icContainer" onClick={() => setPressed(!pressed)}>
                    <TbCircleLetterAFilled className="icon" />
                    <span className={pressed ? "display icTxt" : "hide"}>Admin</span>
                    <CgClose className={pressed ? "ic display" : "icon hide"} onClick={() => setPressed(false)} />
                </div>
                <ul className="navList">
                    <li onClick={() => setSelect("home")}>
                        <Link to="/" className={`items ${select === "home" ? "itemSelect" : ""}`} >
                            <TbSmartHome className="ic" /><span className={pressed ? "display" : "hide"}>Home</span>
                        </Link>
                    </li>
                    <li onClick={() => setSelect("students")}>
                        <Link to="/students" className={`items ${select === "students" ? "itemSelect" : ""}`}>
                            <TbUsers className="ic" /><span className={pressed ? "display" : "hide"}>Students</span>
                        </Link>
                    </li>
                    <li onClick={() => setSelect("student")}>
                        <Link to="/student" className={`items ${select === "student" ? "itemSelect" : ""}`} >
                            <TbUser className="ic" /><span className={pressed ? "display" : "hide"}>Student</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
