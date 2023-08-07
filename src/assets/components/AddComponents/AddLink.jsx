import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "../../components/Links";
const AddLink = () => {
  const [linkApp, setlinkApp] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      link: e.target.link.value,
    };
    console.log(data);
    setlinkApp([...linkApp, data]);
    e.target.reset();
  };
  return (
    <div>
      <article>
        <form onSubmit={handleAdd}>
          Add Name
          <input type="text" name="name" />
          <br />
          Add Link
          <input type="text" name="link" />
          <button>Add</button>
        </form>
      </article>
      {/*      <Links /> */}
      {/*  {linkApp.length > 0 && <Links linkApp={linkApp} />} */}
    </div>
  );
};

export default AddLink;
