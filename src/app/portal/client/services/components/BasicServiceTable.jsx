/* eslint-disable no-unused-vars */

'use client';

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { ArrowForwardIos } from '@mui/icons-material';
import withTable from '@/HOC/withTable';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { useGetServiceQuery } from '@/services/private/services';
import TableLoaders from '@/app/common/loaders/TableLoaders';
import EmptyRecordTable from '@/app/common/components/EmptyRecordTable';
import { basicServiceTableHeadCells, serviceTableHeadCells } from '../utilities/data';
import BasicServiceTableHead from './BasicServiceTableHead';

function BasicServiceTable({
  pagination,
  sorting,
  onPageChange,
  onRowsPerPageChange,
  onRequestSort,
  isSelected,
  onSelectAllRows,
  onSelectRow,
  selected,
  setSelected,
}) {
  const router = useRouter();
  const { isSupplier } = useGetUserRoles();
  const { order, orderBy } = sorting;
  const { rowsPerPage, page } = pagination;
  const { data, isLoading, isFetching } = useGetServiceQuery({
    offset: page * rowsPerPage,
    page: page + 1,
    limit: rowsPerPage,
  });

  const loading = isLoading || isFetching;

  return (
    <Paper sx={{ borderRadius: '10px' }} className=" p-3">
      <TableContainer>
        <Table>
          <BasicServiceTableHead
            headings={basicServiceTableHeadCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={onRequestSort}
            rowCount={data?.count || 0}
            numSelected={selected?.length}
            onSelectAllRows={e => onSelectAllRows(e, data?.results)}
          />

          {loading && <TableLoaders />}

          {!loading && data?.length > 0 && (
            <TableBody>
              {data?.map(item => {
                const isItemSelected = isSelected(item?.id);

                return (
                  <TableRow
                    hover
                    selected={isItemSelected}
                    className=" cursor-pointer"
                    key={item?.id}
                  >
                    <TableCell>
                      <Typography variant="body1">{item?.name}</Typography>
                    </TableCell>

                    <TableCell>
                      <IconButton>
                        <ArrowForwardIos />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
          {!loading && data?.length === 0 && <EmptyRecordTable colSpan={7} />}
        </Table>

        <TablePagination
          component={Box}
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[10, 20, 30]}
          onRowsPerPageChange={onRowsPerPageChange}
          onPageChange={onPageChange}
        />
      </TableContainer>
    </Paper>
  );
}

BasicServiceTable.propTypes = {
  pagination: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  onSelectAllRows: PropTypes.func.isRequired,
  onSelectRow: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default withTable(BasicServiceTable, { sortBy: 'id' });
