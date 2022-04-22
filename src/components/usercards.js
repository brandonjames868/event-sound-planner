import React from "react";
import Usercarditem from "./usercarditem";

const usercards = ({ users }) => {
  return (
    <div className="row">
      {users.map((user) => (
        <Usercarditem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default usercards;
