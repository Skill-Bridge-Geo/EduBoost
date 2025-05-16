import { useEffect, useState } from "react";
import axios from "axios";
import { CourseData } from "../../types";

export const useFetchPaidData = () => {

  const [data, setData] = useState<CourseData| null>(null);

  useEffect(() => {
    axios
      .get("/paid.json")
      .then((res) => setData(res.data))


  }, []);

      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, [error]);

  return { data };
};
