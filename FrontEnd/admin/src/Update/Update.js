import React from "react";

const Update = () => {
    const student = {
        "img" : "img",
        "name" : "name",
        "email" : "email",
        "branch" : "branch",
        "state" : "state", 
        "country" : "country",   
    }
    return (
        <div className="update">
            <div className="studentsHeader">
                Update Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt" />
                    <input type="submit" className="ipBtn" value="Find" />
                </div>
            </form>
            <div className="addContainer">
                <div className="addCard">
                    <form className="addStudent">
                        <table>
                            <tr>
                                <td><label>Image :</label></td>
                                <td><input type="file" /></td>
                            </tr>
                            <tr>
                                <td><label>Name :</label></td>
                                <td><input type="text" className="ipTxt" value={student.name}/></td>
                            </tr>
                            <tr>
                                <td><label>Email :</label></td>
                                <td><input type="email" className="ipTxt" value={student.email}/></td>
                            </tr>
                            <tr>
                                <td><label>Branch :</label></td>
                                <td><input type="text" className="ipTxt" value={student.email}/></td>
                            </tr>
                            <tr>
                                <td><label>State :</label></td>
                                <td><input type="text" className="ipTxt" value={student.email}/></td>
                            </tr>
                            <tr>
                                <td><label>Country :</label></td>
                                <td><input type="text" className="ipTxt" value={student.email}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="Submit">Submit</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Update;