import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../Styles/FormLink.css";

const FormLinks = ({ handleAdd, optionValueSelect }) => {
  const [linkShow, setLinkShow] = useState([]);
  const [editData, setEditData] = useState(null);
  const URL = `http://localhost:3000/api/v1/url/search/`;



  const petitionlink = () => {
    axios
      .get(`${URL}${optionValueSelect ? optionValueSelect : ""}`)

      .then(({ data }) => setLinkShow(data.user))
      .catch(() => console.log("error"))
  }


  const handleUpdate = (e, id) => {
    e.preventDefault()
    const data = {

      namelink: e.target.namelink.value,
      nameurl: e.target.nameurl.value
    }

    updateAxios(id, data)
    e.target.reset()
    setEditData(null)
    setLinkShow([])
  }

  const updateAxios = (id, data) => {
    axios
      .patch(`${URL}${optionValueSelect}/${id}`, data)
      .then(() => petitionlink())
      .catch((err) => console.log(err))
  }

/*   const handleDelete = (id) => {
    delet(id);

  }; */

  const deletLink = (id)=>{
    console.log(`${URL}${optionValueSelect}/${id}`)
    axios
    .delete(`${URL}${optionValueSelect}/${id}`)
    .then(() => petitionlink())
    .catch((err) => console.log(err))
  }


  const handleEditData = (id) => {
    setEditData(id);

  };

  useEffect(() => {
    petitionlink()

  }, [optionValueSelect]);


  const current = linkShow.find((e) => e.id === editData);

  return (
    <div className="add_form">
      <div className='addFormTitle'>
        <div>
          <h2>Form File {optionValueSelect}</h2>
        </div>
        <div>
          <form onSubmit={handleAdd}>
            <span>Add Name:</span>
            <input type="text" name="url" />

            <span>Add Url:</span>
            <input type="text" name="link" />
            <button>Add</button>
          </form>
        </div>
      </div>

      <div className='formLinkShowData'>
        {editData ? (
          <form onSubmit={(e) => handleUpdate(e, current.id)}>
            <input type="text" name="nameurl" id="" defaultValue={current.nameurl} />
            <input type="text" name="namelink" id="" defaultValue={current.namelink} />
            <button >Save</button>
            <button onClick={(e) => { e.preventDefault(); setEditData(null) }}>Cancel</button>
          </form>
        ) : (
          (
            linkShow &&
            linkShow.map((e) => (
              <div>
                <ul key={e.id}>
                  <li>{e.nameurl}</li>
                  <li>{e.namelink}</li>
                </ul>
                <div>
                  <button onClick={() => handleEditData(e.id)}>Edit</button>
                  <button onClick={() => deletLink(e.id)}>Delete</button>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default FormLinks;