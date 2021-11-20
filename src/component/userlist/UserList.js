import React from "react";
import { Table } from "react-bootstrap";
import User from "../user/User";

function UserList({ userList }) {
  console.log(userList);
  return (
    <div>
      <h1 style={{marginLeft : '70vh'}}>user list </h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>geo</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((el) => (
            <User el={el} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
