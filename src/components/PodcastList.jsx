// PodcastList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch podcasts when the component mounts
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/podcasts');
      setPodcasts(response.data);
    } catch (error) {
      console.error('Error fetching podcasts', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Podcasts</h2>
      <div className="row">
        {podcasts.map((podcast) => (
          <div className="col-md-4" key={podcast._id}>
            <div className="card mb-4">
              {/* Update the image source to use the correct URL */}
              <img src={`http://localhost:8000/${podcast.imageUrl}`} className="card-img-top" alt={podcast.title} />
              <div className="card-body">
                <h5 className="card-title">{podcast.title}</h5>
                <p className="card-text">{podcast.description}</p>
                {/* Update the audio source to use the correct URL */}
                <audio controls>
                  <source src={`http://localhost:8000/${podcast.audioUrl}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;
