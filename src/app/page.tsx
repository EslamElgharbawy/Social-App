'use client';

import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import UserCard from '@/components/ProfileNavigation/ProfileNavigation';
import PostCard from '@/components/PostCard/PostCard';
import Grid from '@mui/material/Grid';
import SuggestedFriendsCard from '@/components/SuggestedFriends/SuggestedFriends';
import CreatePostCard from '@/components/CreatePostCard/CreatePostCard';
import Footer from '@/components/Footer/Footer';
import { useEffect } from 'react';
import { getPosts } from '@/Features/posts.slice';
import { useAppDispatsh, useAppSelector } from '@/hooks/Store.hooks';
import Loading from '@/components/Loading/Loading';
export default function Home() {

  let { posts } = useAppSelector((store) => store.postReducer)
  const dispatch = useAppDispatsh()
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FAFBFF', display: 'flex', flexDirection: 'column' }}>

      {/* Top AppBar Mobile*/}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #ECF0F5', display: { md: 'none', xs: 'block' } }}>
        <Toolbar
          sx={{
            px: 3,
            py: 2,
            minHeight: 72,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo + Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              component="img"
              src={"/Vector.svg"}
              sx={{
                width: 26,
                height: 36,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: 20,
                color: '#0C1024',
                textTransform: 'capitalize',
                fontFamily: 'Manrope',
              }}
            >
              Social
            </Typography>
          </Box>

          {/* Icon on the right */}
          <Box
            component="img"
            src={'/Send.svg'}
            sx={{ cursor: "pointer", width: 25, height: 25 }}
          />

        </Toolbar>
      </AppBar>

      {/* Top AppBar*/}
      <AppBar position="fixed" color="default" elevation={0} sx={{ borderBottom: '1px solid #ECF0F5', display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, px: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={"/Logomark.svg"}
              alt="Logo"
              sx={{
                width: 40,
                height: 40
              }}

            />
            <Typography variant="h5" fontWeight={800} color="#0C1024">
              Social
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, cursor: 'pointer', color: '#27364B' }}>
            <Typography fontWeight={600} fontSize={18} sx={{ fontFamily: 'Inter, sans-serif' }}>
              Logout
            </Typography>
            <Box
              sx={{
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
            </Box>

          </Box>
        </Box>
      </AppBar>

      {/* Content placeholder */}
      <Grid container sx={{ mx: { xs: 1, md: 5 }, py: 3, my: { xs: 0, md: 8 } }}>
        <Grid size={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <UserCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} >
          <CreatePostCard />
          {posts ? posts.map((post) => <PostCard key={post._id} postInfo={post} />) : <Loading />}
        </Grid>
        <Grid size={3} sx={{ pl: 5, display: { xs: 'none', md: 'block' } }} >
          <SuggestedFriendsCard />
          <Footer />
        </Grid>
      </Grid>












      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { md: 'none', xs: 'block' } }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Profile" icon={<Avatar src="https://placehold.co/20x20" sx={{ width: 20, height: 20 }} />} />
          <BottomNavigationAction label="Alerts" icon={<NotificationsNoneIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />

        </BottomNavigation>
      </Paper>
    </Box>
  );
}
