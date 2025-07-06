import React from 'react';
import { Box, Avatar, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const UserCard = () => {
  return (
    <Box
      sx={{
        width: 320,
        height: 434,
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid #ECF0F5',
        bgcolor: 'white',
        position: 'fixed',
      }}
    >
      <Box
        component="img"
        src="https://placehold.co/291x72"
        alt="cover"
        sx={{ width: '100%', height: 72, objectFit: 'cover' }}
      />

      <Avatar
        src="https://placehold.co/56x56"
        sx={{
          width: 56,
          height: 56,
          border: '1px solid white',
          position: 'absolute',
          top: 44,
          left: 23,
        }}
      />

      <Box sx={{ position: 'absolute', top: 124, left: 23 }}>
        <Typography variant="subtitle1" fontWeight={500} color="#0C1024">
          Robert Fox
        </Typography>
        <Typography variant="caption" color="#27364B">
          Software Engineer
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', top: 206, left: 23 }}>
        <List sx={{ width: 235 }}>
          <ListItemButton selected>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#0C1024' }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: '#0C1024' }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ color: '#4B5669' }} />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: '#4B5669' }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <MessageIcon sx={{ color: '#4B5669' }} />
            </ListItemIcon>
            <ListItemText
              primary="Messages"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: '#4B5669' }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon sx={{ color: '#4B5669' }} />
            </ListItemIcon>
            <ListItemText
              primary="Notifications"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: '#4B5669' }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default UserCard;
