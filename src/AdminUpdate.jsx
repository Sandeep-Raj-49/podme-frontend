import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AdminUpdate = () => {
  const { podcastId } = useParams(); // Get the podcast ID from the URL params
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch the existing podcast data when the component mounts
    fetchPodcastData();
  }, [podcastId]);

  const fetchPodcastData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/podcasts/${podcastId}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching podcast data', error.message);
      toast.error('Error fetching podcast data. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Implement logic to update podcast using axios
      await axios.put(`http://localhost:8000/api/update-podcast/${podcastId}`, formData);
      toast.success('Podcast updated successfully');
    } catch (error) {
      console.error('Error updating podcast', error.message);
      toast.error('Error updating podcast. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Podcast</h2>
      <form onSubmit={handleUpdate}>
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
        {/* Add more form fields as needed */}
        <button type="submit" className="btn btn-primary">
          Update Podcast
        </button>
      </form>
    </div>
  );
};

export default AdminUpdate;
