import React from 'react';
import Link from 'next/link';
import styles from '../styles/Products.module.css';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={styles.productCard}>
          <img src={urlFor(image && image[0])} width={250} height={250} className={styles.productImage} />
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>£{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
