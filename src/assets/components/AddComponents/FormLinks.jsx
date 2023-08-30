import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../Styles/FormLink.css";

const FormLinks = ({ handleAdd, optionValueSelect, linkShow, setLinkShow, petitionlink }) => {

  const [editData, setEditData] = useState(null);
  const URL = `http://localhost:3000/api/v1/url/search/`;
  
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

  const deletLink = (id) => {
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
        <div className='addFormSpanInput'>
         
      
          <form onSubmit={handleAdd}>

            <span>Add Name:</span>
            <input className='linkFormLink' type="text" name="link" required placeholder={`Register Data Form: ${optionValueSelect}`} />

            <span>Add Url:</span>
            <input className='linkFormUrl' type="text" name="url" required placeholder={`Register Data Form: ${optionValueSelect}`} />

            <button>Add</button>
          </form>
        </div>
      </div>

      <div className='formLinkShowData'>
        {
          editData ? (
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
                <div className='showDataFormLisks' key={e.id}>
                  <div className='showDataFormLisksList'>
                    <ul >
                      <li>{e.namelink}</li>
                      <li>{e.nameurl}</li>
                    </ul>
                  </div>

                  <div className='showDataFormLisksButton'>
                    <button onClick={() => handleEditData(e.id)}> 📝</button>
                    <button onClick={() => deletLink(e.id)}> ❌</button>
                  </div>
                </div>
              ))
            )
          )
        }
      </div>
    </div>
  );
};

export default FormLinks;