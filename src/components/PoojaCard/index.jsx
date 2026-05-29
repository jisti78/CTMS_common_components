import React from 'react';
import {
  Card,
  Box,
  Typography,
  Chip,
  Button,
  Avatar,
  Stack,
  Divider
} from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventSeatIcon from '@mui/icons-material/EventSeat';

const colorVariants = {
  saffron: {
    primary: '#F4B942',
    secondary: '#FFF8EE',
    accent: '#7A1C1C'
  },
  maroon: {
    primary: '#7A1C1C',
    secondary: '#FFF5F5',
    accent: '#5A0E16'
  },
  navy: {
    primary: '#1B2950',
    secondary: '#F4F7FC',
    accent: '#0E1A36'
  }
};

const sizeVariants = {
  small: {
    cardWidth: 340,
    image: 64,
    title: '1.2rem',
    subtitle: '0.8rem',
    padding: 1.5
  },
  medium: {
    cardWidth: 460,
    image: 78,
    title: '1.5rem',
    subtitle: '0.95rem',
    padding: 2
  },
  large: {
    cardWidth: 620,
    image: 90,
    title: '1.8rem',
    subtitle: '1rem',
    padding: 2.5
  }
};

const PoojaCard = ({
  title = 'Abhishekam',
  subtitle = 'അഭിഷേകം',
  duration = '30 min',
  priest = 'Shiva',
  slots = 8,
  amount = 500,
  image = 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png',
  variant = 'maroon',
  size = 'medium',
  badge = 'Popular',
  buttonText = 'Book Now',
  showButton = true
}) => {
  const colors = colorVariants[variant];
  const dimensions = sizeVariants[size];

  return (
    <Card
    elevation={3}
    sx={{
      width: '100%',
      maxWidth: 700,
      borderRadius: '24px',
      overflow: 'hidden',
      background: '#fff',
      p: 2
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexWrap="wrap"
    >
      {/* LEFT SECTION */}
      <Box display="flex" alignItems="center" gap={2} flex={1}>
        {/* IMAGE */}
        <Avatar
          src={image}
          variant="rounded"
          sx={{
            width: 90,
            height: 90,
            borderRadius: '20px'
          }}
        />

        {/* CONTENT */}
        <Box>
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Typography
              fontWeight={700}
              sx={{
                fontSize: '2rem'
              }}
            >
              {title}
            </Typography>

            <Chip
              label={badge}
              size="small"
              sx={{
                background: '#F6E3B4',
                color: '#6B4A00',
                fontWeight: 700
              }}
            />
          </Box>

          <Typography
            sx={{
              color: '#555',
              fontSize: '1rem',
              mt: 0.3
            }}
          >
            {subtitle}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={0.7}
            mt={1}
          >
            <AccessTimeIcon
              sx={{
                fontSize: 18,
                color: '#777'
              }}
            />

            <Typography color="#444">
              {duration} • {priest}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SECTION */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        gap={1.5}
      >
        <Typography
          sx={{
            fontSize: '2.3rem',
            fontWeight: 800,
            color: '#1B2950'
          }}
        >
          ₹{amount}
        </Typography>

        <Chip
          icon={<EventSeatIcon />}
          label={`${slots} slots`}
          sx={{
            background: '#DDF7E3',
            color: '#166534',
            fontWeight: 700
          }}
        />

        {showButton && (
          <Button
            variant="contained"

            sx={{
              background: '#F4D5BD',
              color: '#5A1623',
              borderRadius: '16px',
              px: 3,
              py: 1,
              ml:2,
              textTransform: 'none',
              fontWeight: 700,
              boxShadow: 'none',
              '&:hover': {
                background: '#EAC4A5',
                boxShadow: 'none'
              }
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  </Card>
  );
};

export default PoojaCard;