import React, { useEffect, useState } from 'react'
import '../../Styles/AddTitles.css'
import axios from 'axios'
const AddTitles = () => {
   
    const [titlesData, setTitlesData] = useState([])
    const URL = import.meta.env.VITE_URL+"/addtitle"
console.log(URL+"/addtitle")
    const peticion = ()=> {
        axios
        .get(URL)
        .then(({data})=>{
            console.log(data.title);
            setTitlesData(data.title)
        })
      
        .catch(()=>console.log(""))
    }

 const handleFormTittle =()=>{}

    useEffect(()=>{
        peticion()
    },[])

    return (
        <div className='addTitlesContainer'>
            <div>
                <form onSubmit={handleFormTittle}>
                    <input type="text" name="title" placeholder='Add Title' />
                    <button>Send</button>
                </form>
            </div>


            <div className='listTitles'> 
                <ul>
                    <li>Title Principal :{titlesData[0]?.title} </li>
                    <li>Header :{}</li>
                    <li>SubHeader :{}</li>
                    <li>Source Oregon :{}</li>
                    <li>Source General :{}</li>
                    <li>Source Tj :{}</li>
                    <li>Articles :{}</li>
                    <li>Articles Sub :{}</li>
                    <li>Post :{}</li>
                    <li>Footer :{}</li>
                    <li>SubFooter :{}</li>
                    <li>Copyrigth :{}</li>
                </ul>
            </div>

        </div>
    )
}

export default AddTitles