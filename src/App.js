import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Team from "./components/Team";
import AdminAuth from "./components/AdminAuth"; // Update the path
import AdminLogin from "./components/AdminLogin"; // Update the path
import AdminRegistration from "./components/AdminRegistration";
import AdminDashboard from "./AdminDashboard";
import AdminCreate from "./AdminCreate";
import AdminRead from "./AdminRead";
import AdminUpdate from "./AdminUpdate";
import AdminDelete from "./AdminDelete";
import PodcastList from './components/PodcastList';

import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/admin" exact component={AdminAuth} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/register" component={AdminRegistration} />
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/admin-create" component={AdminCreate} />
        <Route path="/admin-read" component={AdminRead} />
        <Route path="/admin-update" component={AdminUpdate} />
        <Route path="/admin-delete" component={AdminDelete} />
        <Route path="/podcasts" component={PodcastList} />
        
      </Switch>

      <Footer />
    </>
  );
}

export default App;