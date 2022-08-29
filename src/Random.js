import React from "react";
import UserCard from "./UserCard";

export default function Random({ random, addToFav }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://random-data-api.com/api/v2/users?size=10`
        );
        const info = await res.json();
        console.log(info);
        setData(info);
      } catch (e) {
        console.log(`Fetch error: ${e}`);
      }
    }
    getData();
    console.log(data);
  }, [random]);

  return (
    <div>
      {data ? (
        <UserCard data={data} addToFav={addToFav} />
      ) : (
        <p>loadig data...</p>
      )}
    </div>
  );
}
