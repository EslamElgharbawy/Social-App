import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const Footer = ({ fixed = false }: { fixed?: boolean }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 42,
        position: fixed ? 'fixed' : 'relative',
        bottom: fixed ? 130 : 'auto',
        color: '#838B98',
        fontSize: 12,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        ml: 3
      }}
    >
      {/* Top text */}
      <Typography
        sx={{
          position: 'absolute',
          top: 0,
          left: 14,
        }}
      >
        © 2023 DevCut. All rights reserved.
      </Typography>

      {/* Navigation links */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: 'absolute',
          top: 27,
          left: 20,
        }}
      >
        <Typography>About</Typography>
        <Typography>Help</Typography>
        <Typography>Privacy & Terms</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
