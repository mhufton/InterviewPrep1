import React from "react";
import Expand from "./Expand";

export default function UserCard({ data, addToFav }) {
  return (
    <div>
      {data.map((user, index) => {
        return (
          <div key={index} className="userHolder">
            <div>
              <img src={user.avatar} alt={`${user.first_name}'s profile`} />
            </div>
            <div className="infoHolder">
              <div className="nameHolder">
                {`${user.first_name} ${user.last_name}`}
              </div>
              <p className="emailHolder">{user.email}</p>
            </div>
            <Expand user={user} />
            <button onClick={() => addToFav(user.first_name)}>FAV</button>
          </div>
        );
      })}
    </div>
  );
}
