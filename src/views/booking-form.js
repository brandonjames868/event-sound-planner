import React from "react";
import axios from "axios";
import { useState } from "react";

const BookingForm = () => {
  //get dj object from local storage persisting from details component
  const dj =
    window.localStorage.getItem("bookDj") !== null ||
      window.localStorage.getItem("bookDj") !== "null"
      ? JSON.parse(window.localStorage.getItem("bookDj"))
      : null;

  console.log(dj);
  //form data stored to app state
  const [form, setForm] = useState({
    email: "person@mail.com",
    name: "John Doe",
    contact: "(868) 123-4567",
    date: "This Friday at 8pm",
    hours: 1,
    location: "Port-of-Spain",
    info: "No additional info",
    related_dj: dj.id,
  });

  //updates specific user's bookings in backend
  const bookUser = async (e) => {
    //prevent default form action
    e.preventDefault();

    //try to update specific dj bookings in backend
    try {
      console.log(form);
      const data = await axios.post(
        process.env.REACT_APP_API_URL + "/bookings",
        {
          data: form,
        },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );

      //if request successful
      if (data.status === 200) {
        alert(
          "Your booking was successful! Please expect an email response within 3 business days."
        );
        //go back to home page
        window.location.pathname = "/";
      } else {
        alert("There was an issue completing your booking. Please try again");
      }
    } catch (e) {
      //console error message
      console.log(e);
      alert("There was an issue completing your booking.");
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Booking Form</h1>
      <p className="text-center p-4">
        Please fill out the form. The {dj.attributes.host ? "Host" : "DJ"} will
        contact you at their earliest convenience.
      </p>
      <form className="container" onSubmit={bookUser}>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={(e) => {
              setForm({
                ...form,
                name: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            placeholder="(868)123-4567"
            value={form.contact}
            onChange={(e) => {
              setForm({
                ...form,
                contact: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Booking Dates</label>
          <div className="pt-0">
            <small>Please enter the date along with time.</small>
          </div>
          <input
            type="text"
            className="form-control"
            id="dates"
            placeholder="June 28th, 1pm to 4pm."
            value={form.date}
            onChange={(e) => {
              setForm({
                ...form,
                date: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Booking Location</label>
          <input
            type="text"
            className="form-control"
            id="dates"
            placeholder="Bain Avenue, Santa Cruz"
            value={form.location}
            onChange={(e) => {
              setForm({
                ...form,
                location: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            className="form-control"
            id="hours"
            placeholder="1"
            value={form.hours}
            onChange={(e) => {
              setForm({
                ...form,
                hours: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Bio">Additional Information</label>
          <textarea
            className="form-control"
            name="info"
            id="addInfo"
            placeholder="Enter any additional details about the booking here."
            value={form.info}
            onChange={(e) => {
              setForm({
                ...form,
                info: e.target.value,
              });
            }}
          />
        </div>

        <button className="btn btn-primary my-2" type="submit">
          Make Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
