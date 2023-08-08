import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/AddLinks.css'
import FormLinks from "./FormLinks";

const AddLink = () => {

  const [optionValueSelect, setOptionValueSelect] = useState(null)

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
      .post('http://localhost:3000/api/v1/url/', data)
      .then(() => { console.log("success") })
      .catch(() => { console.log("error") })
  }
  const count = []
  for (let i = 1; i < 7; i++) {
    count.push(i)

  }


  return (
    <>
      <div className="addForm">
        <h2> <span>Select Form Link !</span>

          <select name="" id="" value={optionValueSelect} onChange={(e) => setOptionValueSelect(e.target.value)} >
            <option value={0}>Select Option!</option>
            {
              count.map(e =>
                <option value={e}>List URL {"=>"}{e}</option>
              )}
          </select>
        </h2>


        {optionValueSelect != 0?<FormLinks handleAdd={handleAdd} optionValueSelect={optionValueSelect} /> : null}
      

      </div>


    </>
  );
};

export default AddLink;