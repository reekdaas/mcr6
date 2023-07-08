import styles from "./review.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewCard({ review }) {
  // console.log(review);
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardFirstCol}>
        <div className={styles.reviwInfo}>
          <img src={review?.pp} alt={review?.revName} />
          <p>{review?.revName}</p>
        </div>
        <p>{review?.comment}</p>
      </div>
      <div className={styles.reviewCardSecondCol}>
        <p>
          {review?.rating}
          <span>{<AiFillStar />}</span>
        </p>
      </div>
    </div>
  );
}
