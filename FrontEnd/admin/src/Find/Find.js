import React, { useState } from "react";

const Find = () => {
    const [data,setData] = useState({});
    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = document.getElementById('name').value;
        fetch(`http://localhost:8081/name/${name}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>alert(err))
    };
    return(
        <div className="find">
            <div className="studentsHeader">
                Find Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt ipField" id="name"/>
                    <input type="submit" className="ipBtn sBtn" onClick={handleSubmit} value="Find"/>
                </div>
            </form>
            <div className="found">
                <div className="imgName">{
                    (data.imageUrl) && <img src={data.imageUrl} alt="img" />
                    }
                    <h3>{data.name}</h3>
                </div>
                <div className="branchEmail">
                    <p>{data.branch}</p>
                    <p>{data.email}</p>
                </div>
                <div className="stateCountry">
                    <p>{data.state}</p>
                    <p>{data.country}</p>
                </div>
            </div>
        </div>
    );
}

export default Find;