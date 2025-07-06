'use client';

import { Avatar, Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PostCard from '@/components/PostCard/PostCard';
import Grid from '@mui/material/Grid';
import SuggestedFriendsCard from '@/components/SuggestedFriends/SuggestedFriends';
import CreatePostCard from '@/components/CreatePostCard/CreatePostCard';
import Footer from '@/components/Footer/Footer';
import { useEffect } from 'react';
import { getPosts } from '@/Features/posts.slice';
import { useAppDispatsh, useAppSelector } from '@/hooks/Store.hooks';
import Loading from '@/components/Loading/Loading';
import Navbar from '@/components/Navbar/Navbar';
import UserCard from '@/components/UserCard/UserCard';
import { useRouter } from 'next/navigation';
export default function Home() {

  let { posts } = useAppSelector((store) => store.postReducer)
  const dispatch = useAppDispatsh()
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login')
    }
    dispatch(getPosts())
  }, [])

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FAFBFF', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

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
