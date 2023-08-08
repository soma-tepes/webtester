import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormLinks = ({ handleAdd, optionValueSelect }) => {

    const [linkShow, setLinkShow] = useState()
    const URL = 'http://localhost:3000/api/v1/url/'

    const get = () => {
        axios
            .get(`${URL}${+optionValueSelect != 1 ? +optionValueSelect + "/" : "/"}`)
            .then(({ data }) => setLinkShow(data.user))
            .catch(() => console.log("error"))
    }

    useEffect(() => {
        get()
    }, [optionValueSelect])

    return (
        <div className="add_form">
            <h2>Form File {optionValueSelect}</h2>

            <form onSubmit={handleAdd}>
                <span>Add Name:</span>
                <input type="text" name="url" />

                <span>Add Url:</span>
                <input type="text" name="link" />
                <button>Add</button>
            </form>

            {+optionValueSelect === 1 || +optionValueSelect === 2 ? (
                linkShow &&
                linkShow.map((e) => (
                    <ul key={e.id}>
                        <li>{e.url}</li>
                        <li>{e.link}</li>
                    </ul>
                ))
            ) : null}
        </div>

    )
}

export default FormLinks