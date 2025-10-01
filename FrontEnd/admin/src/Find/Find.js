import React from "react";

const Find = () => {
    return(
        <div className="find">
            <div className="studentsHeader">
                Find Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt ipField"/>
                    <input type="submit" className="ipBtn sBtn" value="Find"/>
                </div>
            </form>
            <div className="found">
                <div className="imgName">
                    <img src="" alt="img" />
                    <h3>Name</h3>
                </div>
                <div className="branchEmail">
                    <p>Branch</p>
                    <p>Email</p>
                </div>
                <div className="stateCountry">
                    <p>State</p>
                    <p>Country</p>
                </div>
            </div>
        </div>
    );
}

export default Find;