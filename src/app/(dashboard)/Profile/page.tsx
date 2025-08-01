"use client";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import PostCard from "@/components/PostCard/PostCard";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import { getMyPosts } from "@/Features/posts.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Profile() {
  let { user } = useAppSelector((store) => store.UserInfoReducer);
  const { myPosts, loading } = useAppSelector((store) => store.postReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userId = user?._id;
    if (userId) {
      dispatch(getMyPosts(userId));
    }
  }, [user]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 215, lg: 233 },
          width: "100%",
          mx: "auto",
          mb: { xs: 3, lg: 5 },
        }}
        position="relative"
        bgcolor="white"
        borderRadius={2}
        border="1px solid #ECF0F5"
        mb={5}
      >
        {/* Header Section */}
        <Stack
          sx={{
            display: "flex",
            position: "absolute",
            gap: { xs: 2, lg: 3 },
            top: { xs: 12, lg: 32 },
            left: { xs: 14, lg: 44 },
          }}
          direction={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
          <Avatar
            src={user?.photo}
            sx={{
              width: { xs: 74, lg: 96 }, // ← صغّر الحجم على الموبايل
              height: { xs: 74, lg: 96 },
              border: "2px solid white",
            }}
          />
          <Box position="relative">
            <Typography
              variant="h6"
              fontWeight={600}
              color="#27364B"
              sx={{
                fontSize: { xs: 18, lg: 22 }, // ← صغّر الخط على الموبايل
              }}
            >
              {user?.name}
            </Typography>
          </Box>
        </Stack>

        {/* Divider */}
        <Divider
          sx={{
            position: "absolute",
            top: { xs: 163, lg: 168 },
            width: "100%",
            borderColor: "#C8D0E1",
          }}
        />

        {/* Tabs */}
        <Stack
          direction="row"
          sx={{ position: "absolute", top: { xs: 166, lg: 178 }, left: 40 }}
        >
          <Button
            sx={{
              fontWeight: 700,
              fontSize: 16,
              textTransform: "initial",
              color: "#0C1024",
            }}
          >
            My Posts
          </Button>
        </Stack>

        {/* Stats */}
        <Stack
          direction="row"
          spacing={2}
          position="absolute"
          left={200}
          sx={{
            display: "flex",
            top: { xs: 24, lg: 54 },
            left: { xs: 160, sm: 170, lg: 700 },
            gap: { xs: 0, lg: 6 },
          }}
        >
          {[
            { label: "Posts", value: 12 },
            { label: "Followers", value: 207 },
            { label: "Following", value: 64 },
          ].map((item) => (
            <Stack key={item.label} alignItems="center" spacing={1}>
              <Typography
                fontWeight={700}
                sx={{ fontSize: { xs: 18, lg: 24 } }}
                color="#27364B"
              >
                {item.value}
              </Typography>
              <Typography
                fontWeight={400}
                sx={{ fontSize: { xs: 12, sm: 14 } }}
                color="#4B5669"
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={{ display: "flex", gap: 15 }}>
        <Box sx={{ width: "100%" }}>
          {loading ? (
            <Loading />
          ) : myPosts && myPosts.length > 0 ? (
            myPosts.map((post) => <PostCard key={post.id} postInfo={post} />)
          ) : (
            <Box
              sx={{
                height: "300px", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No posts found.
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ display: { xs: "none", lg: "initial" } }}>
          <SuggestedFriendsCard />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
