/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

import React, { useRef, useEffect, useState } from 'react';

import {
  TableCell,
  Tooltip,
  Box,
  List,
  ListItem,
  Typography
} from '@mui/material';

const EllipsisCell = ({
  value,
  row,
  columnIndex,
  rowIndex,
  col,
  expandedRows,
  maxWidth = 200
}) => {
  const boxRef = useRef(null);

  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const box = boxRef.current;

    if (box) {
      setIsOverflowed(box.scrollWidth > box.clientWidth);
    }
  }, [value, maxWidth]);

  const isExpanded = expandedRows.includes(row.id);

  const items = Array.isArray(value) ? value : [];

  const renderExpandableList = () => (
    <List
      dense
      sx={{
        pl: 2,
        py: 0,
        width: '100%'
      }}
    >
      {items.map((item, i) => {
        const shouldShow = i === 0 || isExpanded;

        if (!shouldShow) return null;

        return (
          <ListItem
            key={i}
            sx={{
              display: 'list-item',
              listStyleType: 'disc',
              py: 0.25,
              px: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            <Typography variant="body2">
              {item}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );

  const content = col?.isExpandable
    ? renderExpandableList()
    : col?.cell
      ? col.cell({
        field: value,
        row,
        rowIndex,
        columnIndex
      })
      : value;

  const columnKey =
    col?.id || col?.accessor || columnIndex;

  const ellipsisStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
  };

  return (
    <TableCell
      key={columnKey}
      align={col.alignment || 'left'}
      sx={{
        width: `${maxWidth}px`,
      minWidth: `${maxWidth}px`,
      maxWidth: `${maxWidth}px`,
        py: 1.5,
        px: 2,
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      {col?.type === 'isExpandable' ? (
        content
      ) : isOverflowed ? (
        <Tooltip
          title={String(value || '')}
          arrow
          placement="top"
        >
          <Box
            ref={boxRef}
            sx={ellipsisStyles}
          >
            {content}
          </Box>
        </Tooltip>
      ) : (
        <Box
          ref={boxRef}
          sx={ellipsisStyles}
        >
          {content}
        </Box>
      )}
    </TableCell>
  );
};

export default EllipsisCell;