import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='users' />
        <div className={styles.buttons}>
          <Pagination />
          <Link href='/dashboard/users/add'>
            <button className={styles.addButton}>Add new</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@email.com</td>
            <td>12.05.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <Link href='/dashboard/users/testPage'>
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

export default UsersPage;
