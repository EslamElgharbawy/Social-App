"use client";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import PostCard from "@/components/PostCard/PostCard";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import { getMyPosts } from "@/Features/posts.slice";
import { geUserInfo } from "@/Features/UserInfo.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import styled from "@emotion/styled";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Profile() {
  let { user } = useAppSelector((store) => store.UserInfoReducer);
  const { myPosts, loading } = useAppSelector((store) => store.postReducer);
  const { token } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();
  
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  
  const PhotoRef = useRef<HTMLInputElement>(null);
  async function geUserPhoto() {
    const toastId = toast.loading("Please wait...", { position: "top-center" });
    const photo = PhotoRef.current?.files?.[0];

    const UploadPhoto = new FormData();
    if (photo) {
      UploadPhoto.append("photo", photo);
    }
    try {
      const options = {
        url: "https://linked-posts.routemisr.com/users/upload-photo",
        method: "PUT",
        headers: {
          token,
        },
        data: UploadPhoto,
      };
      let { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Saved successfully", {
          id: toastId,
          position: "top-center",
        });
        dispatch(geUserInfo())
      } else {
        toast.error("Upload failed", { id: toastId, position: "top-center" });
      }
    } catch (error) {
      toast.error("An error occurred", { id: toastId, position: "top-center" });
      console.log(error);
    }
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          height: { xs: 215, xl: 233 },
          width: "100%",
          mb: { xs: 3, xl: 5 },
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
            gap: { xs: 2, xl: 3 },
            top: { xs: 12, xl: 32 },
            left: { xs: 14, xl: 44 },
          }}
          direction={{ xs: "column", xl: "row" }}
          alignItems={{ xs: "center", xl: "flex-start" }}
        >
          <Avatar
            src={user?.photo}
            sx={{
              width: { xs: 74, xl: 96 },
              height: { xs: 74, xl: 96 },
              border: "2px solid white",
              "& img": {
                objectFit: "cover",
              },
            }}
          />
          <Box position="relative">
            <Typography
              variant="h6"
              fontWeight={600}
              color="#27364B"
              sx={{
                fontSize: { xs: 18, xl: 22 },
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
            top: { xs: 163, xl: 168 },
            width: "100%",
            borderColor: "#C8D0E1",
          }}
        />

        {/* Tabs */}
        <Box sx={{ position: "relative", mx: "auto" }}>
          <Stack
            direction="row"
            sx={{
              position: "absolute",
              top: { xs: 166, xl: 175 },
              left: { xs: "50%", xl: 40 },
              transform: { xs: "translateX(-50%)", xl: "none" },
            }}
          >
            {/* Tabs for small screens */}
            <Box sx={{ display: { xs: "initial", xl: "none" } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ textTransform: "initial" }}
                  label={<GridViewIcon />}
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "initial" }}
                  label={<SettingsIcon />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>

            {/* Tabs for large screens */}
            <Box sx={{ display: { xs: "none", xl: "initial" } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ textTransform: "initial" }}
                  label="My Posts"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "initial" }}
                  label="Settings"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
          </Stack>
        </Box>

        {/* Stats */}
        <Stack
          direction="row"
          spacing={2}
          position="absolute"
          sx={{
            display: "flex",
            top: { xs: 24, xl: 54 },
            left: { xs: 170, sm: 180, md: 210, lg: 260, xl: 700 },
            gap: { xs: 0, xl: 6 },
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
                sx={{ fontSize: { xs: 18, xl: 24 } }}
                color="#27364B"
              >
                {item.value}
              </Typography>
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: 12, md: 13 } }}
                color="#4B5669"
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }}>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ flexGrow: 1 }}>
              {myPosts && myPosts.length > 0 ? (
                myPosts.map((post) => (
                  <PostCard key={post.id} postInfo={post} />
                ))
              ) : loading ? (
                <Loading />
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

            <Box sx={{ display: { xs: "none", xl: "block" }, ml: 4 }}>
              <SuggestedFriendsCard />
              <Footer />
            </Box>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "white",
              borderRadius: 2,
              border: "1px solid #ECF0F5",
              overflow: "hidden",
              mx: "auto",
              p: 3,
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
              gap: { xs: 2, xl: 0 },
            }}
          >
            {/* Form */}
            <Box sx={{ flexGrow: 1, pl: { xl: 4 } }}>
              <Typography
                sx={{
                  fontWeight: { xs: 400, xl: 500 },
                  fontSize: { xs: 18, xl: 20 },
                  color: "#0C1024",
                  borderBottom: { xs: "1px solid #E1E5EB", xl: "none" },
                  pb: { xs: 2, xl: 0 },
                  mb: 3,
                  textAlign: { xs: "center", xl: "start" },
                }}
              >
                Settings
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Button
                  component="label"
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", xl: "50%" },
                    borderColor: "#ABB0B9",
                    borderRadius: 1.5,
                    height: 60,
                  }}
                >
                  <VisuallyHiddenInput type="file" ref={PhotoRef} />
                  <Typography
                    sx={{
                      color: "#4B5669",
                      fontWeight: 400,
                      fontSize: 14,
                      textTransform: "none",
                    }}
                  >
                    Choose an image for avatar
                  </Typography>
                </Button>

                <Button
                  onClick={geUserPhoto}
                  variant="contained"
                  sx={{
                    width: { xs: "100%",xl: "50%" },
                    bgcolor: "#0C1024",
                    color: "white",
                    height: 44,
                    textTransform: "none",
                    borderRadius: 1.5,
                    mb: 2,
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
      </Box>
    </>
  );
}
