import React, { useState, useRef } from "react";

const Update = () => {
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        branch: "",
        state: "",
        country: "",
        imageUrl: "",
    });
    const [imgFile, setImgFile] = useState(null);
    const [searchName, setSearchName] = useState("");
    const imgInputRef = useRef(null);

    const fetchData = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/name/${searchName}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data || !data.id) {
                    alert("Student not found");
                    return;
                }
                setData(data);
            })
            .catch((err) => alert("Error fetching student: " + err.message));
    };

    const submitDetails = (e) => {
        e.preventDefault();

        const studentData = {
            id: data.id,
            name: data.name,
            email: data.email,
            branch: data.branch,
            state: data.state,
            country: data.country,
        };

        const formData = new FormData();
        formData.append("studentData", JSON.stringify(studentData));
        if (imgFile)
            formData.append("img", imgFile);
        else
            formData.append("img",data.img);

        fetch(`http://localhost:8081/update`, {
            method: "PUT",
            body: formData,
        })
            .then((res) => res.json())
            .then(() => {
                alert("Updated");
                setData({
                    id: "",
                    name: "",
                    email: "",
                    branch: "",
                    state: "",
                    country: "",
                    imageUrl: "",
                });
                setImgFile(null);
                setSearchName("");
                if (imgInputRef.current) {
                    imgInputRef.current.value = null;
                }
            })
            .catch((err) => alert("Error updating student: " + err.message));
    };

    return (
        <div className="update">
            <div className="studentsHeader">Update Student</div>

            {/* Search Form */}
            <form className="findForm" onSubmit={fetchData}>
                <div className="findIp">
                    <label>Name :</label>
                    <input
                        type="text"
                        className="ipTxt ipField"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        required
                    />
                    <input type="submit" className="ipBtn sBtn" value="Find" />
                </div>
            </form>

            {/* Update Form */}
            <div className="addContainer">
                <div className="addCard">
                    <form className="addStudent" onSubmit={submitDetails}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Image :</label></td>
                                    <td>
                                        <input
                                            type="file"
                                            id="img"
                                            ref={imgInputRef}
                                            onChange={(e) => setImgFile(e.target.files[0])}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Name :</label></td>
                                    <td>
                                        <input
                                            type="text"
                                            className="ipTxt"
                                            value={data.name}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            required
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Email :</label></td>
                                    <td>
                                        <input
                                            type="email"
                                            className="ipTxt"
                                            value={data.email}
                                            onChange={(e) => setData({ ...data, email: e.target.value })}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Branch :</label></td>
                                    <td>
                                        <input
                                            type="text"
                                            className="ipTxt"
                                            value={data.branch}
                                            onChange={(e) => setData({ ...data, branch: e.target.value })}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>State :</label></td>
                                    <td>
                                        <input
                                            type="text"
                                            className="ipTxt"
                                            value={data.state}
                                            onChange={(e) => setData({ ...data, state: e.target.value })}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Country :</label></td>
                                    <td>
                                        <input
                                            type="text"
                                            className="ipTxt"
                                            value={data.country}
                                            onChange={(e) => setData({ ...data, country: e.target.value })}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button type="submit" disabled={!data.id}>
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Image Preview */}
                        <div className="imgUp">
                            {imgFile ? (
                                <img
                                    src={URL.createObjectURL(imgFile)}
                                    alt="Preview"
                                    style={{ maxWidth: "200px", marginTop: "10px" }}
                                />
                            ) : data.imageUrl && (
                                <img
                                    src={data.imageUrl}
                                    alt="Student"
                                    style={{ maxWidth: "200px", marginTop: "10px" }}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
