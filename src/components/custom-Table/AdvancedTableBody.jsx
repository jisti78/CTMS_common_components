/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {

  TableRow as Tr,

  TableCell as Td,

  Typography as Text,

  Checkbox,

  Radio,

  TableBody as Tbody,

  Button

} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import RemoveIcon from '@mui/icons-material/Remove';
import EllipsisCell from './EllipsisCell';
import MoreActions from '../more-actions';

const AdvancedTableBody = ({
  paginatedData = [],
  columns = [],
  checkedItems = [],
  handleIndividualCheck = () => {},
  handleRadioSelect = () => {},
  radioSelected = () => false,
  rowDisabled = [],
  rowDisabledOptionKey = '',
  rowValues = () => {},
  onRowClick = () => {},
  columnWidths = {},
  expandedRows = [],
  setExpandedRows = () => {}
}) => {
  const toggleRow = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };
  return (
    <Tbody>
      {paginatedData.length === 0 ? (
        <Tr>
          <Td colSpan={columns.length}>
            <Text align="center" py={4}>No Data Found</Text>
          </Td>
        </Tr>
      ) : (
        paginatedData.map((row, index) => (
          <Tr
              key={row.id || `row-${index}`}
              onClick={() => onRowClick({ row, index })}
              hover={!!onRowClick}
              sx={{
                cursor: onRowClick ? 'pointer' : 'default',
                backgroundColor: checkedItems[index]
                  ? '#E8F5E9'
                  : index % 2 === 0
                    ? '#F9FAFB'
                    : '#FFFFFF',

                '& td': {
                  borderBottom: '1px solid #E5E7EB'
                }
              }}
            >
            {columns.map((col, columnIndex) => {
              const value = row[col.field];
              const columnKey = `${index}-${columnIndex}`;

              if (col.type === 'multi-select' || col.type === 'select') {
                const isDisabled = rowDisabled.some(
                  (item) => item[rowDisabledOptionKey] === row[rowDisabledOptionKey]
                ) && checkedItems[index];
                return (
                  <Td
                      key={columnKey}
                      align={col.alignment || 'center'}
                      sx={{
                        py: 1.5,
                        px: 2
                      }}
                    >
                    <Checkbox
                      checked={checkedItems[index]}
                      onChange={(e) => handleIndividualCheck(e, index, row)}
                      disabled={isDisabled}
                      size="small"
                    />
                  </Td>
                );
              }

              if (col.type === 'radio') {
                return (
                  <Td
                  key={columnKey}
                  align={col.alignment || 'center'}
                  sx={{
                    py: 1.5,
                    px: 2
                  }}
                  >
                    <Radio
                      value={index}
                      checked={radioSelected(row)}
                      onClick={() => handleRadioSelect(row)}
                      size="small"
                    />
                  </Td>
                );
              }

              if (col.type === 'actions') {
                return (
                  <Td
                    key={columnKey}
                    align={col.alignment}
                    onClick={(e) => rowValues(e, row)}
                  >
                    <MoreActions actionData={col.actions} rowData={row} />
                  </Td>
                );
              }
              if (col.type === 'isExpandable') {
                return (
                  <Td
                    key={columnKey}
                    align={col.alignment}
                    onClick={(e) => rowValues(e, row)}
                  >
                    <Button
                      variant="text"

                      size="small"

                      onClick={() => toggleRow(row.id)}

                      sx={{

                        minWidth: 'auto',

                        p: 0.5

                      }}
                    >
                      {expandedRows.includes(row.id) ? (
                        <RemoveIcon variant="ghost"  />
                      ) : (
                        <AddIcon color="pink.500"  />
                      )}
                    </Button>
                  </Td>
                );
              }

              return (
                <EllipsisCell
                  columnKey={columnKey}
                  col={col}
                  value={value}
                  row={row}
                  rowIndex={index}
                  columnIndex={columnIndex}
                  maxWidth={columnWidths[col.field] || 160}
                  expandedRows={expandedRows}
                />
              );
            })}
          </Tr>
        ))
      )}
    </Tbody>
  );
};

export default AdvancedTableBody;
