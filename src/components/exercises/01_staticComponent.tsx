import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo: React.FC = () => {
  return (
    <div>
      <h1>HDip Computer Science - Modules</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DevOps</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Fullstack Development</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
