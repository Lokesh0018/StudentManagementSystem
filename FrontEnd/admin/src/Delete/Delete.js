import React from "react";

const Delete = () => {
    return(
        <div className="Delete">
            <div className="studentsHeader">
                Remove Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt"/>
                    <input type="submit" className="ipBtn" value="Remove"/>
                </div>
            </form>
        </div>
    );
}

export default Delete;