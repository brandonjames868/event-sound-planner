import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

import { NavBar, Footer, Loading, DirectoryList, Details } from "./components";
import { Home, Profile, EventPlanner, UserForm, BookingForm } from "./views";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event-planner" component={EventPlanner} exact />
          <Route path="/dj-list" component={DirectoryList} />
          <Route path="/dj/:id" component={Details} />
          <ProtectedRoute path="/user-form" component={UserForm} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/booking-form" component={BookingForm} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
