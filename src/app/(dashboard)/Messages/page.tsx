"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NewMessage from "@/assets/images/Write.svg";
import BessieCooper from "@/assets/images/Img.jpg";
import ThomasBaker from "@/assets/images/Img2.png";
import DanielBrown from "@/assets/images/Img3.jpg";
import RonaldRichards from "@/assets/images/Img4.jpg";
import { useAppSelector } from "@/hooks/Store.hooks";
import Head from "next/head";

export default function Messages() {
  const { user } = useAppSelector((store) => store.UserInfoReducer);

  return (
    <>
      <Head>
        <title>Messages</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is the messages page of the social app project."
        />
        <meta
          name="keywords"
          content="social app, messages, react, friends, chat"
        />
        <meta name="author" content="Eslam" />
      </Head>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: 415,
            lg: 465,
            xl: 934,
          },
          height: { xs: "auto", xl: 581 },
          position: "relative",
          bgcolor: "white",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid #ECF0F5",
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
        }}
      >
        {/* Conversations Panel */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
            borderRight: { xl: "1px solid #F1F4F9" },
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2,
              pt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight={500} fontSize={16} color="#0C1024">
              Messages
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                sx={{
                  border: "1px solid #ECF0F5",
                  borderRadius: 999,
                }}
              >
                <Typography fontSize={12} color="#5D6778" fontWeight={500}>
                  Online
                </Typography>
              </IconButton>
              <MoreHorizIcon sx={{ color: "#5D6778" }} />
            </Box>
          </Box>

          {/* Conversations List */}
          <Stack sx={{ py: 2 }}>
            {[
              {
                name: "Bessie Cooper",
                msg: `Hi, ${user?.name}. I'm facing some chall ...`,
                src: BessieCooper,
                time: "Online",
                active: true,
              },
              {
                name: "Thomas Baker",
                msg: "I have a job interview coming up ...",
                src: ThomasBaker,
              },
              {
                name: "Daniel Brown",
                msg: "Not much, just planning to relax ...",
                src: DanielBrown,
              },
              {
                name: "Ronald Richards",
                msg: "I'm stuck on this bug in the code ...",
                src: RonaldRichards,
              },
            ].map((conv, idx) => (
              <Stack
                key={idx}
                direction="row"
                spacing={2}
                sx={{
                  px: 3,
                  py: 2,
                  bgcolor: conv.active ? { xl: "#F1F4F9" } : "transparent",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Avatar src={conv.src.src} sx={{ width: 48, height: 48 }} />
                  <FiberManualRecordIcon
                    sx={{
                      width: 8,
                      height: 8,
                      position: "absolute",
                      bottom: 4,
                      right: 4,
                      color: conv.active ? "#036B30" : "#5D6778",
                      border: "1px solid white",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Stack spacing={0.5}>
                  <Typography fontSize={14} fontWeight={500} color="#0C1024">
                    {conv.name}
                  </Typography>
                  <Typography fontSize={12} fontWeight={400} color="#27364B">
                    {conv.msg}
                  </Typography>
                </Stack>
              </Stack>
            ))}

            <Divider sx={{ borderColor: "#ECF0F5", my: 1 }} />
            <Button
              fullWidth
              sx={{ px: 3, py: 1.5, justifyContent: "flex-start" }}
            >
              <Box
                component="img"
                src={NewMessage.src}
                sx={{ width: 20, mr: 2 }}
              />
              <Typography fontSize={14} fontWeight={400} color="#27364B">
                New Message
              </Typography>
            </Button>
          </Stack>
        </Box>

        {/* Chat Area */}
        <Box
          sx={{
            display: { xs: "none", xl: "block" },
            position: "absolute",
            left: 360,
            top: 107,
            width: 542,
            height: 442,
          }}
        >
          {/* Message From Other */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ position: "absolute", top: 0 }}
          >
            <Avatar src={BessieCooper.src} sx={{ width: 32, height: 32 }} />
            <Box
              sx={{
                bgcolor: "#F1F4F9",
                p: 1.5,
                borderRadius: "0 8px 8px 8px",
                maxWidth: 416,
              }}
            >
              <Typography fontSize={14} fontWeight={500} color="#0C1024">
                Bessie
              </Typography>
              <Typography fontSize={12} fontWeight={400} color="#5D6778">
                Marketing Manager
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color="#27364B"
                lineHeight="24.5px"
              >
                Hi, {user?.name}. I&apos;m facing some challenges in optimizing
                my code for performance. Can you help?
              </Typography>
              <Typography
                align="right"
                fontSize={12}
                fontWeight={400}
                color="#5D6778"
              >
                12:45 PM
              </Typography>
            </Box>
          </Stack>

          {/* Message From You */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            sx={{ position: "absolute", top: 154, width: "100%" }}
          >
            <Box
              sx={{
                bgcolor: "#6174D9",
                p: 1.5,
                borderRadius: "8px 8px 8px 0",
                maxWidth: 416,
              }}
            >
              <Typography
                fontSize={14}
                fontWeight={400}
                color="white"
                lineHeight="24.5px"
              >
                Hi, Bessie 👋 I&apos;d be glad to help you with optimizing your
                code for better performance. To get started, could you provide
                me with some more details about the specific challenges
                you&apos;re facing?
              </Typography>
              <Typography
                align="right"
                fontSize={12}
                fontWeight={400}
                color="#F1F4F9"
              >
                12:55 PM
              </Typography>
            </Box>
          </Stack>

          {/* Message Input */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 16,
              width: "calc(100% - 32px)",
            }}
          >
            <Avatar src={user?.photo} sx={{ width: 48, height: 48 }} />
            <Box
              sx={{
                flex: 1,
                height: 44,
                px: 3,
                py: 1,
                borderRadius: 1.5,
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <InputBase
                placeholder="Message ..."
                sx={{ fontSize: 14, color: "#707988" }}
              />
              <SendIcon sx={{ width: 20, height: 20, color: "#5D6778" }} />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
