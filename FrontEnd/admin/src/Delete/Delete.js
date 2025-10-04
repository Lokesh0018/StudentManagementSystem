import React from "react";

const Delete = () => {
    const delStu = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        fetch(`http://localhost:8081/delete/${name}`,{
            method : 'DELETE'
        })
            .then((res)=>res.json())
            .then(()=>alert("Deleted"))
            .catch((err)=>alert(err))
    }
    return(
        <div className="Delete">
            <div className="studentsHeader">
                Remove Student
            </div>
            <form className="findForm">
                <div className="findIp">
                    <label>Name :</label>
                    <input type="text" className="ipTxt ipField" id="name" required/>
                    <input type="submit" className="ipBtn sBtn" value="Remove" onClick={delStu}/>
                </div>
            </form>
        </div>
    );
}

export default Delete;