import styles from '@/app/components/dashboard/users/addUser/addUser.module.css';
import { addUser } from '@/app/lib/actions';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type='text' name='username' placeholder='username' required />
        <input type='email' name='email' placeholder='email' required />
        <input
          type='password'
          name='password'
          placeholder='password'
          required
        />
        <input type='number' name='phone' placeholder='phone' />
        <select name='admin' id='admin'>
          <option value={false}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name='active' id='active'>
          <option value={true}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name='address'
          id='address'
          rows={12}
          placeholder='Address'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
