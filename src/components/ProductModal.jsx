import styles from "./ProductModal.module.css";
import closeImg from "../assets/close.svg";
import pedigreeImg from "../assets/pedigree.jpg";
import calcImg from "../assets/calc.svg";

export default function ProductModal({ref, onCloseModal}) {

    return (
    <dialog ref={ref} className={styles.modal}>
        <div className={styles.topBar}>
            <p className={styles.topBarTitle}>PEDIGREE Markies 150g</p>
            <button onClick={onCloseModal} className={styles.closeBtn}>
                <img src={closeImg} alt="" />
            </button>
        </div>
        <div className={styles.mainContent}>
            <img src={pedigreeImg} alt="" className={styles.productImg} />
            <label className={styles.input}>
                <span className={styles.inputLabel}>Nazwa Produktu</span>
                <input type="text" value="PEDIGREE Markies 150g"/>
            </label>
            <div className={styles.horizontalInputsContainer}>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>EAN</span>
                    <input type="text" value="9003579302552"/>
                </label>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>SKU</span>
                    <input type="text" value="0000010270"/>
                </label>
            </div>
            <div className={styles.horizontalInputsContainer}>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Waga (kg)</span>
                    <input type="text" inputmode="decimal" value="0.150"/>
                </label>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Wysokość (cm)</span>
                    <input type="text" value="10"/>
                </label>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Szerokość (cm)</span>
                    <input type="text" value="10"/>
                </label>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Długość (cm)</span>
                    <input type="text" value="10"/>
                </label>
            </div>
            <div className={`${styles.horizontalInputsContainer} ${styles.inputContainerHalfWidth}`}>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Dodatkowy Koszt 1</span>
                    <input type="text" inputmode="decimal" value="20"/>
                </label>
                <label className={styles.input}>
                    <span className={styles.inputLabel}>Dodatkowy Koszt 2</span>
                    <input type="text" inputmode="decimal" value="0"/>
                </label>
            </div>

            <label className={styles.wagaGabarytowaInput}>
                <span className={styles.inputLabel}>Waga Gabarytowa</span>
                <button>20</button>
                <img src={calcImg} alt="" />
            </label>
        </div>
    </dialog>
    )
}