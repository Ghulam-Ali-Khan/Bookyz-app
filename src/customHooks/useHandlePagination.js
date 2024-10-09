import { useEffect } from 'react';

function useHandlePagination(query, page, rowsPerPage, searchFilterParams, customFilters) {
  const [fetchData, { data = [], isLoading, isFetching }] = query();

  // EFFECTS
  useEffect(() => {
    const getData = async () => {
      await fetchData({
        offset: page * rowsPerPage,
        page: page + 1,
        limit: rowsPerPage,
        ...searchFilterParams,
        ...customFilters,
      });
    };

    getData();
  }, [page, rowsPerPage, searchFilterParams]);
  return {
    data,
    loading: isLoading || isFetching,
  };
}

export default useHandlePagination;
