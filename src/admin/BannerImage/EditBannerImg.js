import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditBannerImg() {
  const [post, setPost] = useState({
    name: '',
    BannerImage: '',
  });

  const navigate = useNavigate();

  function handleInput(event) {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/api/BannerImage', post)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    alert('Banner added Successfully!..');

    navigate('/admin');
  }

  return (
    <>
      <h4>Add Banner Images</h4>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Banner Image</label>
          <input
            type="file"
            className="form-control"
            id="BannerImage"
            name="BannerImage"
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
