import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/AddLinks.css'
import FormLinks from "./FormLinks";
// add -1
const AddLink = () => {
  const URL = 'http://localhost:3000/api/v1/url/search/'
  const [optionValueSelect, setOptionValueSelect] = useState(null)
  const [linkShow, setLinkShow] = useState([]);


  const postLink = (data) => {
    axios
      .post(`${URL}${optionValueSelect ? optionValueSelect : ""}`,data)
      .then(() => {
        console.log("Link added successfully");
        petitionlink()
      })
      .catch(() => {
        console.log("Error adding link");
      });
  };

  const petitionlink = () => {
    axios
      .get(`${URL}${optionValueSelect ? optionValueSelect : ""}`)

      .then(({ data }) => setLinkShow(data.user))
      .catch(() => console.log("error"))
  }


  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      url: e.target.url.value,
      link: e.target.link.value,
    };
    postLink(data)
    e.target.reset();
  };

const endpoints = ['a','b','c','d','e','f']
  return (
    <>
      <div className="addForm">
        <div className="addFormSelect">
          <div>
            <h2> <span>Select Form Link !</span></h2>
          </div>
          <div>
            <select className="addOption"  value={optionValueSelect} onChange={(e) => setOptionValueSelect(e.target.value)} >
              <option  value={0}>Select Option!</option>
              {
                endpoints.map((e,i) =>
                  <option value={e}>List URL {i+1}</option>
                )}
            </select>

          </div>
        </div>

        <div className="formLinksContainer">
          {optionValueSelect != 0 ? 
          <FormLinks
          linkShow={linkShow} setLinkShow={setLinkShow} petitionlink={petitionlink}
          handleAdd={handleAdd} optionValueSelect={optionValueSelect} postLink={postLink}/> : null}
        </div>



      </div>


    </>
  );
};

export default AddLink;