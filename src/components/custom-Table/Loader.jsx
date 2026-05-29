import React from 'react';
import {
  Modal,
  Box,
  CircularProgress
} from '@mui/material';

const Loader = ({ isLoading = false }) => {
  return (
    <Modal open={isLoading}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="rgba(0,0,0,0.3)"
      >
        <CircularProgress />
      </Box>
    </Modal>
  );
};

export default Loader;