import styles from '@/app/components/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';
import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';

const UserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || '/noavatar.png'}
            alt='user'
            width={300}
            height={300}
            className={styles.userImage}
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type='hidden' name='id' value={user.id} />
          <label>Username</label>
          <input type='text' name='username' placeholder={user.username} />
          <label>Email</label>
          <input type='email' name='email' placeholder={user.email} />
          <label>Password</label>
          <input type='password' name='password' />
          <label>Phone</label>
          <input type='text' name='phone' placeholder={user.phone} />
          <label>Address</label>
          <textarea type='text' name='address' placeholder={user.address} />
          <label>Is Admin?</label>
          <select name='admin' id='admin'>
            <option value={true} selected={user.admin}>
              Yes
            </option>
            <option value={false} selected={!user.admin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name='active' id='active'>
            <option value={true} selected={user.active}>
              Yes
            </option>
            <option value={false} selected={!user.active}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
