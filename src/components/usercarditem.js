import React from "react";

const Usercarditem = ({ user }) => {
  const { attributes } = user;
  const view = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/dj/" + user.id;
  };
  return (
    <div className="col-sm-3 text-center">
      <div className="card text-white bg-dark mb-3 tr-dj-card">
        <div className="card-header">
          {attributes.firstname + " " + attributes.lastname}
        </div>
        <div className="card-body">
          <div className="custom-avatar mb-3">
            <img
              src={attributes.avatar}
              alt={attributes.stagename}
              height={100}
              width={140}
            ></img>
          </div>
          <h5 className="card-title">{attributes.stagename}</h5>
          <p className="card-text">
            Rate:{" "}
            {attributes.rate !== null ? "$" + attributes.rate + "USD/hr" : "-"}
          </p>
          <p className="card-text">Likes: {attributes.likes}</p>
          <button
            className="btn btn-primary profile-btn rounded"
            onClick={() => {
              view(user);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercarditem;
