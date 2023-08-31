import React from 'react'
import '../../../Styles/AddArticles.css'

const AddArticles = () => {

const handleSubmitArticle = (e)=>{
  const data ={
    
    title: e.target.title.value,
    description: e.target.description.value,
  }
}


  return (
    <>
     <div className='containerArtitle'>
      <form onSubmit={handleSubmitArticle}>
        Title <input type="text" name='title' />
        Description <input type="text" name='description'/>
        Img <input type="file"  name='img'/>
        <button>Send</button>
      </form>
    </div>
    </>
   
  )
}

export default AddArticles