import React from "react";
import "../../../Styles/AddArticles.css";

const AddArticles = () => {
  const handleSubmitArticle = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", e.target.title.value);
    formData.append("description", e.target.title.value);
    formData.append("img", e.target.img.files[0]);

    console.log(formData);
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <>
      <div className="containerArtitle">
        <form onSubmit={handleSubmitArticle}>
          Title <input type="text" name="title" />
          Description <input type="text" name="description" />
          Img <input type="file" name="img" />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default AddArticles;
