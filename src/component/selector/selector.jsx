import { useALlContext } from "../../context/appContextProvider";
import styles from "./selector.module.css";

export default function SelectorCard({ data }) {
  const { dispatchFunction } = useALlContext();

  // /console.log(data);

  const handleClick = () => {
    console.log(data?.id);
    dispatchFunction({ type: "FILTER_RESTURANT_LIST", payload: data?.id });
  };

  return (
    <div className={styles.selectorCard}>
      <button onClick={handleClick}>{data?.name}</button>
    </div>
  );
}
