import styles from '@/app/components/dashboard/products/addProduct/addProduct.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' name='title' placeholder='title' required />
        <select name='category' id='category'>
          <option value='general'>Select category</option>
          <option value='kitchen'>Kitchen</option>
          <option value='phone'>Phone</option>
          <option value='computer'>Computer</option>
        </select>
        <input type='number' name='price' placeholder='price' />
        <input type='number' name='stock' placeholder='stock' />
        <input type='text' name='size' placeholder='size' />
        <textarea
          name='description'
          id='description'
          rows={16}
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
