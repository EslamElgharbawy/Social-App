import Footer from "@/components/Footer/Footer";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import { Avatar, Box, Divider, Stack, Typography, Paper } from "@mui/material";
import BessieCooper from "@/assets/images/Img.jpg";
import SamuelLee from "@/assets/images/Img5.jpg";
import JosephRodriguez from "@/assets/images/Img6.jpg";
import Head from "next/head";
const notifications = [
  {
    name: "Bessie Cooper",
    message: "start following you.",
    time: "10 minutes ago",
    avatar: BessieCooper,
  },
  {
    name: "Samuel Lee",
    message: "liked you post.",
    time: "1 hours ago",
    avatar: SamuelLee,
  },
  {
    name: "Joseph Rodriguez",
    message: "comment on your post.",
    time: "yesterday",
    avatar: JosephRodriguez,
  },
];

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Notifications</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is the notifications page of the social app project."
        />
        <meta
          name="keywords"
          content="social app, notifications, react, friends, updates"
        />
        <meta name="author" content="Eslam" />
      </Head>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: 2, md: 5 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Paper
              sx={{
                width: { xs: "100%", lg: 650 },
                height: 310,
                borderRadius: 2,
                border: "1px solid #ECF0F5",
                bgcolor: "white",
                overflow: "hidden",
                position: "relative",
                p: 0,
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 24,
                  left: 32,
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 500,
                  color: "#0C1024",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Notifications
              </Typography>

              {/* Divider */}
              <Divider
                sx={{
                  position: "absolute",
                  top: 67,
                  left: 1,
                  width: "100%",
                  borderColor: "#F1F4F9",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 83,
                  left: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
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
                      width: "100%",
                      px: 2,
                      py: 1,
                      borderBottom:
                        index < notifications.length - 1
                          ? "1px solid #ECF0F5"
                          : "none",
                      flexWrap: { lg: "wrap" },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ width: { lg: 500 } }}
                    >
                      <Avatar
                        src={noti.avatar.src}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", lg: "row" },
                          gap: { lg: 1 },
                        }}
                      >
                        <Typography
                          sx={{ fontSize: { xs: 13, lg: 14 } }}
                          fontWeight={500}
                          color="#0C1024"
                        >
                          {noti.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: { xs: 12, lg: 14 } }}
                          fontWeight={400}
                          color="#4B5669"
                        >
                          {noti.message}
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography
                      sx={{ fontSize: { xs: 11, lg: 13 } }}
                      color="#707988"
                    >
                      {noti.time}
                    </Typography>
                  </Stack>
                ))}
              </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              flexDirection: "column",
              gap: 2,
              display: { xs: "none", lg: "initial" },
            }}
          >
            <SuggestedFriendsCard />
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}
