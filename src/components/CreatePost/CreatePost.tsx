import React, { useRef } from "react";
import { Box, Typography, Avatar, Button, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useAppSelector } from "@/hooks/Store.hooks";
import styled from "@emotion/styled";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePost = () => {
  let { user } = useAppSelector((store) => store.UserInfoReducer);
  let { token } = useAppSelector((store) => store.userReducer);
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
  const postContent = useRef<HTMLInputElement>(null);
  const postFile = useRef<HTMLInputElement>(null);

  async function createPostCard() {
    const Content = postContent.current?.value || "";
    const File = postFile.current?.files?.[0];

    const postData = new FormData();
    postData.append("body", Content);
    if (File) {
      postData.append("image", File);
    }

    try {
      const options = {
        url: "https://linked-posts.routemisr.com/posts",
        method: "POST",
        headers: {
          token,
        },
        data: postData,
        
      };
      let { data } = await axios.request(options);
      if (data.message==="success") {
          toast.success('Post has been created')
        }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        padding: "21px 28px",
        mb: 3,
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: 2,
        border: "1px solid #ECF0F5",
        display: "inline-flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar src={user?.photo} sx={{ width: 40, height: 40 }} />
        <Box
          sx={{
            flex: "1 1 0",
            height: 64,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <TextField
            id="standard-basic"
            label="What's on your mind?"
            variant="standard"
            fullWidth
            inputRef={postContent}
          />
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 0, md: "290px" },
        }}
      >
        <Button
          component="label"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <AddPhotoAlternateIcon sx={{ fontSize: 25, color: "#27364B" }} />
          <VisuallyHiddenInput type="file" ref={postFile} />
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 500,
              color: "#27364B",
              fontFamily: "Inter, sans-serif",
              lineHeight: "24.5px",
              textTransform: "initial",
            }}
          >
            Add Media
          </Typography>
        </Button>

        <Button
          onClick={createPostCard}
          variant="contained"
          sx={{
            height: 32,
            padding: "1px 20px",
            borderRadius: "100px",
            backgroundColor: "#4C68D5",
            textTransform: "none",
            fontSize: 16,
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            lineHeight: "24.5px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#3b54b2",
              boxShadow: "none",
            },
          }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
