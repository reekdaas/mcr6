import { useNavigate } from "react-router-dom";
import MenuCard from "./menuCard";
import styles from "./resturant.module.css";

export default function ResturantContainer({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.resturantPage}
      onClick={() => {
        navigate(`/${data?.id}`);
      }}
    >
      <h1>Dishes By {data?.name}</h1>
      <div className={styles.menuContainer}>
        {data.menu.map((menuItem, i) => (
          <MenuCard menuData={menuItem} key={i} name={data.name} />
        ))}
      </div>
    </div>
  );
}
