import { useState } from "react";
import { useEffect } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data.length > 0) {
        setData(data);
      }
    }

    getData();
  });

  return (
    <div>
      <ul>
        {data.map((d) => (
          <div key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
