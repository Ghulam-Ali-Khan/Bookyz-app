/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import React, { useEffect, useReducer, useState } from 'react';
import { paginationReducer, sortingReducer } from '@/reducerActions/tableReducers';

const withTable = (Component, configuration = {}) => {
  const enhancedFunction = props => {
    const { sortBy, hasOwnSelection = false } = configuration;

    // STATE HOOKS
    const [selected, setSelected] = useState([]);
    const [pagination, setPagination] = useReducer(paginationReducer, { rowsPerPage: 10, page: 0 });
    const [sorting, setSorting] = useReducer(sortingReducer, { order: 'asc', orderBy: 'id' });
    const { order, orderBy } = sorting;

    useEffect(() => {
      if (sortBy) {
        setSorting({ type: 'orderBy', payload: sortBy });
      }
    }, []);

    // HANDLERS
    const handleSelectRow = selectedRow => {
      const selectedId = selectedRow?.id;

      const selectedIndex = selected?.findIndex(item => item?.id === selectedId);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, selectedRow);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      setSelected(newSelected);
    };

    const handlePageChange = (e, newPage) => {
      setPagination({ type: 'page', payload: newPage });
    };

    const handleRowsPerPageChange = e => {
      setPagination({ type: 'rowsPerPage', payload: e?.target?.value });
    };

    const handleRequestSort = property => {
      const isAsc = orderBy === property && order === 'asc';

      setSorting({ type: 'sort', payload: { order: isAsc ? 'desc' : 'asc', orderBy: property } });
    };

    const handleSelectAllRows = (e, data = []) => {
      if (e?.target?.checked && data) {
        setSelected(data);
        return;
      }

      setSelected([]);
    };

    const isSelected = id => selected?.findIndex(item => item?.id === id) !== -1;

    return (
      <Component
        selected={hasOwnSelection ? undefined : selected}
        setSelected={hasOwnSelection ? undefined : setSelected}
        pagination={pagination}
        setPagination={setPagination}
        sorting={sorting}
        setSorting={setSorting}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onRequestSort={handleRequestSort}
        onSelectRow={hasOwnSelection ? undefined : handleSelectRow}
        isSelected={hasOwnSelection ? undefined : isSelected}
        onSelectAllRows={hasOwnSelection ? undefined : handleSelectAllRows}
        {...props}
      />
    );
  };

  return enhancedFunction;
};

export default withTable;
