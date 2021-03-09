import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { name, id, username, email } = props.friend;
  return (
    <div className="m-4 p-2 border border-info rounded-pill">
      <h1>{name}</h1>
      <Link to={`/friend-detail/${id}`}>
        <button className="btn btn-info m-3 p-2 ">Detail</button>
      </Link>
    </div>
  );
};

export default Friend;
