import React from "react";

const Student = () => {
    const submitData = () =>{
        const studentData = {
            "name" : document.getElementById("name").value,
            "email" : document.getElementById("email").value,
            "branch" : document.getElementById("branch").value,
            "state" : document.getElementById("state").value,
            "country" : document.getElementById("country").value
        }
        const formData = new FormData();
        formData.append("studentData",JSON.stringify(studentData));
        formData.append("img",document.getElementById("img").files[0]);
        fetch('http://localhost:8081/add',{
            method : "POST",
            body : formData
        })
        .then((res)=>res.json())
        .then((data)=>alert('successs:',JSON.stringify(data)))
        .catch((err)=>alert(err));
    } 
    return (
        <div className="student">
            <div className="studentsHeader">
                Add Student
            </div>
            <div className="addContainer">
                <div className="addCard">
                    <form className="addStudent">
                        <table>
                            <tr>
                                <td><label>Image :</label></td>
                                <td><input type="file" id="img" required/></td>
                            </tr>
                            <tr>
                                <td><label>Name :</label></td>
                                <td><input type="text" className="ipTxt" id="name" required/></td>
                            </tr>
                            <tr>
                                <td><label>Email :</label></td>
                                <td><input type="email" className="ipTxt" id="email" required/></td>
                            </tr>
                            <tr>
                                <td><label>Branch :</label></td>
                                <td><input type="text" className="ipTxt" id="branch" required/></td>
                            </tr>
                            <tr>
                                <td><label>State :</label></td>
                                <td><input type="text" className="ipTxt" id="state" required/></td>
                            </tr>
                            <tr>
                                <td><label>Country :</label></td>
                                <td><input type="text" className="ipTxt" id="country" required/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button type="Submit" onClick={submitData}>Submit</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Student;