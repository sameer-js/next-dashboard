'use client';

import styles from './pagination.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);

  const page = searchParams.get('page') || 1;
  const itemsPerPage = 4;
  const hasPrev = itemsPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemsPerPage * (parseInt(page) - 1) + itemsPerPage < count;

  const handlePageChange = (type) => {
    type === 'prev' && params.set('page', parseInt(page) - 1);
    type === 'next' && params.set('page', parseInt(page) + 1);

    router.replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePageChange('prev')}
      >
        <MdKeyboardArrowLeft size={20} />
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePageChange('next')}
      >
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
