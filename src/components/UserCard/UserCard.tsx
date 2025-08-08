'use client'
import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Cover from '@/assets/images/Cover.jpg';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/Store.hooks';

const UserCard = () => {
  const { user } = useAppSelector((store) => store.UserInfoReducer)
  const router = useRouter();
  const pathName = usePathname();

  const NavItems = [
    { key: "home", path: "/", icon: <HomeIcon />, label: "Home" },
    { key: "profile", path: "/Profile", icon: <PersonIcon />, label: "Profile" },
    { key: "messages", path: "/Messages", icon: <MessageIcon />, label: "Messages" },
    { key: "notifications", path: "/Notifications", icon: <NotificationsIcon />, label: "Notifications" }
  ];
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
      {/*Cover image*/}
      <Box
        component="img"
        src={Cover.src}
        alt="cover"
        sx={{ width: '100%', height: 72, objectFit: 'cover' }}
      />
      {/*Avatar*/}
      <Avatar
        src={user?.photo}
        sx={{
          width: 56,
          height: 56,
          border: '1px solid white',
          bgcolor: 'white',
          position: 'absolute',
          top: 44,
          left: 23,
          zIndex: 50
        }}
      />
      {/*Username*/}
      <Box sx={{ position: 'absolute', top: 124, left: 23 }}>
        <Typography variant="subtitle1" fontWeight={500} color="#0C1024">
          {user?.name}
        </Typography>
      </Box>

      {/*Nav list*/}
      <Box sx={{ position: 'absolute', top: 180, left: 23 }}>
        <List sx={{ width: 235 }}>
          {NavItems.map((item, index) => {
            const isSelected = pathName === item.path;

            return (
              <Box key={item.key}>
                <ListItemButton
                  selected={isSelected}
                  onClick={() => router.push(item.path)}
                >
                  <ListItemIcon>
                    {React.cloneElement(item.icon, {
                      sx: { color: isSelected ? '#0C1024' : '#4B5669' }
                    })}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: isSelected ? '#0C1024' : '#4B5669'
                    }}
                  />
                </ListItemButton>
                {index !== NavItems.length - 1 && <Divider />}
              </Box>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default UserCard;
