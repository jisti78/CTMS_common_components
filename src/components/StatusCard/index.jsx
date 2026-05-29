import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const colorVariants = {
  saffron: {
    primary: '#F4C430',
    secondary: '#A16B00',
    bg: '#FFF8E1'
  },
  maroon: {
    primary: '#7A1C1C',
    secondary: '#A94442',
    bg: '#F8EEEE'
  },
  navy: {
    primary: '#0B1F4D',
    secondary: '#304878',
    bg: '#EEF2FA'
  }
};

const sizeVariants = {
  small: {
    cardWidth: 80,
    cardHeight: 52,
    codeSize: '16px',
    labelSize: '10px',
    padding: '8px 12px'
  },
  medium: {
    cardWidth: 100,
    cardHeight: 64,
    codeSize: '22px',
    labelSize: '12px',
    padding: '10px 16px'
  },
  large: {
    cardWidth: 130,
    cardHeight: 84,
    codeSize: '30px',
    labelSize: '16px',
    padding: '14px 20px'
  }
};

const StatusCard = ({
  code = 'A-044',
  label = 'Current',
  color = 'maroon',
  size = 'medium'
}) => {
  const theme = colorVariants[color];
  const dimensions = sizeVariants[size];

  return (
    <Card
      elevation={0}
      sx={{
        width: dimensions.cardWidth,
        height: dimensions.cardHeight,
        borderRadius: '14px',
        backgroundColor: theme.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        transition: '0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
        }
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: dimensions.codeSize,
            fontWeight: 700,
            lineHeight: 1,
            color: theme.primary
          }}
        >
          {code}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: dimensions.labelSize,
            fontWeight: 500,
            color: theme.secondary
          }}
        >
          {label}
        </Typography>
      </Box>
    </Card>
  );
};

export default StatusCard;