import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../Styles/FormLink.css";

const FormLinks = ({ handleAdd, optionValueSelect }) => {
  const [linkShow, setLinkShow] = useState([]);
  const [editData, setEditData] = useState(null);
  const URL = 'http://localhost:3000/api/v1/url/search/a';

  const petitionlink = () => {
    axios
      .get('http://localhost:3000/api/v1/url/search/a')
      .then(({ data }) => setLinkShow(data.user))
      .catch(() => console.log("error"))
  }


  const handleDelete = (id) => {
    delet(id);
  };



  const handleEditData = (id) => {
    setEditData(id);
  };

  useEffect(() => {
    petitionlink()
  }, []);

  const allowedValues = [1, 2, 3, 4, 5, 6];
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
          <form>
            <input type="text" name="" id="" defaultValue={current.url} />
            <input type="text" name="" id="" defaultValue={current.link} />
            <button>Save</button>
            <button onClick={(e) => { e.preventDefault(); setEditData(null) }}>Cancel</button>
          </form>
        ) : (
          allowedValues.includes(+optionValueSelect) && (
            linkShow &&
            linkShow.map((e) => (
              <div>
                <ul key={e.id}>
                  <li>{e.url}</li>
                  <li>{e.link}</li>
                </ul>
                <div>
                  <button onClick={() => handleEditData(e.id)}>Edit</button>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
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