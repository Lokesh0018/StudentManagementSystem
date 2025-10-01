import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

const Students = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('http://localhost:8081/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => alert(err));
  }, [])
  return (
    <div className="students">
      <div className="studentsHeader">
        Students
        <button className="addBtn">
          <IoIosAdd />
          New Student
        </button>
      </div>

      <div className="studentsFilter">
        <input type="text" className="searchStu" placeholder="Search" />
        <select className="filterStu">
          <option value="id">Id</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="branch">Branch</option>
        </select>
      </div>

      <div className="details">
        <table className="detailsTab">
          <thead>
            <tr className="detailsHead">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Branch</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.map((student, index) => (
              <tr className="detailsBody" key={index}>
                <td>{student.id}</td>
                <td className="stuName">
                  <img src={student.imageUrl} className="stuImg" alt={`image${index + 1}`} />
                  {student.name}
                </td>
                <td>{student.email}</td>
                <td>{student.branch}</td>
                <td>{student.state}</td>
                <td>{student.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
