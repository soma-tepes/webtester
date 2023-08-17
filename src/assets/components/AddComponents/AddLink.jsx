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
      .post(`${URL}${optionValueSelect ? optionValueSelect : ""}`, data)
      .then(() => {
        console.log("Link added successfully");
        fetchUpdatedLinks(); // Call the function to fetch updated data
      })
      .catch(() => {
        console.log("Error adding link");
      });
  };

  const fetchUpdatedLinks = () => {
    axios
      .get(`${URL}${optionValueSelect ? optionValueSelect : ""}`)
      .then(response => {
        // Here you can update the links in the same component
        const updatedLinks = response.data.user;
        console.log("Updated links:", updatedLinks);
      })
      .catch(error => {
        console.log("Error fetching updated links", error);
      });
  };
  useEffect(() => {
    // Cargar los datos iniciales desde la API
    fetchUpdatedLinks()
  }, []);

 const endpoints = ['a','b','c','d','e','f']
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
                endpoints.map((e,i) =>
                  <option value={e}>List URL {i+1}</option>
                )}
            </select>

          </div>
        </div>

        <div className="formLinksContainer">
          {optionValueSelect != 0 ? <FormLinks handleAdd={handleAdd} optionValueSelect={optionValueSelect} postLink={postLink}/> : null}
        </div>



      </div>


    </>
  );
};

export default AddLink;