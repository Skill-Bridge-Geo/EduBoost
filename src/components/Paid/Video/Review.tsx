import { useFetchPaidData } from "../customHook";

export default function Review({ loadMore }: { loadMore: boolean }) {
  const { data } = useFetchPaidData();
  const reviewsToDsiplay = data?.reviews.slice(0, 4);
  return (
    <div className='review-container'>
      {(loadMore ? data?.reviews : reviewsToDsiplay)?.map(
        (review) => (
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
        )
      )}
    </div>
  );
}
