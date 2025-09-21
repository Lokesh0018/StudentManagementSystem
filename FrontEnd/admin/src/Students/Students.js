import React from "react";
import { IoIosAdd } from "react-icons/io";

const Students = () => {
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
            <tr className="detailsBody">
              <td>1</td>
              <td className="stuName"><img src="" className="stuImg" alt="image1" />Name</td>
              <td>Email</td>
              <td>Branch</td>
              <td>State</td>
              <td>Country</td>
            </tr>
            <tr className="detailsBody">
              <td>Id</td>
              <td className="stuName"><img src="" className="stuImg" alt="image2" />Name</td>
              <td>Email</td>
              <td>Branch</td>
              <td>State</td>
              <td>Country</td>
            </tr>
            <tr className="detailsBody">
              <td>Id</td>
              <td className="stuName"><img src="" className="stuImg" alt="image3" />Name</td>
              <td>Email</td>
              <td>Branch</td>
              <td>State</td>
              <td>Country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
