import React from "react";

const DirectoryItem = ({ user }) => {
  //send dj object to next route with local storage
  function view(dj) {
    window.localStorage.setItem("user", JSON.stringify(dj));
    window.location.href = "/dj/" + dj.id;
  }

  //destructure attributes from user object
  const { attributes } = user;

  //shorten lengthy bio
  const shortBio = (attributes.bio.length > 55) ? attributes.bio.substring(0, 55) + "..." : attributes.bio;

  //set default image
  const cardImg = (attributes.avatar === null) ? "https://via.placeholder.com/150" : attributes.avatar;

  return (
    <div
      className="col-sm-8 col-md-4 d-flex justify-content-around h-25 mb-4 custom-directory-item"
      key={user.id}
    >
      <div className="card custom-dj-card">
        <img
          className="card-img-top custom-dj-card-img"
          src={cardImg}
          alt={attributes.stagename}
        />
        <div className="card-body">
          <h5 className="card-title">{attributes.stagename}</h5>
          <h6 className="card-subtitle my-2 text-muted">
            Likes: {attributes.likes}
          </h6>
          <h6 className="card-subtitle my-2 text-muted">
            Rate: {attributes.rate !== null ? attributes.rate : "-"}
          </h6>
          <p className="card-text">{shortBio}</p>
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
