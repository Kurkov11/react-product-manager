import styles from "./ProductButton.module.css";

export default function ProductButton({onClick}){

    return (
    <button className={styles.sidebarProduct} onClick={onClick}>
        <div className={styles.imgContainer}>
            <img src="./src/assets/pedigree.jpg" alt="" />
        </div>
        <div className={styles.textContainer}>
            <p>PEDIGREE Markies 150g</p>
            <div className={styles.sidebarProductData}>
            <p><b>SKU</b> 0000010270</p>
            <div className={styles.sidebarProductDataDivider}></div>
            <p><b>EAN</b> 9003579302552</p>
            </div>
        </div>
    </button>
)
}