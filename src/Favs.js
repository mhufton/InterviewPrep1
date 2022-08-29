import React from "react";

export default function Favs({ favs }) {
  return (
    <div>
      {favs.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}
