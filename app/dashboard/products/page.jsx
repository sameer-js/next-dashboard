import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/products/products.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '@/app/lib/data';
import { deleteProduct } from '@/app/lib/actions';

const ProductsPage = async ({ searchParams }) => {
  const searchQuery = searchParams?.search || '';
  const pageQuery = searchParams?.page || 1;

  const { count, products } = await fetchProducts(searchQuery, pageQuery);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='products' />
        <div className={styles.buttons}>
          <Pagination count={count} />
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
            <td>Listed at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || '/noproduct.jpg'}
                    alt='product'
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td className={styles.description}>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.createdAt.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <form action={deleteProduct}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    <input type='hidden' name='id' value={product.id} />
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
