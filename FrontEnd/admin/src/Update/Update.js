import React, { useState } from "react";

const Update = () => {
    const [data, setData] = useState({});
    const fetchData = (e) => {
        e.preventDefault();
        const name = document.getElementById('sName').value;
        fetch(`http://localhost:8081/name/${name}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => alert(err))
    }
    const submitDetails = () => {
        const studentData = {
            "name" : document.getElementById("name").value,
            "email" : document.getElementById("email").value,
            "branch" : document.getElementById("branch").value,
            "state" : document.getElementById("state").value,
            "country" : document.getElementById("country").value
        }
        const formData = new FormData();
        formData.append("studentData",JSON.stringify(studentData));
        formData.append("img",(document.getElementById("img").files[0]) || data.img);
        fetch(`http://localhost:8081/update/${data.id}`,{
            method : "PUT",
            body : formData
        })
        .then((res)=>res.json())
        .then(()=>alert('Updated'))
        .catch((err)=>alert(err))
    }
    return (
        <div className="update">
            <div className="studentsHeader">
                Update Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt ipField" id="sName" />
                    <input type="submit" className="ipBtn sBtn" onClick={fetchData} value="Find" />
                </div>
            </form>
            <div className="addContainer">
                <div className="addCard">
                    <form className="addStudent">
                        <table>
                            <tr>
                                <td><label>Image :</label></td>
                                <td><input type="file" defaultValue={data.img || ""} id="img"/></td>
                            </tr>
                            <tr>
                                <td><label>Name :</label></td>
                                <td><input type="text" className="ipTxt" id="name" defaultValue={data.name || ""} required /></td>
                            </tr>
                            <tr>
                                <td><label>Email :</label></td>
                                <td><input type="email" className="ipTxt" id="email" defaultValue={data.email || ""} required /></td>
                            </tr>
                            <tr>
                                <td><label>Branch :</label></td>
                                <td><input type="text" className="ipTxt" id="branch" defaultValue={data.branch || ""} required /></td>
                            </tr>
                            <tr>
                                <td><label>State :</label></td>
                                <td><input type="text" className="ipTxt" id="state" defaultValue={data.state || ""} required /></td>
                            </tr>
                            <tr>
                                <td><label>Country :</label></td>
                                <td><input type="text" className="ipTxt" id="country" defaultValue={data.country || ""} required /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="Submit" onClick={submitDetails}>Submit</button>
                                </td>
                            </tr>
                        </table>
                        <div className="imgUp">
                        {
                            (data.imageUrl) && <img src={data.imageUrl} alt="img" />
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Update;