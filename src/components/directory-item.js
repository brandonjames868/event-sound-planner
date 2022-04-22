import React from "react";

const DirectoryItem = ({ user }) => {
  //send dj object to next route with local storage
  function view(dj) {
    window.localStorage.setItem("user", JSON.stringify(dj));
    window.location.href = "/dj/" + dj.id;
  }

  //destructure attributes from user object
  const { attributes } = user;

  return (
    <div
      className="col-sm-8 col-md-4 d-flex justify-content-around h-25 mb-4"
      key={user.id}
    >
      <div className="card custom-dj-card">
        <img
          className="card-img-top"
          src={attributes.avatar}
          alt={attributes.stagename}
        />
        <div className="card-body">
          <h5 className="card-title">{attributes.stagename}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Likes: {attributes.likes}
          </h6>
          <p className="card-text">{attributes.bio}</p>
          <button
            onClick={() => {
              view(user);
            }}
            className="btn btn-primary"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
