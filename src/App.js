import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from './components/Admin/AddService/AddService';
import AllService from './components/Admin/AllServiceList/AllService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Contact from './components/Contact/Contact';
import CustomerReview from './components/Customer/CustomerReview/CustomerReview';
import Order from './components/Customer/Order/Order';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllServiceList from './components/Admin/AllServiceList/AllService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    name: '',
    img: ''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/order/:name">
            <Navbar />
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Navbar />
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Navbar />
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/admin-panel">
            <Navbar />
            <AllServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Navbar />
            <CustomerReview />
          </PrivateRoute>
          <PrivateRoute path="/service">
            <Navbar />
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/all-service">
            <Navbar />
            <AllService />
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <Navbar />
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/add-admin">
            <Navbar />
            <MakeAdmin />
          </PrivateRoute>
          <Route path="/login">
            <Navbar />
            <LogIn />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="*">
            <Navbar />
            <img className="mx-auto d-block img-fluid mt-3" src="https://image.freepik.com/free-vector/404-liquid-error_114341-59.jpg" alt="" />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
