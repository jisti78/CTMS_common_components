/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import React from 'react';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Box,
  InputBase,
  IconButton
} from '@mui/material';


const AdvancedTableHead = ({
  tableSize,
  columns,
  columnWidths,
  checkedItems,
  handleAllCheck,
  sortConfig,
  handleSort,
  filterValues,
  setFilterValues,
  onFilterInput,
  headerRefs
}) => {
  return (

      <TableHead>
        <TableRow>
          {columns.map((col) => {
            const isSortedAsc =
              sortConfig.field === col.field &&
              sortConfig.direction === 'asc';

            const isSortedDesc =
              sortConfig.field === col.field &&
              sortConfig.direction === 'desc';

            return (
              <TableCell
                key={col.field}
                ref={(el) => (headerRefs.current[col.field] = el)}
                align={col.alignment || 'center'}
                sx={{
                  backgroundColor: '#edeef0',
                  color: '#fff',
                  px: 2,
                  py: 1.5,
                  borderBottom: 'none',

                  maxWidth: columnWidths[col.field] || col.width ,
                  '&:first-of-type': {
                    borderTopLeftRadius: 10
                  },
                  '&:last-child': {
                    borderTopRightRadius: 10
                  }
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={1}
                  width="100%"
                >
                  {/* Header */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={
                      col.alignment === 'right'
                        ? 'flex-end'
                        : col.alignment === 'left'
                          ? 'flex-start'
                          : 'center'
                    }
                    gap={0.5}
                    width="100%"
                  >
                    {col.type === 'multi-select' ? (
                      <Checkbox
                        checked={
                          checkedItems.length > 0 &&
                          checkedItems.every(Boolean)
                        }
                        indeterminate={
                          checkedItems.some(Boolean) &&
                          !checkedItems.every(Boolean)
                        }
                        onChange={handleAllCheck}
                        size="small"
                        sx={{
                          color: '#404040',
                          p: 0.5,
                          '&.Mui-checked': {
                            color: '#FFD54F'
                          },
                          '&.MuiCheckbox-indeterminate': {
                            color: '#FFD54F'
                          }
                        }}
                      />
                    ) : (
                      <Typography
                        variant="subtitle2"
                        noWrap
                        sx={{
                          fontWeight: 400,
                          color: '#404040',

                        }}
                      >
                        {col.header}
                      </Typography>
                    )}

                    {/* Sort */}
                    {/* {col.sort && (
                      <Box
                        onClick={() => handleSort(col.field)}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          cursor: 'pointer',
                          ml: 0.5
                        }}
                      >
                        <KeyboardArrowUpRoundedIcon
                          sx={{
                            fontSize: 16,
                            color: isSortedAsc
                              ? '#FFD54F'
                              : 'rgba(255,255,255,0.7)',
                            mb: -0.8
                          }}
                        />

                        <KeyboardArrowDownRoundedIcon
                          sx={{
                            fontSize: 16,
                            color: isSortedDesc
                              ? '#FFD54F'
                              : 'rgba(255,255,255,0.7)'
                          }}
                        />
                      </Box>
                    )} */}
                  </Box>

                  {/* Filter */}
                  <Box width="100%">
                    {!filterValues[col.field]?.visible ? (
                      <Box display="flex" justifyContent="center">
                        <IconButton
                          size="small"
                          onClick={() =>
                            setFilterValues((prev) => ({
                              ...prev,
                              [col.field]: {
                                type: col.filterType || 'text',
                                value: '',
                                visible: true
                              }
                            }))
                          }
                          sx={{
                            color: 'rgba(255,255,255,0.85)',
                            p: 0.5,
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.12)'
                            }
                          }}
                        >
                          {/* {col.filterType === 'date' ? (
                            <CalendarTodayOutlinedIcon fontSize="small" />
                          ) : col.filterType === 'select' ? (
                            <KeyboardArrowDownRoundedIcon fontSize="small" />
                          ) : (
                            <SearchRoundedIcon fontSize="small" />
                          )} */}
                        </IconButton>
                      </Box>
                    ) : (
                      <>
                        {/* Text Filter */}
                        {(!col.filterType ||
                          col.filterType === 'text') && (
                          <InputBase
                            fullWidth
                            value={
                              filterValues[col.field]?.value || ''
                            }
                            onChange={(e) =>
                              onFilterInput(
                                col.field,
                                'text',
                                e.target.value
                              )
                            }
                            placeholder="Search..."
                            sx={{
                              px: 1,
                              py: 0.5,
                              fontSize: 13,
                              color: '#404040',
                              borderRadius: 1,
                              backgroundColor:
                                'rgba(255,255,255,0.12)',
                              border:
                                '1px solid rgba(255,255,255,0.18)',

                              '& input::placeholder': {
                                color: 'rgba(255,255,255,0.7)',
                                opacity: 1
                              },

                              '&:hover': {
                                backgroundColor:
                                  'rgba(255,255,255,0.16)'
                              },

                              '&.Mui-focused': {
                                border:
                                  '1px solid rgba(255,255,255,0.35)'
                              }
                            }}
                          />
                        )}

                        {/* Date Filter */}
                        {col.filterType === 'date' && (
                          <InputBase
                            type="date"
                            fullWidth
                            value={
                              filterValues[col.field]?.value || ''
                            }
                            onChange={(e) =>
                              onFilterInput(
                                col.field,
                                'date',
                                e.target.value
                              )
                            }
                            sx={{
                              px: 1,
                              py: 0.5,
                              fontSize: 13,
                              color: '#fff',
                              borderRadius: 1,
                              backgroundColor:
                                'rgba(255,255,255,0.12)',
                              border:
                                '1px solid rgba(255,255,255,0.18)',

                              '& input': {
                                color: '#fff'
                              },

                              '&::-webkit-calendar-picker-indicator': {
                                filter: 'invert(1)'
                              }
                            }}
                          />
                        )}

                        {/* Select Filter */}
                        {col.filterType === 'select' && (
                          <InputBase
                            select
                            fullWidth
                            value={
                              filterValues[col.field]?.value || ''
                            }
                            onChange={(e) =>
                              onFilterInput(
                                col.field,
                                'select',
                                e.target.value
                              )
                            }
                            sx={{
                              px: 1,
                              py: 0.5,
                              fontSize: 13,
                              color: '#fff',
                              borderRadius: 1,
                              backgroundColor:
                                'rgba(255,255,255,0.12)',
                              border:
                                '1px solid rgba(255,255,255,0.18)'
                            }}
                          />
                        )}
                      </>
                    )}
                  </Box>
                </Box>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>

  );
};

export default AdvancedTableHead;