import { useParams } from "react-router-dom";
import styles from "./res.module.css";
import { useALlContext } from "../../context/appContextProvider";
import ReviewCard from "../../component/review/review";
import { useState } from "react";
import Modal from "../../component/modal/modal";

export default function IndividualResturant() {
  const [showModal, setShowModal] = useState(false);

  const {
    resturantData: { resturantList, cusineDataArray },
  } = useALlContext();
  const { id } = useParams();
  // console.log(id);
  // console.log(resturantList);
  const resturant = resturantList.find((data) => data?.id === +id);
  const avgRating = resturant?.ratings.reduce(
    (acc, { rating }) => acc + rating,
    0
  );
  // console.log(resturant);
  // console.log(avgRating);

  return (
    <div className={styles.resPage}>
      <div className={styles.resHeader}>
        <div className={styles.resInfo}>
          <h1>{resturant?.name}</h1>
          <p>
            {resturant?.menu?.map((res, i) => (
              <span key={i}>{res.name}</span>
            ))}
          </p>
          <p>{resturant?.address}</p>
          <p>Average Rating: {avgRating}</p>
        </div>
        <button
          onClick={() => {
            setShowModal((prev) => !prev);
          }}
        >
          Add Review
        </button>
      </div>
      <div className={styles.reviewComponent}>
        <h1>Review</h1>
        <div>
          {resturant.ratings.map((reviewData) => (
            <ReviewCard review={reviewData} />
          ))}
        </div>
      </div>
      {showModal && <Modal handleModal={setShowModal} resId={resturant?.id} />}
    </div>
  );
}
