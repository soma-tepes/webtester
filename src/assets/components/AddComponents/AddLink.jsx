import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/AddLinks.css'

const AddLink = () => {
const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      url: e.target.url.value,
      link: e.target.link.value,
    };
     postLink(data);
    e.target.reset();
  };
  
  const postLink = (data) => {

    axios
      .post('http://localhost:3000/api/v1/url/',data)
      .then(() => {console.log("success")})
      .catch(() => { console.log("error") })
  }
  return (
    <div className="addForm">
      <article className="add_form">
        <form onSubmit={handleAdd}>
         <span>Add Name:</span>
          <input type="text" name="url" />
        
        <span>Add Url:</span>
          <input type="text" name="link" />
          <button>Add</button>
        </form>
      </article>
    </div>
  );
};

export default AddLink;