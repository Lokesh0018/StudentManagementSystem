import React from "react";
import { TbCircleLetterAFilled,TbSmartHome ,TbUsers,TbUser  } from "react-icons/tb";

const Nav = () => {
    return (
        <div className="nav">
            <div className="bar">
                <div className="icContainer">
                    <TbCircleLetterAFilled className="icon" />
                    <span className="logo">Admin</span>
                </div>
                <ul>
                    <li>
                        <TbSmartHome /> Home
                    </li>
                    <li>
                        <TbUsers />Students
                    </li>
                    <li>
                       <TbUser /> Student
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;