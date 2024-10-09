import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from '@mui/icons-material';
import styles from '@/styles/containers/layout/navbar.module.scss';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const search = searchParams.get('search');

  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (path === '/search') {
      setSearchText(search);
    } else {
      setSearchText('');
    }
  }, [search]);

  const handleChange = useCallback(event => {
    setSearchText(event.target.value);
  }, []);

  const handleKeyDown = useCallback(event => {
    setSearchText(event.target.value);
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        router.push(`/search/?search=${event.target.value}`);
        setSearchText('');
      }
    }
  }, []);

  return (
    <Box className={styles.searchFieldBox} id="search-input">
      <Box className={`${styles.inputSearchIcon} flex justify-center items-center`} ref={searchInputRef}>
        <Search />
      </Box>

      <input
        value={searchText}
        placeholder="Search Services..."
        onChange={handleChange}
        onKeyDown={event => handleKeyDown(event)}
        type="text"
        className={styles.customSearchField}
      />
    </Box>
  );
}

export default SearchInput;
