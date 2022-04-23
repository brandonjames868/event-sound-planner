import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, isAuthenticated } = useAuth0();
  const { name, picture, email } = user;
  const [dj, setDj] = useState({});
  const [bookings, setBookings] = useState([]);

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
      console.log(data.data[0])
      setDj(data.data[0]);
      // create user if not found
      if (data.data.length === 0) {
        window.location.href = "/user-form";
      }
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  //check if user exists in backend on load
  useEffect(() => {
    async function getBookings() {
      // fetch bookings
      const resp = await axios.get(
        process.env.REACT_APP_API_URL +
        "/bookings?filters[related_dj][$eq]=" +
        dj.id,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      setBookings(resp.data.data);
    }
    getBookings();
  }, [dj]);

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>

      <div className="row bookings-container">
        {bookings.length === 0 ? "No Bookings Right Now." : null}
        {bookings.map((booking) => {
          return (
            <div key={booking.id}>
              <h3>{booking.attributes.name}</h3>
              <h4>{booking.attributes.email}</h4>
              <h4>{booking.attributes.contact}</h4>
              <h4>{booking.attributes.location}</h4>
              <h4>{booking.attributes.date}</h4>
              <h4>{booking.attributes.info}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
