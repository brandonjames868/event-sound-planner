import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserForm = () => {
  const { user, isAuthenticated } = useAuth0();
  const [form, setForm] = useState({
    email: user.email,
    firstname: user.given_name,
    lastname: user.family_name,
    host: false,
    avatar: user.picture,
    bio: "",
    stagename: "",
    likes: 0,
  });

  const createUser = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      // proceed to create user
      try {
        const data = await axios.post(
          process.env.REACT_APP_API_URL + "/djs",
          {
            data: form,
          },
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        if (data.status === 200) {
          window.location.href = "/profile";
        } else {
          alert(
            "There was an issue completing your registration. Please try again"
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert(
        "There was an error completing your registration please login and try again"
      );
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Complete Registration</h1>
      <p className="text-center p-4">
        Please fill out the form to complete your registration.
      </p>
      <form className="container" onSubmit={createUser}>
        <div class="form-group">
          <label for="InputEmail">Email address</label>
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
          <label for="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="First Name"
            required
            value={form.firstname}
            onChange={(e) => {
              setForm({
                ...form,
                firstname: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            placeholder="Last Name"
            required
            value={form.lastname}
            onChange={(e) => {
              setForm({
                ...form,
                lastname: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label for="Bio">Bio</label>
          <textarea
            className="form-control"
            name="bio"
            id="bio"
            placeholder="Bio"
            required
            value={form.bio}
            onChange={(e) => {
              setForm({
                ...form,
                bio: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-check">
          <label className="form-check-label" for="host">
            Host/DJ
          </label>
          <select
            class="custom-select"
            name="host"
            id="host"
            required
            onChange={(e) =>
              setForm({
                ...form,
                host: e.target.value === "dj" ? false : true,
              })
            }
          >
            <option selected>Select Role</option>
            <option value="dj">DJ</option>
            <option value="host">Host</option>
          </select>
        </div>

        <div className="form-group">
          <label for="last-name">Stage Name</label>
          <input
            type="text"
            className="form-control"
            id="stage-name"
            placeholder="Stage Name"
            required
            value={form.stagename}
            onChange={(e) => {
              setForm({
                ...form,
                stagename: e.target.value,
              });
            }}
          />
        </div>

        <button className="btn btn-primary my-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
