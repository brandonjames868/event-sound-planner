import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Usercards from "./usercards";
//import assets
import dj_icon from "../assets/img/dj-icon.png";
import list_icon from "../assets/img/list-icon.png";
import client_icon from "../assets/img/client-icon.png";
import rated_dj_icon from "../assets/img/rated-dj-icon.png";
import equipment_icon from "../assets/img/equipment-icon.png";
import info_icon from "../assets/img/personal-info-icon.svg";


const HomeContent = () => {
  const { loginWithRedirect } = useAuth0();

  //set app state
  const [djs, setDjs] = useState([]);
  const [hosts, setHosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set loading state
    setLoading(true);

    //fetch most popular djs
    async function getDjs() {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL +
        "/djs?pagination[start]=0&pagination[limit]=4&sort=likes:desc&filters[host][$eq]=false",
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      //add results to state
      setDjs(data.data);
      //change loading state
      setLoading(false);
    }

    // fetch most popular hosts
    async function getHosts() {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL +
        "/djs?pagination[start]=0&pagination[limit]=4&sort=likes:desc&filters[host][$eq]=true",
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      //add results to state
      setHosts(data.data);
      //change loading state
      setLoading(false);
    }

    // call functions
    getDjs();
    getHosts();
  }, []); //on page load

  return (
    <>
      {/* Section User Portals */}
      <div className="next-steps mb-4 pt-1">
        <h2 className="my-5 text-center">User Portals</h2>

        <div className="row">
          <div className="col-sm-4 ">
            <div className="card shadow rounded-lg border-1">
              <img className="card-img-top dj-icon" src={client_icon} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Access Event Planner</h5>
                <p className="card-text">
                  Get sound system suggestions for your next event!
                </p>
                <NavLink to="/event-planner" exact>
                  <div className="btn btn-primary rounded btn-block gradient-bg text-x2">
                    Enter
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card shadow rounded-lg border-1">
              <img className="card-img-top dj-icon" src={list_icon} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Directory</h5>
                <p className="card-text">
                  View DJ profiles and rates. Book DJ's and/or Hosts for events.
                </p>
                <NavLink to="/dj-list" exact>
                  <div className="btn btn-primary rounded btn-block gradient-bg text-x2">
                    Enter
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card shadow rounded-lg border-1">
              <img className="card-img-top dj-icon" src={dj_icon} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">DJs</h5>
                <p className="card-text">
                  Register as a DJ/Host. Edit or update your DJ profile. Accept
                  event requests.
                </p>
                <button
                  onClick={() => loginWithRedirect()}
                  className="btn btn-primary rounded btn-block gradient-bg text-x2"
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="info-icon" src={info_icon} alt="Planning Icon" />
      </div>

      {/* Section 2: Popular DJs */}
      <div className="next-steps mb-4 pt-1 mt-5 section-2">
        <h2 className="my-5 text-center">Most Popular DJs</h2>
        <div className="row">
          <div className="col">
            <Usercards users={djs} />
          </div>
        </div>

        <img
          className="rated-dj-icon"
          src={rated_dj_icon}
          alt="Planning Icon"
        />
      </div>

      {/* Section 3: Popular Hosts */}
      <div className="next-steps mb-4 pt-1 mt-5 section-3">
        <h2 className="my-5 text-center">Most Popular Hosts</h2>

        <div className="row">
          <div className="col">
            <Usercards users={hosts} />
          </div>
        </div>

        <img
          className="equipment-icon"
          src={equipment_icon}
          alt="Planning Icon"
        />
      </div>

      {/* Section 4: Footnote */}
      <div className="mb-4 py-1 px-5 mt-5 bg-light section-4">
        <h2 className="my-5 text-center">Top Rated Equipment Suppliers <br /> COMING SOON!</h2>
      </div>
    </>
  );
};
export default HomeContent;
