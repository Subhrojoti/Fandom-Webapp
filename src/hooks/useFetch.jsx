import { useEffect, useState } from "react";
import { fetchDataFromapi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchDataFromapi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError("Something Went Wrong Try Again Later");
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
