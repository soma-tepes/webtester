import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/AddLinks.css'
import FormLinks from "./FormLinks";
// add -1
const AddLink = () => {
  const URL = 'http://localhost:3000/api/v1/url/search/'
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
      .post(`${URL}${+optionValueSelect != 1 ? +optionValueSelect + "/" : "/"}`, data)
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
        <div className="addFormSelect">
          <div>
            <h2> <span>Select Form Link !</span></h2>
          </div>
          <div>
            <select value={optionValueSelect} onChange={(e) => setOptionValueSelect(e.target.value)} >
              <option value={0}>Select Option!</option>
              {
                count.map(e =>
                  <option value={e}>List URL {"=>"}{e}</option>
                )}
            </select>

          </div>
        </div>

        <div className="formLinksContainer">
          {optionValueSelect != 0 ? <FormLinks handleAdd={handleAdd} optionValueSelect={optionValueSelect} /> : null}
        </div>



      </div>


    </>
  );
};

export default AddLink;