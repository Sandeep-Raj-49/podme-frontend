// AdminRead.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRead = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch podcasts when the component mounts
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/podcasts');
      const updatedPodcasts = response.data.map((podcast) => ({
        ...podcast,
        audioUrl: podcast.audioUrl.replace(/\\/g, '/'),
      }));
      setPodcasts(updatedPodcasts);
    } catch (error) {
      console.error('Error fetching podcasts', error.message);
    }
  };
  
  
  

  return (
    <div className="container mt-5">
      <h2>Read Podcasts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Audio</th>
          </tr>
        </thead>
        <tbody>
          {podcasts.map((podcast) => (
            <tr key={podcast._id}>
              <td>{podcast.title}</td>
              <td>{podcast.description}</td>
              <td>
                {podcast.audioUrl && (
                  <audio controls>
                  <source src={`http://localhost:8000/${podcast.audioUrl}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRead;
