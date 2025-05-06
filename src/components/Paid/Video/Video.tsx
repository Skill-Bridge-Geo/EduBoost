import { useEffect, useState } from "react";
import axios from "axios";

import { CourseData } from "../../../types"; // I

export default function Video() {
  const [data, setData] = useState<CourseData | null>(null);

  useEffect(() => {
    axios
      .get("/paid.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.course.title}</h1>
    </div>
  );
}
