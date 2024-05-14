import styles from '@/app/components/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noproduct.jpg' alt='' fill />
        </div>
        Apple iPhone 14 Pro
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type='hidden' name='id' value='id' />
          <label>Title</label>
          <input type='text' name='title' placeholder='Title' />
          <label>Price</label>
          <input type='number' name='price' placeholder='Price' />
          <label>Stock</label>
          <input type='number' name='stock' placeholder='Stock' />
          <label>Color</label>
          <input type='text' name='color' placeholder='Color' />
          <label>Size</label>
          <input type='text' name='size' placeholder='Size' />
          <label>Category</label>
          <select name='category' id='category'>
            <option value='kitchen'>Kitchen</option>
            <option value='phone'>Phone</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder=''></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
