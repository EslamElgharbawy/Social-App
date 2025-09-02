"use client";
import CreatePostCard from "@/components/CreatePost/CreatePost";
import Loading from "@/components/Loading/Loading";
import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/Features/posts.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const { posts } = useAppSelector((store) => store.postReducer);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
    }
    dispatch(getPosts());
  }, [router, dispatch]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is the home page of the social app project."
        />
        <meta
          name="keywords"
          content="social app, home, react, friends, posts"
        />
        <meta name="author" content="Eslam" />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#FAFBFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container>
          {/* Main Feed */}
          <Grid size={{ xs: 12, md: 12 }}>
            <CreatePostCard />
            {posts ? (
              posts.map((post) => <PostCard key={post._id} postInfo={post} />)
            ) : (
              <Loading />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
