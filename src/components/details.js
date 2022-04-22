import axios from "axios";
import React from "react";

const Details = () => {
  const dj =
    window.localStorage.getItem("user") !== null ||
    window.localStorage.getItem("user") !== "null"
      ? JSON.parse(window.localStorage.getItem("user"))
      : null;
  const user = dj.attributes;
  const like = async (id, likes) => {
    //   console
    if (window.localStorage.getItem("like") === "true") {
      alert("You have already liked this!");
    } else {
      const data = await axios.put(
        process.env.REACT_APP_API_URL + "/djs/" + id,
        {
          data: { likes: likes + 1 },
        },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      console.log(data);
      if (data.status === 200) {
        window.localStorage.setItem("like", "true");
        alert("Thanks for your like!");
      }
    }
  };
  return (
    <>
      {user !== null ? (
        <div className="container">
          <div className="card">
            <h2 className="p-2 text-center">
              {user.firstname} {user.lastname}
            </h2>
            <h4 className="p-3 text-center">{user.stagename}</h4>
            <img
              className="mx-auto my-auto"
              src={user.avatar}
              alt={user.stagename}
              height={200}
              width={300}
            ></img>
            <div className="d-grid mx-auto">
              <button
                type="button"
                className="btn btn-info mt-5 mb-5"
                onClick={() => like(dj.id, user.likes)}
              >
                Like
              </button>
            </div>
            <div className="d-grid mx-auto">
              <button type="button" className="btn btn-info mt-5 mb-5">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h4 className="p-3 text-center">
            Oops.. we're unable to fetch DJ details at this time.
          </h4>
        </div>
      )}
    </>
  );
};

export default Details;
