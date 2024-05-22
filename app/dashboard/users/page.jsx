import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/users/users.module.css';
import { deleteUser } from '@/app/lib/actions';
import { fetchUsers } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = async ({ searchParams }) => {
  const searchQuery = searchParams?.search || '';
  const pageQuery = searchParams?.page || 1;

  const { count, users } = await fetchUsers(searchQuery, pageQuery);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='users' />
        <div className={styles.buttons}>
          <Pagination count={count} />
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt='user'
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.admin ? 'Admin' : 'Client'}</td>
              <td>{user.active ? 'Active' : 'Inactive'}</td>
              <td>
                <form action={deleteUser}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    <input type='hidden' name='id' value={user.id} />
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

export default UsersPage;
