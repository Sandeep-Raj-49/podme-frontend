import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminDelete = () => {
  const [selectedPodcasts, setSelectedPodcasts] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/podcasts');
      setPodcasts(response.data);
    } catch (error) {
      console.error('Error fetching podcasts', error.message);
      toast.error('Error fetching podcasts. Please try again.');
    }
  };

  const handleCheckboxChange = (podcastId) => {
    setSelectedPodcasts((prevSelectedPodcasts) => {
      if (prevSelectedPodcasts.includes(podcastId)) {
        return prevSelectedPodcasts.filter((id) => id !== podcastId);
      } else {
        return [...prevSelectedPodcasts, podcastId];
      }
    });
  };

  const handleDeleteSelected = async () => {
    try {
      if (selectedPodcasts.length === 0) {
        toast.error('Please select podcasts to delete.');
        return;
      }

      await axios.delete('http://localhost:8000/api/delete-multiple-podcasts', {
        data: { podcastIds: selectedPodcasts },
      });

      toast.success('Selected podcasts deleted successfully');
      fetchPodcasts();
      setSelectedPodcasts([]);
    } catch (error) {
      console.error('Error deleting podcasts', error.message);
      toast.error('Error deleting podcasts. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        {podcasts.map((podcast) => (
          <div key={podcast._id} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkbox-${podcast._id}`}
              checked={selectedPodcasts.includes(podcast._id)}
              onChange={() => handleCheckboxChange(podcast._id)}
            />
            <label className="form-check-label" htmlFor={`checkbox-${podcast._id}`}>
              {podcast.title}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleDeleteSelected} className="btn btn-danger">
        Delete Selected Podcasts
      </button>
    </div>
  );
};

export default AdminDelete;
