import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    audioFile: null,
    imageFile: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('audioFile', formData.audioFile);
      data.append('imageFile', formData.imageFile);
  
      // Log FormData to console to debug
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
  
      const response = await axios.post('http://localhost:8000/api/createpodcast', data);
      console.log('Server response:', response.data);
      toast.success('Podcast created successfully');
      setFormData({ title: '', description: '', audioFile: null, imageFile: null });
    } catch (error) {
      console.error('Error creating podcast', error.message);
      toast.error('Error creating podcast. Please try again.');
    }
  };
  

  return (
    <div className="container mt-5">
      <h2>Create Podcast</h2>
      <form onSubmit={handleCreate} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="audioFile" className="form-label">
            Audio File
          </label>
          <input
            type="file"
            className="form-control"
            id="audioFile"
            name="audioFile"
            accept="audio/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageFile" className="form-label">
            Image File
          </label>
          <input
            type="file"
            className="form-control"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Podcast
        </button>
      </form>
    </div>
  );
};

export default AdminCreate;
