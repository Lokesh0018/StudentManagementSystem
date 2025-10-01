import React, { useEffect, useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";

const Home = () => {
    const [totalStu,setTotalStu] = useState(0);
    const [totalTech,setTotalTech] = useState(0);
    const [cseStu,setCseStu] = useState(0);
    const [eceStu,setEceStu] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8081')
            .then((res)=>res.json())
            .then((data)=>{
                setTotalStu(data.students);
                setTotalTech(data.teachers);
                setCseStu(data.cse);
                setEceStu(data.ece);
            })
            .catch((err)=>console.log(err));
    },[]);
    return (
        <div className="home">
            <div className="blockItems">
                <div className="bItem bItem1">
                    <h3 className="itemTitle">Total Students <PiStudentFill className="bIcon"/></h3>
                    <h1>{totalStu}</h1>
                </div>
                <div className="bItem bItem2">
                    <h3 className="itemTitle">Total Teachers <GiTeacher className="bIcon"/></h3>
                    <h1>{totalTech}</h1>
                </div>
                <div className="bItem bItem3">
                    <h3 className="itemTitle">CSE <FaComputer className="bIcon"/></h3>
                    <h1>{cseStu}</h1>
                </div>
                <div className="bItem bItem4">
                    <h3 className="itemTitle">ECE <FcElectronics className="bIcon"/></h3>
                    <h1>{eceStu}</h1>
                </div>
            </div>
        </div>
    );
} 

export default Home;