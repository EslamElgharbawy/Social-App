'use client';
import CreatePostCard from '@/components/CreatePost/CreatePost';
import Loading from '@/components/Loading/Loading';
import PostCard from '@/components/PostCard/PostCard';
import { getPosts } from '@/Features/posts.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/Store.hooks';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Home() {

  let { posts } = useAppSelector((store) => store.postReducer)

  const dispatch = useAppDispatch()
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login')
    }
    dispatch(getPosts())
  }, [])


  return <>
    <Box sx={{ minHeight: '100vh', bgcolor: '#FAFBFF', display: 'flex', flexDirection: 'column' }}>
      <Grid container >
        {/* Main Feed */}
        <Grid size={{ xs: 12, md: 12 }} >
          <CreatePostCard />
          {posts ? 
           posts.map((post) => <PostCard key={post._id} postInfo={post}/>) : <Loading />}
        </Grid>
      </Grid>



      
    </Box >
  </>

}
