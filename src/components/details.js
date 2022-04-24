import axios from "axios";
import React from "react";

const Details = () => {
  //check if user available in local storage
  //then get dj/user from saved local storage in browser
  const dj =
    window.localStorage.getItem("user") !== null ||
      window.localStorage.getItem("user") !== "null"
      ? JSON.parse(window.localStorage.getItem("user"))
      : null;

  //get attributes from dj object
  const user = dj.attributes;

  //update likes in backend for specified user
  const like = async (id, likes) => {
    //check if user already liked based on local storage in browser.
    //caveat: user can close and open browser to add new like.
    //solution (not implemented): create login for regular users to store "like" data.
    if (window.localStorage.getItem("likeFor" + id) === "true") {
      alert("You have already liked this!");
    } else {
      const data = await axios.put(
        process.env.REACT_APP_API_URL + "/djs/" + id,
        {
          "data": {
            likes: likes + 1 + ""
          },
        },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );

      //if request successful
      if (data.status === 200) {
        window.localStorage.setItem("likeFor" + id, "true");
        alert("Thanks for your like!");

        //manual state update
        document.getElementById("likesP").innerHTML = (likes + 1 + " Likes")
      }
    }
  };

  const handleBooking = () => {
    window.localStorage.setItem("bookDj", JSON.stringify(dj));
    window.location.pathname = "/booking-form";
  };

  return (
    <>
      {user !== null ? (
        <div className="container w-50 my-3">
          <div className="card pt-2 rounded shadow">
            <h2 className="p-3 text-center">
              {user.firstname} {user.lastname}
            </h2>
            <h4 className="p-3 text-center">{user.stagename}</h4>
            <img
              className="mx-auto my-auto rounded"
              src={user.avatar}
              alt={user.stagename}
              height={200}
              width={300}
            ></img>
            <div className="my-3 p-3 mx-auto bg-light">
              {user.bio}
            </div>
            <div className="row">

              <div className="mx-auto col-4">
                <p className="mx-auto muted mt-0 mb-2 pb-0">Rate $ {user.rate !== null ? user.rate : "-"} USD/hr </p>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg mb-5"
                  onClick={() => handleBooking()}
                >
                  Book Now
                </button>
              </div>


              <div className="col-4 ml-auto">
                <p id="likesP" className="muted mt-0 mb-0 pb-0">{user.likes} Likes</p>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg mt-2 mb-5"
                  onClick={() => like(dj.id, user.likes)}
                >
                  Like
                </button>
              </div>
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
