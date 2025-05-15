import { useEffect, useState } from "react";
import axios from "axios";
import {CourseData} from "../../types"

export const useFetchPaidData = () => {
  const [data, setData] = useState<CourseData| null>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("/paid.json")
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, []);
  return { data };
};
