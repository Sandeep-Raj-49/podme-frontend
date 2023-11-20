import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import AdminCreate from './AdminCreate';
import AdminRead from './AdminRead';
import AdminUpdate from './AdminUpdate';
import AdminDelete from './AdminDelete';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/create-podcast', formData);
      toast.success('Podcast created successfully');
      setFormData({ title: '', description: '' });
      fetchPodcasts();
    } catch (error) {
      console.error('Error creating podcast', error.message);
      toast.error('Error creating podcast. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete-podcast/${id}`);
      toast.success('Podcast deleted successfully');
      fetchPodcasts();
    } catch (error) {
      console.error('Error deleting podcast', error.message);
      toast.error('Error deleting podcast. Please try again.');
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/search-podcasts/${searchTerm}`);
      setPodcasts(response.data);
    } catch (error) {
      console.error('Error searching podcasts', error.message);
      toast.error('Error searching podcasts. Please try again.');
    }
  };

  return (
    <div className={`admin-dashboard ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="sidebar-menu">
          <NavLink to="/admin-create" className="link" activeClassName="active">
            <div className="link-text">Create</div>
          </NavLink>
          <NavLink to="/admin-read" className="link" activeClassName="active">
            <div className="link-text">Read</div>
          </NavLink>
          <NavLink to="/admin-update" className="link" activeClassName="active">
            <div className="link-text">Update</div>
          </NavLink>
          <NavLink to="/admin-delete" className="link" activeClassName="active">
            <div className="link-text">Delete</div>
          </NavLink>
        </div>
      </div>
      <div className="main-content">
        <div className="dashboard-content">
          <h2>Welcome, Administrator!</h2>
          <p>
            This dashboard serves as the central hub for managing your podcast platform efficiently.
          </p>
          <h3>Overview:</h3>
          <ul>
            <li>
              <strong>Manage Podcasts:</strong>
              <ul>
                <li>
                  <strong>Create Podcasts:</strong> Add new podcasts to your platform by uploading
                  audio files and associated images. Provide titles and descriptions to make your
                  content engaging.
                </li>
                <li>
                  <strong>View Podcasts:</strong> Get an overview of all podcasts currently on your
                  platform. See details like title, description, and easily access the audio content.
                </li>
                <li>
                  <strong>Update Podcasts:</strong> Edit podcast details, change titles,
                  descriptions, or even update the associated audio and image files.
                </li>
                <li>
                  <strong>Delete Podcasts:</strong> Remove podcasts from your platform. Choose
                  single or multiple podcasts for deletion, ensuring full control over your content.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/admin-create" component={AdminCreate} />
          <Route path="/admin-read" component={AdminRead} />
          <Route path="/admin-update" component={AdminUpdate} />
          <Route path="/admin-delete" component={AdminDelete} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminDashboard;
