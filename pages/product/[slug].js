import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from '../../styles/Product.module.css';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className={styles.productDetailContainer}>
        <div>
          <div>
            <img src={urlFor(image && image[index])} className={styles.productDetailImage} />
          </div>
          <div className={styles.smallImagesContainer}>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? `${styles.smallImage} ${styles.selectedImage}` : styles.smallImage}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.productDetailDesc}>
          <h1>{name}</h1>

          <h4>Details: </h4>
          <p>{details}</p>
          <p className={`${styles.productDetailDesc} ${styles.price}`}>£{price}</p>
          <div className={`${styles.productDetailDesc} ${styles.quantity}`}>
            <h3>Quantity:</h3>
            <p className={styles.quantityDesc}>
              <span className='minus' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={styles.buttons}>
            <button type='button' className={styles.addToCart} onClick={() => onAdd(product, qty)}>
              Add to Cart
            </button>
            <button type='button' className={styles.buyNow} onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.maylikeProductsWrapper}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
