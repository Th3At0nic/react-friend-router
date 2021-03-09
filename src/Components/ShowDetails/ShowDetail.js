import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ShowDetail.css";
import "bootstrap/dist/css/bootstrap.css";

const ShowDetail = () => {
  let { friendId } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const { id, name, username, email, phone, website } = detail;

  return (
    <div className="text-center show-detail">
      <h1>{name}</h1>
      <div className="details">
        <h4>ID: {id}</h4>
        <h4>User Name: {username}</h4>
        <h4>Contact through: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Website: {website}</h4>
      </div>
    </div>
  );
};

export default ShowDetail;
