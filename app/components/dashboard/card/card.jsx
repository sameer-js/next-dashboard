import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>
          Total Users
          {/* {item.title} */}
        </span>
        <span className={styles.number}>
          10.55
          {/* {item.number} */}
        </span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than last year
          {/* <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{' '} */}
          {/* {item.change > 0 ? 'more' : 'less'} than previous week */}
        </span>
      </div>
    </div>
  );
};

export default Card;
