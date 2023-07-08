import ResturantContainer from "../../component/resturant/resturant";
import SelectorCard from "../../component/selector/selector";
import { useALlContext } from "../../context/appContextProvider";
import styles from "./homePage.module.css";

export default function HomePage() {
  const {
    resturantData: { cusineDataArray, resturantList, filteredResturant },
  } = useALlContext();
  // console.log(cusineDataArray);

  return (
    <div className={styles.homePage}>
      <h1>Food Ordering App</h1>
      <div className={styles.homeSelector}>
        <h2>Select Your Cusinie</h2>
        <div className={styles.navbar}>
          {" "}
          {cusineDataArray.map((data) => (
            <SelectorCard data={data} key={data?.id} />
          ))}
        </div>
      </div>
      <div className={styles.resturantList}>
        {filteredResturant.length === 0 ? (
          <h1>Select Resturant</h1>
        ) : (
          filteredResturant?.map((data) => (
            <ResturantContainer data={data} key={data?.id} />
          ))
        )}
      </div>
    </div>
  );
}
