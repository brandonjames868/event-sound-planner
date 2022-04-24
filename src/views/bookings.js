import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Bookings = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, isAuthenticated } = useAuth0();
  const { name, email } = user;
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
      <div className="row align-items-center profile-header mb-2">
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>

      <div className="row bookings-container">
        {bookings.length === 0 ? "No Bookings Right Now." : null}
        {bookings.map((booking) => {
          return (
            <div key={booking.id} className="container border p-3 w-50 bg-white">
              <div>
                <h3>Name: {booking.attributes.name}</h3>
                <p>Email: {booking.attributes.email}</p>
                <p>Contact: {booking.attributes.contact}</p>
                <p>Location: {booking.attributes.location}</p>
                <p>Date: {booking.attributes.date}</p>
                <p>Hours: {booking.attributes.hours}</p>
                <p>Information: {booking.attributes.info}</p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookings;
