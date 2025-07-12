'use client'
import Footer from '@/components/Footer/Footer';
import MyPostCard from '@/components/MyPostCard/MyPostCard';
import SuggestedFriendsCard from '@/components/SuggestedFriends/SuggestedFriends';
import { useAppSelector } from '@/hooks/Store.hooks';
import { Avatar, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';

export default function Profile() {
  let { user } = useAppSelector((store) => store.UserInfoReducer)
  return <>
    <Box
      width={'100%'}
      height={233}
      position="relative"
      bgcolor="white"
      borderRadius={2}
      border="1px solid #ECF0F5"
      mb={5}
    >
      {/* Header Section */}
      <Stack direction="row" spacing={3} position="absolute" top={32} left={44}>
        <Avatar
          src={user?.photo}
          sx={{ width: 96, height: 96, border: '2px solid white' }}
        />
        <Box position="relative" height={52}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" fontWeight={600} color="#27364B">
              {user?.name}
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          position: 'absolute',
          top: 168,
          width: '100%',
          borderColor: '#C8D0E1',
        }}
      />

      {/* Tabs */}
      <Stack direction="row" spacing={4} position="absolute" top={178} left={40}>
        <Button sx={{ fontWeight: 700, fontSize: 17, textTransform: "initial", color: "#0C1024" }}>
          My Posts
        </Button>
      </Stack>

      {/* Stats */}
      <Stack direction="row" spacing={6} position="absolute" top={54} left={700}>
        {[
          { label: 'Posts', value: 12 },
          { label: 'Followers', value: 207 },
          { label: 'Following', value: 64 },
        ].map((item) => (
          <Stack key={item.label} alignItems="center" spacing={1}>
            <Typography fontWeight={700} fontSize={24} color="#27364B">
              {item.value}
            </Typography>
            <Typography fontWeight={400} fontSize={12} color="#4B5669">
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
    <Box sx={{ display: "flex", gap:15 }}>
      <Box>
        <MyPostCard />
      </Box>
      <Box>
        <SuggestedFriendsCard />
        <Footer />
      </Box>
    </Box>



  </>
}
