import { useFetchPaidData } from "../customHook";

export default function About() {
  const { data } = useFetchPaidData();
  return <p className='about'>{data?.course.description}</p>;
}
