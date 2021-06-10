import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task from "./pages/Task/task";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import ChronometerPage from "./pages/Chronometer/Chronometer";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task" exact component={Task} />{" "}
        {/* Path and Exact props */}
        <Route exact path="/edit-profile" exact component={EditProfile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chronometer" component={ChronometerPage} />
        <Route exact path="/signup" component={Signup} redirectPath="/" />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
