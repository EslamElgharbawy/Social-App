import Footer from '@/components/Footer/Footer';
import SuggestedFriendsCard from '@/components/SuggestedFriends/SuggestedFriends';
import { Avatar, Box, Divider, Stack, Typography, Paper } from '@mui/material';
import BessieCooper from '@/assets/images/Img.jpg'
import SamuelLee from '@/assets/images/Img5.jpg'
import JosephRodriguez from '@/assets/images/Img6.jpg'


const notifications = [
  {
    name: 'Bessie Cooper',
    message: 'start following you.',
    time: '10 minutes ago',
    avatar: BessieCooper,
  },
  {
    name: 'Samuel Lee',
    message: 'liked you post.',
    time: '1 hours ago',
    avatar: SamuelLee,
  },
  {
    name: 'Joseph Rodriguez',
    message: 'comment on your post.',
    time: 'yesterday',
    avatar: JosephRodriguez,
  },
];

export default function NotificationsCard() {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 15 }}>
        <Box>
          <Paper
            sx={{
              width: 582,
              height: 347,
              borderRadius: 2,
              border: '1px solid #ECF0F5',
              bgcolor: 'white',
              overflow: 'hidden',
              position: 'relative',
              p: 0,
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                position: 'absolute',
                top: 24,
                left: 32,
                fontSize: 16,
                fontWeight: 500,
                color: '#0C1024',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Notifications
            </Typography>

            {/* Divider */}
            <Divider
              sx={{
                position: 'absolute',
                top: 67,
                left: 1,
                width: 582,
                borderColor: '#F1F4F9',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 83,
                left: 1,
                width: 581,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              {notifications.map((noti, index) => (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    width: '100%',
                    px: 1,
                    py: 1,
                    borderBottom: index < notifications.length - 1 ? '1px solid #ECF0F5' : 'none',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ width: 292 }}>
                    <Avatar src={noti.avatar.src} sx={{ width: 40, height: 40 }} />
                    <Typography fontSize={14} fontWeight={500} color="#0C1024">
                      {noti.name}
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} color="#4B5669">
                      {noti.message}
                    </Typography>
                  </Stack>
                  <Typography fontSize={12} color="#707988">
                    {noti.time}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Paper>
        </Box>
        <Box>
          <SuggestedFriendsCard />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
