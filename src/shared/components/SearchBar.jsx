import React, { useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';
import propTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams } from 'react-router-dom';
// STYLES

// IMAGES
import searchIcon from 'assets/search-icon.png';

// utilities
import { DEFAULT_LIMIT, NEWEST } from 'utilities/constants';
import styles from '@/styles/components/services-search-field.module.scss';
import { getSorting } from '@/utilities/helpers';

function Searchbar({
  placeholder,
  name,
  setSearchText,
  setBuyerRequests,
  loading,
  searchBuyerRequest,
  searchText,
}) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const job = searchParams.get('job');
  const min = searchParams.get('min');
  const max = searchParams.get('max');
  const sort = searchParams.get('sort');

  const debouncedHandleChange = useDebouncedCallback(
    async e => {
      const body = {
        search: e.target.value,
        offset: 0,
        limit: DEFAULT_LIMIT,
        category,
        subcategory,
        job,
        min,
        max,
      };
      const buyerRequestres = await searchBuyerRequest(body);
      const updatedBuyerRequest = buyerRequestres?.data?.results;
      if (sort === NEWEST) {
        const sortedBuyerRequests = [...updatedBuyerRequest].sort(getSorting('desc', 'created_at'));
        setBuyerRequests(sortedBuyerRequests);
      } else {
        setBuyerRequests(updatedBuyerRequest);
      }
    },
    [500]
  );

  const handleChange = useCallback(e => {
    setSearchText(e.target.value);
    debouncedHandleChange(e);
  });

  return (
    <Box className={styles.formGroup}>
      <input
        name={name}
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
        type="search"
        className={styles.searchField}
      />
      <img className={styles.searchIcon} src={searchIcon} alt="Search-Icon" />
      {loading && <CircularProgress className={styles.loader} size={20} />}
    </Box>
  );
}

Searchbar.propTypes = {
  placeholder: propTypes.string,
  name: propTypes.string,
  setSearchText: propTypes.func,
  setBuyerRequests: propTypes.func,
  searchBuyerRequest: propTypes.func,
  loading: propTypes.bool,
  searchText: propTypes.string,
};

Searchbar.defaultProps = {
  placeholder: '',
  searchText: '',
  name: '',
  loading: false,
  setSearchText: () => {},
  setBuyerRequests: () => {},
  searchBuyerRequest: () => {},
};

export default Searchbar;
