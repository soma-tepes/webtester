import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/AddLinks.css'
import FormLinks from "./FormLinks";
import AddSelect from "./AddSelect";
import AddTitles from "./AddTitles";

// add -1
const AddLink = () => {
  

  const URL = import.meta.env.VITE_URL
  const [optionValueSelect, setOptionValueSelect] = useState(null)
  const [linkShow, setLinkShow] = useState([]);
  const [optionNavigator, setOptionNavigator] = useState()
 

 
  const postLink = (data) => {
    axios
      .post(`${URL}${optionValueSelect ? optionValueSelect : ""}`, data)
      .then(() => {  console.log("Link added successfully"); petitionlink() })
      .catch(() => {console.log("Error adding link");});
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

  const endpoints = ['a', 'b', 'c', 'd', 'e', 'f']


  return (
    <>
      <div className="addForm">

        <div>
          <select value={optionNavigator} name="" id="" onChange={e => setOptionNavigator(e.target.value)}>
            <option value=""  >"Edit Option"</option>
            <option value="1">Add LINK</option>
            <option value="2">Add Titles</option>
          </select>
        </div>

        {optionNavigator == 1 &&
          <AddSelect optionValueSelect={optionValueSelect} setOptionValueSelect={setOptionValueSelect} endpoints={endpoints} />
        }





        <div className="formLinksContainer">
          {optionNavigator == 1 && optionValueSelect != 0 ?
            <FormLinks
              linkShow={linkShow} setLinkShow={setLinkShow} petitionlink={petitionlink}
              handleAdd={handleAdd} optionValueSelect={optionValueSelect} postLink={postLink} /> : null}

          {
            optionNavigator == 2 &&
            <div className="formLinksContainer">

              <AddTitles />
            </div>
          }

        </div>
      </div>


    </>
  );
};

export default AddLink;