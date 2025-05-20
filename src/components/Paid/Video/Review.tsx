import { useFetchPaidData } from "../customHook";

export default function Review() {
  const { data } = useFetchPaidData();
  return (
    <div className='review-container'>
      {data?.reviews.map((review) => (
        <div className='avatar-wrapper'>
          <img
            className='avatar-icon'
            src={review.avatar}
            alt='avatar icon'
          />
          <div className='avatar-details'>
            <h2 className='avatar-name'>{review.name}</h2>{" "}
            <span className='avatar-time'>{review.time}</span>
            <p className='avatar-comment'>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
