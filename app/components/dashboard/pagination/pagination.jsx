import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        <MdKeyboardArrowLeft size={20} />
      </button>
      <button className={styles.button}>
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
