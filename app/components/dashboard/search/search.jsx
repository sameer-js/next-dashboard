'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', 1);

    if (e.target.value) {
      e.target.value.length > 1 && params.set('search', e.target.value);
    } else {
      params.delete('search');
    }
    router.replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder={`Search for ${placeholder}`}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
