export const MovieReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{`Author: ${review.author}`}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
