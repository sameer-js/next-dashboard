// import { cards } from '../lib/data';
import Card from '../components/dashboard/card/card';
import Chart from '../components/dashboard/chart/chart';
import Rightbar from '../components/dashboard/rightbar/rightbar';
import Transactions from '../components/dashboard/transactions/transactions';
import styles from '../components/dashboard/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
