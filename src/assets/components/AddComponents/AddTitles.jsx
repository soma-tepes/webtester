import React, { useEffect, useState } from 'react'
import '../../Styles/AddTitles.css'
import axios from 'axios'
const AddTitles = () => {

    const [titlesData, setTitlesData] = useState([])
    const [editTitle, setEditTitle] = useState(null)
    const URL = import.meta.env.VITE_URL + '/addtitle'
    const URLUPDATE = import.meta.env.VITE_URL2

    const handleFormTittle = (e) => {
        e.preventDefault()
        const data = {
            title: e.target.title.value
        }
        postTitle(data)
        e.target.title.value = ""
    }


    const handleEditTitles = (id) => {
        setEditTitle(id)
    }
    const current = titlesData.find(e => e.id == editTitle)

    const handleSave = (e, id) => {
        e.preventDefault()
        const dataEdit = {
            title: e.target.title.value
        }
        updateTitle(dataEdit, id)
        e.target.title.value = ""
        setEditTitle(null)

    }

   const peticion = () => {
        axios
            .get(URL)
            .then(({ data }) => {
                console.log(data);
                setTitlesData(data.title)
            })

            .catch(() => console.log("error con server Titles"))
    }

    const postTitle = (data) => {
        axios
            .post(`${URL}`, data)
            .then(() => peticion())
            .catch((err) => console.log(err))
    }

    const updateTitle = (data, id) => {
        axios
            .patch(`${URLUPDATE}${id}`, data)
            .then(() => {
                // Actualiza solo el título editado en el estado
                setTitlesData(prevTitles => {
                    const updatedTitles = prevTitles.map(title =>
                        title.id === id ? { ...title, ...data } : title
                    );
                    return updatedTitles;
                });
            })
            .catch((err) => console.log(err));
    };


    const deleteTitles = (id) => {
        axios
            .delete(`${URLUPDATE}${id}`)
            .then(() => peticion())
            .cathc(() => console.log("error"))
    }

    useEffect(() => {
        peticion()
    }, [])
    const sectionNames = [
        "Title Principal",
        "Header",
        "SubHeader",
        "Source Oregon",
        "Source General",
        "Source Tj",
        "Articles",
        "Articles Sub",
        "Post",
        "Footer",
        "SubFooter",
        "Copyrigth"
    ];

    return (


        <div className='addTitlesContainer'>
            {editTitle ?
                <div>
                    <form onSubmit={(e) => handleSave(e, current.id)}>
                        <input type="text" name='title' defaultValue={current.title !== null ? current.title : ''} key={`input-${editTitle}`} />

                        <button>Save Data</button>
                        <button onClick={()=>setEditTitle(null)}>Cancel</button>
                    </form>
                </div>
                : <div>
                    <form onSubmit={handleFormTittle}>
                        <input type="text" name="title" placeholder='Add Title' />
                        <button>Send</button>
                    </form>
                </div>

            }



            <div className='listTitles'>
                <ul>
                    {titlesData.map((title, index) => (
                        <li key={index}>
                            {sectionNames[index]}: {title.title && `${title.title} `}
                            <i onClick={() => handleEditTitles(title.id)}>📝</i>
                      { !editTitle   &&   <i onClick={() => deleteTitles(title.id)}>❌</i>}
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}

export default AddTitles