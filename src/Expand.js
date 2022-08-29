import React from "react";

export default function Expand({ user }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open === false ? <p>+</p> : <p>-</p>}
      </button>
      {open === true && (
        <div>
          <p>ID: {user.id}</p>
          <p>Phone: {user.phone_number}</p>
          <p>DOB: {user.date_of_birth}</p>
        </div>
      )}
    </div>
  );
}
