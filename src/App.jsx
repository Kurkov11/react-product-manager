import { useRef } from 'react';

import styles from './App.module.css'
import ProductButton from "./components/ProductButton.jsx"
import ProductModal from './components/ProductModal.jsx';

function App() {


  const modalRef = useRef();

  function handleProductBtnClick(){
    modalRef.current.showModal();
  }
  function onCloseModal(){
    modalRef.current.close();
  }
  return (
    <>
      <ProductModal ref={modalRef} onCloseModal={onCloseModal} />
      <main className={styles.main}>
        <aside className={styles.leftMenu}>
          <ul>
            <li>
              <button className={styles.leftMenuBtn}>
                <div className={styles.leftMenuBtnIcon}>
                  <img src="./src/assets/product.svg" alt="" />
                </div>
                <p>Produkty</p>
              </button>
            </li>
          </ul>
        </aside>
        <div className={styles.sidebar}>
          <h3>Produkty</h3>
          <ul className={styles.sidebarList}>
            <li>
              <ProductButton onClick={handleProductBtnClick} />
            </li>
            <li>
              <ProductButton onClick={handleProductBtnClick} />
            </li>

          </ul>
        </div>
      </main>
    </>
  )
}

export default App
