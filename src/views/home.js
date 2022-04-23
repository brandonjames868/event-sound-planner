import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Hero, HomeContent } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  const checkUser = async () => {
    // fetch user from api
    if (isAuthenticated) {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL +
        "/djs?filters[email][$eq]=" +
        user.email,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      // create user if not found
      if (data.data.length === 0) {
        window.location.href = "/user-form";
      }
    }
  };

  useEffect(() => {
    checkUser();
  });

  return (
    <Fragment>
      <Hero />
      <hr />
      <HomeContent />
    </Fragment>
  );
};

export default Home;
