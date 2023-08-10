import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../Styles/FormLink.css"
const FormLinks = ({ handleAdd, optionValueSelect }) => {

    const [linkShow, setLinkShow] = useState()
    const URL = 'http://localhost:3000/api/v1/url/search/'

    const get = () => {
        axios
            .get(`${URL}${+optionValueSelect != 1 ? +optionValueSelect + "/" : "/"}`)
            .then(({ data }) => setLinkShow(data.user))
            .catch(() => console.log("error"))
    }

    useEffect(() => {
        get()
    }, [optionValueSelect,linkShow])
    const allowedValues = [1, 2, 3, 4, 5, 6];
    return (

        <div className="add_form" >
            <div className='addFormTitle'>
            <div>   <h2>Form File {optionValueSelect}</h2></div>
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
                {allowedValues.includes(+optionValueSelect) && (
                    linkShow &&
                    linkShow.map((e) => (
                     
                            <div>
                                <ul key={e.id}>
                                    <li>{e.url}</li>
                                    <li>{e.link}</li>
                                </ul>
                                <div>

                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                      


                    ))
                )}
            </div>
        </div>

    )
}

export default FormLinks