import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);

        if (!response.ok) {
          throw { name: "Not loaded" };
        }
      } catch (err) {
        if (err.name === "Not loaded") {
          console.log(err.name);
        } else {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);
  return { data };
};

export default useFetch;
