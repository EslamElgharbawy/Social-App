"use client";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import PostCard from "@/components/PostCard/PostCard";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import UserCard from "@/components/UserCard/UserCard";
import { getPostDetails } from "@/Features/posts.slice";
import { setToken } from "@/Features/user.slice";
import { geUserInfo } from "@/Features/UserInfo.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { use, useEffect } from "react";
export default function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);
  const dispatch = useAppDispatch();
  const { postDetails } = useAppSelector((store) => store.postReducer);

  console.log("URL Param postId:", postId);
  console.log("Redux postDetails before fetch:", postDetails);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(geUserInfo());
    if (postId) {
      dispatch(getPostDetails(postId)).then((action) => {
        console.log("API response payload:", action.payload);
      });
    }
  }, [dispatch, postId]);
  return (
    <>
      <Head>
        <title>Post/{postDetails?._id}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is the profile page of the social app project."
        />
        <meta
          name="keywords"
          content="social app, profile, react, friends, posts"
        />
        <meta name="author" content="Eslam" />
      </Head>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#FAFBFF",
          py: { xs: 0, xl: 3 },
          my: { xs: 0 },
        }}
      >
        <Grid container sx={{ mx: { xs: 1, xl: 5 }, py: 3, my: 8 }}>
          {/* Sidebar */}
          <Grid size={3} sx={{ display: { xs: "none", xl: "block" } }}>
            <UserCard />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, xl: 6 }}>
            {postDetails ? (
              <PostCard
                key={postDetails._id}
                postInfo={postDetails}
                ShowAllComments
              />
            ) : (
              <Loading />
            )}
          </Grid>

          {/* Suggestions*/}
          <Grid size={3} sx={{ pl: 5, display: { xs: "none", xl: "block" } }}>
            <SuggestedFriendsCard fixed />
            <Footer fixed />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
