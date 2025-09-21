import React, { useState } from "react";
import { TbCircleLetterAFilled, TbSmartHome, TbUsers,TbUserSearch } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";

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
                            <RiUserAddLine className="ic" /><span className={pressed ? "display" : "hide"}>Student</span>
                        </Link>
                    </li>
                    <li onClick={() => setSelect("find")}>
                        <Link to="/find" className={`items ${select === "find" ? "itemSelect" : ""}`} >
                            <TbUserSearch className="ic" /><span className={pressed ? "display" : "hide"}>View</span>
                        </Link>
                    </li>
                    <li onClick={() => setSelect("update")}>
                        <Link to="/update" className={`items ${select === "update" ? "itemSelect" : ""}`} >
                            <RxUpdate className="ic" /><span className={pressed ? "display" : "hide"}>Update</span>
                        </Link>
                    </li>
                    <li onClick={() => setSelect("delete")}>
                        <Link to="/delete" className={`items ${select === "delete" ? "itemSelect" : ""}`} >
                            <MdOutlineDeleteForever className="ic" /><span className={pressed ? "display" : "hide"}>Remove</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
