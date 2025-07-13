'use client';
import { Avatar, Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PostCard from '@/components/PostCard/PostCard';
import Grid from '@mui/material/Grid';
import CreatePostCard from '@/components/CreatePostCard/CreatePostCard';
import { useEffect } from 'react';
import { getPosts } from '@/Features/posts.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/Store.hooks';
import Loading from '@/components/Loading/Loading';
import { useRouter } from 'next/navigation';
import { setToken } from '@/Features/user.slice';
import { geUserInfo } from '@/Features/UserInfo.slice';
export default function Home() {

  let { posts } = useAppSelector((store) => store.postReducer)
  let { user } = useAppSelector((store) => store.UserInfoReducer)

  const dispatch = useAppDispatch()
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login')
    }
    dispatch(setToken(token))
    dispatch(geUserInfo())
    dispatch(getPosts())
  }, [])


  return <>
    <Box sx={{ minHeight: '100vh', bgcolor: '#FAFBFF', display: 'flex', flexDirection: 'column' }}>
      <Grid container >
        {/* Main Feed */}
        <Grid size={{ xs: 12, md: 12 }} >
          <CreatePostCard />
          {posts ? 
           posts.map((post) => <PostCard key={post._id} postInfo={post} ShowAllComments={false}/>) : <Loading />}
        </Grid>
      </Grid>



      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { md: 'none', xs: 'block' } }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Profile" icon={<Avatar src={user?.photo} sx={{ width: 20, height: 20 }} />} />
          <BottomNavigationAction label="Alerts" icon={<NotificationsNoneIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />

        </BottomNavigation>
      </Paper>
    </Box >
  </>

}
