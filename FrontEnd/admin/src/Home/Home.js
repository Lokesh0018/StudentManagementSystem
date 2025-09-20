import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";

const Home = () => {
    return (
        <div className="home">
            <div className="blockItems">
                <div className="bItem bItem1">
                    <h3 className="itemTitle">Total Students <PiStudentFill className="bIcon"/></h3>
                    <h1>150</h1>
                </div>
                <div className="bItem bItem2">
                    <h3 className="itemTitle">Total Teachers <GiTeacher className="bIcon"/></h3>
                    <h1>20</h1>
                </div>
                <div className="bItem bItem3">
                    <h3 className="itemTitle">CSE <FaComputer className="bIcon"/></h3>
                    <h1>10</h1>
                </div>
                <div className="bItem bItem4">
                    <h3 className="itemTitle">ECE <FcElectronics className="bIcon"/></h3>
                    <h1>30</h1>
                </div>
            </div>
        </div>
    );
} 

export default Home;