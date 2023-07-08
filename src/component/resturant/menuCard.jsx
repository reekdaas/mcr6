import styles from "./menuCard.module.css";

export default function MenuCard({ menuData, name }) {
  return (
    <div className={styles.menuCard}>
      <img
        src={menuData?.imgSrc}
        alt={menuData?.name}
        className={styles.menuImage}
      />
      <div className={styles.menuDesc}>
        <h3>{menuData?.name}</h3>
        <p>
          Rs {menuData?.price} for {menuData?.qty}{" "}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
}
