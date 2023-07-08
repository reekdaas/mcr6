import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useState } from "react";
import { useALlContext } from "../../context/appContextProvider";
const values = [1, 2, 3, 4, 5];

export default function Modal({ handleModal, resId }) {
  const { dispatchFunction } = useALlContext();

  const [userReview, setUserReview] = useState({
    rating: 1,
    comment: "",
    revName: "Rittik",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserReview((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    dispatchFunction({
      type: "UPDATE_REVIEW",
      payload: {
        resId: resId,
        review: userReview,
      },
    });
    handleModal(false);
  };

  return createPortal(
    <div className={styles.modalCard}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          {" "}
          <h1>Add Your Review</h1>
          <button
            onClick={() => {
              handleModal(false);
            }}
          >
            close
          </button>
        </div>

        <div className={styles.review}>
          <p>Ratings:</p>
          <select
            type="select"
            name="rating"
            value={userReview?.rating}
            onChange={handleChange}
          >
            {" "}
            {values.map((val) => (
              <option value={val}> {val} </option>
            ))}
          </select>
        </div>
        <div className={styles.review}>
          <label htmlFor="review">Comment:</label>
          <input
            id="review"
            type="text"
            onChange={handleChange}
            name="comment"
          ></input>
        </div>
        <button className={styles.revBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
