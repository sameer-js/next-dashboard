import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/products/products.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='products' />
        <div className={styles.buttons}>
          <Pagination />
          <Link href='/dashboard/products/add'>
            <button className={styles.addButton}>Add new</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src='/noproduct.jpg'
                  alt='product'
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iPhone 14 Pro
              </div>
            </td>
            <td className={styles.description}>
              Apple iPhone 14 Pro · 206g, 7.9mm thickness · iOS 16
            </td>
            <td>$900</td>
            <td>12.05.2024</td>
            <td>72</td>
            <td>
              <Link href='/dashboard/products/testPage'>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
