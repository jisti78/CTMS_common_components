import React from 'react';
import {
  Card,
  Typography,
  Box,
  Chip
} from '@mui/material';

const colorVariants = {
  saffron: {
    bg: 'linear-gradient(135deg, #F4B942 0%, #D98C00 100%)',
    text: '#FFFFFF',
    chipBg: '#FFF3D6',
    chipText: '#8A4B00',
    divider: 'rgba(255,255,255,0.25)'
  },

  maroon: {
    bg: 'linear-gradient(135deg, #8B0E11 0%, #5C0002 100%)',
    text: '#FFFFFF',
    chipBg: '#FFE0B2',
    chipText: '#B45309',
    divider: 'rgba(255,255,255,0.2)'
  },

  cream: {
    bg: 'linear-gradient(135deg, #FFF8EE 0%, #F5E6D3 100%)',
    text: '#3B2F2F',
    chipBg: '#F4D5BD',
    chipText: '#7A1C1C',
    divider: 'rgba(0,0,0,0.1)'
  },

  navy: {
    bg: 'linear-gradient(135deg, #1B2950 0%, #0E162B 100%)',
    text: '#FFFFFF',
    chipBg: '#D6E4FF',
    chipText: '#1B2950',
    divider: 'rgba(255,255,255,0.18)'
  },

  teal: {
    bg: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)',
    text: '#FFFFFF',
    chipBg: '#D1FAE5',
    chipText: '#065F46',
    divider: 'rgba(255,255,255,0.2)'
  }
};

const sizeVariants = {
  small: {
    width: 220,
    height: 180,
    tokenSize: '3rem',
    titleSize: '0.7rem'
  },

  medium: {
    width: 280,
    height: 220,
    tokenSize: '4.2rem',
    titleSize: '0.8rem'
  },

  large: {
    width: 340,
    height: 260,
    tokenSize: '5rem',
    titleSize: '0.9rem'
  }
};

const TokenCard = ({
  token = 'A-045',
  status = 'Waiting',
  waitingCount = 12,
  estimatedTime = '18 min',
  variant = 'maroon',
  size = 'medium'
}) => {
  const colors = colorVariants[variant];
  const dimensions = sizeVariants[size];

  return (
    <Card
      elevation={4}
      sx={{
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: '24px',
        background: colors.bg,
        color: colors.text,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        transition: '0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 30px rgba(0,0,0,0.18)'
        }
      }}
    >
      {/* TOP */}
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: dimensions.titleSize,
            fontWeight: 600,
            letterSpacing: '2px',
            opacity: 0.85
          }}
        >
          YOUR TOKEN NUMBER
        </Typography>

        <Typography
          sx={{
            fontSize: dimensions.tokenSize,
            fontWeight: 900,
            lineHeight: 1.1,
            mt: 1
          }}
        >
          {token}
        </Typography>

        <Chip
          label={status}
          size="small"
          sx={{
            mt: 1.5,
            background: colors.chipBg,
            color: colors.chipText,
            fontWeight: 700,
            borderRadius: '10px'
          }}
        />
      </Box>

      {/* DIVIDER */}
      <Box
        sx={{
          width: '100%',
          height: '1px',
          background: colors.divider,
          my: 2
        }}
      />

      {/* BOTTOM */}
      <Box
        sx={{ display: 'flex', justifyContent:'space-between' }}

        alignItems="center"
      >
        <Box
         textAlign="center">
          <Typography
            sx={{
              fontSize: '0.75rem',
              opacity: 0.8
            }}
          >
            Ahead of you
          </Typography>

          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: 800
            }}
          >
            {waitingCount}
          </Typography>
        </Box>

        <Box  textAlign="center">
          <Typography
            sx={{
              fontSize: '0.75rem',
              opacity: 0.8
            }}
          >
            Est. Wait
          </Typography>

          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: 800
            }}
          >
            ~{estimatedTime}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TokenCard;