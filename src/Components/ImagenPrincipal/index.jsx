import React from 'react'

import styles from './ImagenPrincipal.module.css'

function ImagenPrincipal() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item__left}>
          <h1>Nike Air Max</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <button>Shop now</button>
        </div>
        <div>
          <h1>Imagen</h1>
        </div>
      </div>
    </section>
  )
}

export default ImagenPrincipal;