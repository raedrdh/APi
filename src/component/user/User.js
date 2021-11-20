import React from "react";
import '../userlist/UserList.css'

function User({ el }) {
  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
      <td>
        <ul>
          <li><b>street: </b>  {el.address.street}</li>
          <li> <b>suite: </b> {el.address.suite}</li>
          <li> <b>city: </b> {el.address.city}</li>
          <li> <b>zipcode: </b> {el.address.zipcode}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li> <b>lat :</b> {el.address.geo.lat}</li>
          <li><b>lng :</b> {el.address.geo.lng}</li>
        </ul>
      </td>
      <td>{el.phone}</td>
      <td>{el.website}</td>
      <td>
        <ul>
          <li><b>company name :</b> {el.company.name}</li>
          <li><b>catchPhrase :</b> {el.company.catchPhrase}</li>
          <li><b>bs :</b> {el.company.bs}</li>
        </ul>
      </td>
    </tr>
  );
}

export default User;
