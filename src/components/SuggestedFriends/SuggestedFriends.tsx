import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Paper,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OliviaAnderson from '@/assets/images/Img8.jpg'
import ThomasBaker from '@/assets/images/Img2.png'
import LilyLee from '@/assets/images/Img9.jpg'
import AndrewHarris from '@/assets/images/Img7.jpg'

const SuggestedFriendsCard = ({ fixed = false }: { fixed?: boolean }) => {
  const friends = [
    { name: 'Olivia Anderson', role: 'Financial Analyst', src: OliviaAnderson },
    { name: 'Thomas Baker', role: 'Project Manager', src: ThomasBaker },
    { name: 'Lily Lee', role: 'Graphic Designer', src: LilyLee },
    { name: 'Andrew Harris', role: 'Data Scientist', src: AndrewHarris },
  ];

  return (
    <Box>
      <Paper
        sx={{
          width: 320,
          height: 435,
          position: fixed ? 'fixed' : 'relative',
          top: fixed ? 100 : 'auto',
          right: fixed ? 50 : 'auto',
          overflow: 'hidden',
          borderRadius: 2,
          border: '1px solid #ECF0F5',
          backgroundColor: 'white',
          mb: 5
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            position: 'absolute',
            top: 24,
            left: 40,
            fontSize: 16,
            fontWeight: 500,
            color: '#0C1024',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Suggested Friends
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: '100%',
            height: 0,
            borderTop: '1px solid #F1F4F9',
            position: 'absolute',
            top: 67,
            left: 1,
          }}
        />

        {/* Friend Rows */}
        {friends.map((friend, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 99 + index * 80, // top positions: 99, 179, 259, 339
              left: 32,
              width: 256,
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={friend.src.src} sx={{ width: 56, height: 56 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#0C1024',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {friend.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: '#27364B',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {friend.role}
                </Typography>
              </Box>
            </Box>

            <IconButton
              sx={{
                width: 32,
                height: 32,
                backgroundColor: '#F1F4F9',
                borderRadius: 1.5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }}
            >
              <MoreHorizIcon sx={{ fontSize: 20, color: '#5D6778' }} />
            </IconButton>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default SuggestedFriendsCard;
