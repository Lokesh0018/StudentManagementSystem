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
                    <input type="text" className="ipTxt ipField"/>
                    <input type="submit" className="ipBtn sBtn" value="Remove"/>
                </div>
            </form>
        </div>
    );
}

export default Delete;